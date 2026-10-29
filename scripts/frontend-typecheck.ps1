Set-Location "$PSScriptRoot\..\frontend"

pnpm type-check

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}