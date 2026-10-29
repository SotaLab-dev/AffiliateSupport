Set-Location "$PSScriptRoot\..\backend"

uv run ruff format

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}