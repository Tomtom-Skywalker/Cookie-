@echo off
color d

echo Starting Bot At %TIME% On %DATE%..
:main
node index.js
echo Restarting Bot..
goto main