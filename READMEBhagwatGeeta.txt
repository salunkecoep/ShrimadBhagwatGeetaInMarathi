-------------------------------------------------------------------------------------------------
				Shrimad Bhagwat Geeta
-------------------------------------------------------------------------------------------------
# Shrimad Bhagwat Geeta In Marathi
https://mr.wikisource.org/wiki/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%A6%E0%A5%8D%E2%80%8C%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%A6%E0%A5%8D%E2%80%8C%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BE_(%E0%A4%AE%E0%A5%82%E0%A4%B3_%E0%A4%B6%E0%A5%8D%E0%A4%B2%E0%A5%8B%E0%A4%95,_%E0%A4%B8%E0%A4%82%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%BF%E0%A4%A4_%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%B5%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5_%E0%A4%86%E0%A4%A3%E0%A4%BF_%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5_%E0%A4%AF%E0%A4%BE%E0%A4%B8%E0%A4%B9)
com.precious.shrimad.bhagwat.geeta.in.marathi

# Shrimad Bhagwat Geeta In English
https://en.wikisource.org/wiki/Bhagavad-Gita_(Besant_4th)
https://sundipmeghani.com/2012/04/26/gita/
https://www.bhagavad-gita.us/the-bhagavad-gita-in-audio-hindi/

com.precious.shrimad.bhagwat.geeta.in.english
keytool -genkey -v -keystore shrimadbhagwatgeetainenglish.keystore -alias ShrimadBhagwatGeetaInEnglishApp -keyalg RSA -keysize 2048 -validity 10000
keytool -importkeystore -srckeystore shrimadbhagwatgeetainenglish.keystore -destkeystore shrimadbhagwatgeetainenglish.keystore -deststoretype pkcs12

# Shrimad Bhagwat Geeta In Hindi
https://en.wikisource.org/wiki/Bhagavad-Gita_(Besant_4th)
https://sundipmeghani.com/2012/04/26/gita/
com.precious.shrimad.bhagwat.geeta.in.hindi
keytool -genkey -v -keystore shrimadbhagwatgeetainhindi.keystore -alias ShrimadBhagwatGeetaInHindiApp -keyalg RSA -keysize 2048 -validity 10000
keytool -importkeystore -srckeystore shrimadbhagwatgeetainhindi.keystore -destkeystore shrimadbhagwatgeetainhindi.keystore -deststoretype pkcs12

# Hide splash screen only when app is ready
https://medium.com/@chrisbenseler/ionic-3-hide-splash-screen-only-when-app-is-ready-f4e624902009

# Audio
https://www.bhagavad-gita.org/

# Audio compress
https://www.onlineconverter.com/compress-mp3

# Audio Player
https://stackblitz.com/edit/ionic-4-audio-player?file=src%2Fapp%2Faudio-player%2Faudio-player.component.html
-------------------------------------------------------------------------------------------------
# Show scroll indicator
# Add audio in it
# Increase splash screen time
# Remove white boundary appear around icon in mobile
# Show circle around the border after click
# Update default font
# Use good default background color for dialog and make it customizable
# In night mode use color(https://colorhunt.co/palettes/dark) #393232 #363333 #414141 #313131
-------------------------------------------------------------------------------------------------
cd /d D:\Amol\apps\ShrimadBhagwatGeetaInMarathi
code .
ionic serve

cd /d D:\Amol\apps\ShrimadBhagwatGeetaInEnglish
code .
ionic serve 

cd /d D:\Amol\apps\ShrimadBhagwatGeetaInHindi
code .
ionic serve 

ionic start ShrimadBhagwatGeetaInMarathi blank --type=angular

cd ShrimadBhagwatGeetaInMarathi
npm install --save @angular/material @angular/cdk
npm install @angular/animations@latest --save

ionic serve 
ionic serve --lab

ng generate component Chapter1
ng generate component Chapter2
ng generate component Chapter3
ng generate component Chapter4
ng generate component Chapter5
ng generate component Chapter6
ng generate component Chapter7
ng generate component Chapter8
ng generate component Chapter9
ng generate component Chapter10
ng generate component Chapter11
ng generate component Chapter12
ng generate component Chapter13
ng generate component Chapter14
ng generate component Chapter15
ng generate component Chapter16
ng generate component Chapter17
ng generate component Chapter18
ng generate component Summary
ng generate component AudioPlayer

ionic g service appSettings
-------------------------------------------------------------------------------------------------
# admob
https://www.joshmorony.com/integrating-google-admob-advertisements-in-ionic/
https://github.com/ratson/cordova-plugin-admob-free#installation
https://www.freakyjolly.com/ionic-admob-free-native-tutorial/#.X4mx_9AzaUk

npm install @ionic-native/admob-free --save

cordova plugin add cordova-plugin-admob-free --save 
cordova plugin add cordova-plugin-admob-free --save --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"


