call ng build --prod --aot
call ionic cordova build --release android

call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore shrimadbhagwatgeetainmarathi.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk ShrimadBhagwatGeetaInMarathiApp
call zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk app-shrimad-bhagwat-geeta-in-marathi.apk
