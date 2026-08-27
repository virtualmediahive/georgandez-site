param([int]$Port = $(if ($env:PORT) { [int]$env:PORT } else { 5500 }))

$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$Port/"

$mime = @{
  ".html" = "text/html"; ".css" = "text/css"; ".js" = "application/javascript";
  ".jpg" = "image/jpeg"; ".jpeg" = "image/jpeg"; ".png" = "image/png"; ".svg" = "image/svg+xml";
  ".ico" = "image/x-icon"; ".json" = "application/json"; ".woff" = "font/woff"; ".woff2" = "font/woff2";
  ".mp4" = "video/mp4"; ".webm" = "video/webm"; ".mov" = "video/quicktime"; ".mp3" = "audio/mpeg"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $req = $context.Request
  $res = $context.Response
  $path = $req.Url.AbsolutePath
  if ($path -eq "/") { $path = "/index.html" }
  $filePath = Join-Path $root ($path.TrimStart("/"))
  if (Test-Path $filePath -PathType Leaf) {
    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
    $contentType = $mime[$ext]
    if (-not $contentType) { $contentType = "application/octet-stream" }
    $fileLength = (Get-Item $filePath).Length
    $res.Headers.Add("Accept-Ranges", "bytes")
    $res.ContentType = $contentType

    $rangeHeader = $req.Headers["Range"]
    if ($rangeHeader -and $rangeHeader -match "bytes=(\d*)-(\d*)") {
      $start = if ($matches[1]) { [int64]$matches[1] } else { 0 }
      $end = if ($matches[2]) { [int64]$matches[2] } else { $fileLength - 1 }
      if ($end -ge $fileLength) { $end = $fileLength - 1 }
      $chunkLength = $end - $start + 1

      $res.StatusCode = 206
      $res.Headers.Add("Content-Range", "bytes $start-$end/$fileLength")
      $res.ContentLength64 = $chunkLength

      $stream = [System.IO.File]::OpenRead($filePath)
      $stream.Seek($start, [System.IO.SeekOrigin]::Begin) | Out-Null
      $buffer = New-Object byte[] 65536
      $remaining = $chunkLength
      while ($remaining -gt 0) {
        $toRead = [Math]::Min($buffer.Length, $remaining)
        $read = $stream.Read($buffer, 0, $toRead)
        if ($read -le 0) { break }
        $res.OutputStream.Write($buffer, 0, $read)
        $remaining -= $read
      }
      $stream.Close()
    } else {
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    }
  } else {
    $res.StatusCode = 404
    $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
    $res.OutputStream.Write($msg, 0, $msg.Length)
  }
  $res.OutputStream.Close()
}