npm uninstall -g cordova
npm install -g cordova

https://ionicframework.com/docs/v3/native/admob-free/
https://www.techiediaries.com/ionic-cordova-admob-ads/
ionic cordova plugin add cordova-plugin-admob-free --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"

npm install @ionic-native/admob-free

https://ionicframework.com/docs/v3/native/admob-pro/
ionic cordova plugin add cordova-plugin-admobpro --save --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"
npm install --save @ionic-native/admob-pro

# Admob
https://www.nikola-breznjak.com/blog/codeproject/adding-admob-to-ionic-framework-application-step-by-step/
https://github.com/floatinghotpot/cordova-plugin-admob
https://github.com/floatinghotpot/cordova-plugin-admob/blob/master/test/index.html	

cordova plugin remove com.rjfun.cordova.plugin.admob

cordova plugin add com.rjfun.cordova.plugin.admob

Unable to get provider com.google.android.gms.ads.MobileAdsInitProvider: java.lang.IllegalStateException

        <config-file parent="/manifest/application" target="AndroidManifest.xml">
            <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-4127318722091118~3859329747" />
        </config-file>
		
# platforms\android\app\src\main\AndroidManifest.xml		
<manifest>
    <application>
        <!-- TODO: Replace with your real AdMob app ID -->
        <meta-data
            android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="ca-app-pub-################~##########"/>
    </application>
</manifest>		

ionic cordova plugin add cordova-plugin-admobpro --save --variable ADMOB_APP_ID="<YOUR_ADMOB_APP_ID_AS_FOUND_IN_ADMOB>"
npm install @ionic-native/admob-pro

-------------------------------------------------------------------------------------------------
Congrats! Your app has been added to AdMob

Bhagavad Gita in Marathi Audio
Free | Android
App ID: 
ca-app-pub-4127318722091118~3859329747
content_copy
Next steps
Make a note of your new app ID. You'll need to add it to your app's source code to run AdMob.
Create an ad unit to display ads in your app.

Next, place the ad unit inside your app
Follow these instructions:
Complete the instructions in the Google Mobile Ads SDK guide using this app ID:
Bhagavad Gita in Marathi Audio
ca-app-pub-4127318722091118~3859329747
Follow the banner implementation guide to integrate the SDK. You'll specify ad type, size and placement when you integrate the code using this ad unit ID:
Banner
ca-app-pub-4127318722091118/8914864234
Review the AdMob policies to ensure that your implementation complies.
-------------------------------------------------------------------------------------------------
# Create apk file
https://ionicframework.com/docs/v1/guide/publishing.html

# Package Name (id)
com.precious.shrimad.bhagwat.geeta.in.marathi

ng build --prod --aot
ionic cordova build android
ionic cordova build --release android

keytool -genkey -v -keystore shrimadbhagwatgeetainmarathi.keystore -alias ShrimadBhagwatGeetaInMarathiApp -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore shrimadbhagwatgeetainmarathi.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk ShrimadBhagwatGeetaInMarathiApp
zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk app-shrimad-bhagwat-geeta-in-marathi.apk

Is CN=Amol Salunke
OU=Software Development
O=Precious Software Pvt. Ltd.
L=Pune
ST=Maharashtra
C=IN 
correct?
-------------------------------------------------------------------------------------------------
# Title
Bhagavad Gita in Marathi Audio 

# Developer
Precious Technology

# Short description 
'Bhagavad Gita' : "The Song of God"

# About this app
Bhagavad Gita is knowledge of five basic truths and the relationship of each truth to the other: These five truths are Krishna, or God, the individual soul, the material world, action in this world, and time. The Gita lucidly explains the nature of consciousness, the self, and the universe. It is the essence of India's spiritual wisdom.

Bhagavad Gita, is a part of the 5th Veda (written by Vedavyasa - ancient Indian saint) and Indian Epic - Mahabharata. It was narrated for the first time in the battle of Kurukshetra, by Lord Krishna to Arjun.

The Bhagavad Gita, also referred to as Gita, is a 700–verse Dharmic scripture that is part of the ancient Sanskrit epic Mahabharata. This scripture contains a conversation between Pandava prince Arjuna and his guide Krishna on a variety of philosophical issues. 

★ Features ★
---------------
★ Offline App. Large size due to high quality sound.
★ Contain all 700 Sanskrit Shlokas with Marathi translation.
★ Fully functional without internet.
★ High quality sound.
★ Simple and intuitive user interface.
★ Provide Night Mode.
★ Allow set font of adhaya text.
★ Contain adhaya wise summary.
★ Contain Pasayadan.
★ Contain information about Bhagavad Gita.

# New release
★ Startup performance improvement.
★ Improved quality of icons and splash screen.

