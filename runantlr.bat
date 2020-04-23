set ANTLR="C:\Users\agast\Desktop\antlr-4.8-complete.jar"
set JAVA="C:\Program Files (x86)\Java\jre1.8.0_221\bin\java.exe"
%JAVA% -cp %ANTLR% org.antlr.v4.Tool -Dlanguage=JavaScript "%1"
