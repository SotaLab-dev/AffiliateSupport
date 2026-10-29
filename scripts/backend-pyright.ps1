Set-Location "$PSScriptRoot\..\backend"

uv run pyright

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}