cls
for /F "tokens=2" %%i in ('date /t') do set mydate=%%i
for /F "tokens=2" %%i in ('time /t') do set mytimeam=%%i
set mytime=%time%
git add .
git commit . -m "@dream-25   %mydate%  %mytime% %mytimeam%"
git push -f origin main
echo "Deploy Done"