# Replay on comments
Thanks you abc for your overwhelming feedback. Thanks a lot.
-------------------------------------------------------------------------------------------------
# Sqlite Iconic
https://www.techiediaries.com/mobiledev/ionic2-sqlstorage-with-sqlite-and-cordova/
https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
https://ionicframework.com/docs/native/sqlite/
https://stackoverflow.com/questions/52505457/sqlite-with-ionic-4-cannot-read-property-then-of-undefined-typeerror-cannot
https://www.techiediaries.com/mocking-native-sqlite-plugin/

# Use Ionic Sqlite and crhome webrowser for test app
IMP : https://gist.github.com/NickStemerdink/64c782807fc31b7bc9b529ad4b1d56d5
https://forum.ionicframework.com/t/ionic-sqlite-and-crhome-webrowser-for-test-app/69035/7
https://medium.com/@surajair/ionic-native-sqlite-with-browser-development-6847b7f9611#:~:text=Line%20number%2022%2C%20call%20the,in%20sql%20folder%20called%20%60browser
https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/#.XuTvaEUzaUk

alert('freaky_datatable Database Created!');
-------------------------------------------------------------------------------------------------
# Gita Meaning in english
https://medium.com/@artoflivingglobal/summary-of-18-chapter-of-bhagavad-gita-6e3a5d8c6298

# Marathi
https://mr.wikisource.org/wiki/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%A6%E0%A5%8D%E2%80%8C%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%A6%E0%A5%8D%E2%80%8C%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BE_(%E0%A4%AE%E0%A5%82%E0%A4%B3_%E0%A4%B6%E0%A5%8D%E0%A4%B2%E0%A5%8B%E0%A4%95,_%E0%A4%B8%E0%A4%82%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%BF%E0%A4%A4_%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%B5%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5_%E0%A4%86%E0%A4%A3%E0%A4%BF_%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5_%E0%A4%AF%E0%A4%BE%E0%A4%B8%E0%A4%B9)
-------------------------------------------------------------------------------------------------
font-family: "Roboto Regular", sans-serif;
font-family: "proximanova,Verdana,sans-serif";
-------------------------------------------------------------------------------------------------
1	Arjuna's Vishada Yoga	46
2	Sankhya Yoga	72
3	Karma Yoga	43
4	Jnana Yoga	42
5	Karma-Sanyasa Yoga	29
6	Atma Samyama Yoga	47
7	Vijnana Yoga	30
8	Aksara-ParaBrahma Yoga	28
9	Raja-Vidya-Raja-Guhya Yoga	34
10	Vibhuti-Vistara Yoga	42
11	Viswarupa-Darsana Yoga	55
12	Bhakti Yoga	20
13	Ksetra-Ksetrajna Vibhaga Yoga	35
14	Gunatraya-Vibhaga Yoga	27
15	Purushottama-Prapti Yoga	20
16	Daivasura-Sampad-Vibhaga Yoga	24
17	Shraddhatraya-Vibhaga Yoga	28
18	Moksha-Sanyasa Yoga	78
-------------------------------------------------------------------------------------------------		
<a href="https://en.wikipedia.org/wiki/Ashvattha" class="extiw"
    title="w:Ashvattha">			
cornflowerblue
<div lang="sa" dir="ltr" style="font-weight: bold;">
-------------------------------------------------------------------------------------------------
Your app currently targets API level 28 and must target at least API level 29 to ensure that it is built on the latest APIs optimised for security and performance. Change your app's target API level to at least 29. Learn more

https://stackoverflow.com/questions/57328024/how-do-i-get-my-ionic-app-to-target-api-level-28-and-above
https://forum.ionicframework.com/t/config-xml-android-targetsdkversion-value-28-being-built-value-27/171015/3

cd /d D:\Amol\apps\ShrimadBhagwatGeetaInEnglish
code .
ionic serve 


ionic cordova platform remove android
ionic cordova platform add android
-------------------------------------------------------------------------------------------------
<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-4127318722091118~3859329747" />
-------------------------------------------------------------------------------------------------
ionic cordova plugin add cordova-plugin-admobpro --save --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"
npm install @ionic-native/admob-pro
-------------------------------------------------------------------------------------------------
cordova plugin add cordova-plugin-admob-free --save --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"
-------------------------------------------------------------------------------------------------
ionic cordova plugin add cordova-plugin-admob-free --save --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"
-------------------------------------------------------------------------------------------------
ionic cordova plugin add cordova-plugin-admob-free --save --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"
npm install @ionic-native/admob-free
-------------------------------------------------------------------------------------------------
# https://forum.unity.com/threads/solved-duplicated-classes-when-building-for-android.857158/

