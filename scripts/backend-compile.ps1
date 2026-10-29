Set-Location "$PSScriptRoot\..\backend"

uv run python -m compileall .

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}