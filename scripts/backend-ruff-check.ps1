Set-Location "$PSScriptRoot\..\backend"

uv run ruff check --fix

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}