C:\Users\g4dqxc\.gradle\caches\transforms-1\files-1.1\play-services-ads-11.0.4.aar\216067848a06e9ee1d7b15384822d8e1\jars\classes.jar: D8: Type `android.support.customtabs.CustomTabsClient` was not found, it is required for default or static interface methods desugaring of `void com.google.android.gms.internal.zznl.zzd(android.app.Activity)`
C:\Users\g4dqxc\.gradle\caches\transforms-1\files-1.1\play-services-basement-11.0.4.aar\384fd7df858fef5aa7a0929d91db74d5\jars\classes.jar: D8: Type `org.apache.http.impl.cookie.DateUtils` was not found, it is required for default or static interface methods desugaring of `com.google.android.gms.internal.zzn com.google.android.gms.internal.zzad.zza(com.google.android.gms.internal.zzp)`
C:\Users\g4dqxc\.gradle\caches\transforms-1\files-1.1\play-services-basement-11.0.4.aar\384fd7df858fef5aa7a0929d91db74d5\jars\classes.jar: D8: Type `org.apache.http.impl.cookie.DateUtils` was not found, it is required for default or static interface methods desugaring of `long com.google.android.gms.internal.zzam.zzf(java.lang.String)`
C:\Users\g4dqxc\.gradle\caches\transforms-1\files-1.1\play-services-basement-11.0.4.aar\384fd7df858fef5aa7a0929d91db74d5\jars\classes.jar: D8: Type `android.net.http.AndroidHttpClient` was not found, it is required for default or static interface methods desugaring of `com.google.android.gms.internal.zzs com.google.android.gms.internal.zzas.zza(android.content.Context, com.google.android.gms.internal.zzan)`
> Task :app:transformClassesWithDexBuilderForRelease

D8: Program type already present: android.support.v4.media.MediaBrowserCompat$ItemCallback

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:transformDexArchiveWithExternalLibsDexMergerForRelease'.
> com.android.builder.dexing.DexArchiveMergerException: Error while merging dex archives:
  Learn how to resolve the issue at https://developer.android.com/studio/build/dependencies#duplicate_classes
  Program type already present: android.support.v4.media.MediaBrowserCompat$ItemCallback

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or > Task :app:transformDexArchiveWithExternalLibsDexMergerForRelease FAILED
34 actionable tasks: 34 executed
--debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 1m 14s
D:\Amol\apps\ShrimadBhagwatGeetaInMarathi\platforms\android\gradlew: Command failed with exit code 1 Error output:
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: D:\Amol\apps\ShrimadBhagwatGeetaInMarathi\platforms\android\app\src\main\java\nl\xservices\plugins\SocialSharing.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
D8: Program type already present: android.support.v4.media.MediaBrowserCompat$ItemCallback

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:transformDexArchiveWithExternalLibsDexMergerForRelease'.
> com.android.builder.dexing.DexArchiveMergerException: Error while merging dex archives:
  Learn how to resolve the issue at https://developer.android.com/studio/build/dependencies#duplicate_classes.
  Program type already present: android.support.v4.media.MediaBrowserCompat$ItemCallback

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 1m 14s
[ERROR] An error occurred while running subprocess cordova.

        cordova.cmd build android --release exited with exit code 1.

        Re-running this command with the --verbose flag may provide more information.
Enter Passphrase for keystore:
jarsigner: unable to open jar file: platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk
Unable to open 'platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk' as zip archive

D:\Amol\apps\ShrimadBhagwatGeetaInMarathi>
-------------------------------------------------------------------------------------------------
Ionic:

   Ionic CLI                     : 5.4.16 (C:\Users\g4dqxc\AppData\Roaming\npm\node_modules\ionic)
   Ionic Framework               : @ionic/angular 5.5.0
   @angular-devkit/build-angular : 0.901.12
   @angular-devkit/schematics    : 9.1.12
   @angular/cli                  : 9.1.12
   @ionic/angular-toolkit        : 2.3.3

Cordova:

   Cordova CLI       : 8.1.2 (cordova-lib@8.1.1)
   Cordova Platforms : android 8.1.0
   Cordova Plugins   : cordova-plugin-ionic-keyboard 2.2.0, cordova-plugin-ionic-webview 4.2.1, (and 6 other plugins)
-------------------------------------------------------------------------------------------------
ionic start QQQ blank --type=ionic-angular

cd /d  D:\Amol\apps\QQQ
code .
ionic serve

keytool -genkey -v -keystore qqq.keystore -alias QQQApp -keyalg RSA -keysize 2048 -validity 10000
-------------------------------------------------------------------------------------------------
# Your app currently targets API level 27 and must target at least API level 29 to ensure that it is built on the latest APIs optimised for security and performance. Change your app's target API level to at least 29.

# Solution.1, Working
ionic cordova platform rm android
ionic cordova platform add android
ionic cordova prepare

# Solution.2
<preference name="android-targetSdkVersion" value="29"/>
ionic cordova prepare
-------------------------------------------------------------------------------------------------





