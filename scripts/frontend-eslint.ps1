Set-Location "$PSScriptRoot\..\frontend"

pnpm lint:fix

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}