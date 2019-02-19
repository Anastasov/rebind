@echo off
set root="E:\UOM\ReBind\heroku-src\rebind"
IF EXIST %root% cd /D %root%
IF EXIST %root% set /p commitMessage="Commit message: "
IF EXIST %root% del /S /Q "%root%\src\main\webapp\resources\"
IF EXIST %root% cd %root%/frontend
IF EXIST %root% call "C:\Program Files\nodejs\npm" run prod
IF EXIST %root% cd %root%
IF EXIST %root% git add .
IF EXIST %root% git commit -m "%commitMessage"
IF EXIST %root% git push origin-2 master
IF NOT EXIST %root% echo Please, configure absolute root directory in .bat pause

