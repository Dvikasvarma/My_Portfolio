$path = 'D:\My Portfolio\portfolio-website-main\.git\index.lock'
if (Test-Path $path) {
    Remove-Item -LiteralPath $path -Force
    if (-not (Test-Path $path)) {
        Write-Output 'REMOVED'
    } else {
        Write-Output 'STILL_EXISTS'
    }
} else {
    Write-Output 'NOT_FOUND'
}
