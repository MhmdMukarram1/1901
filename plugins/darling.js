/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const SEW = "*Codded by https://t.me/RavinduManoj*\n ඔබේ පෙම්වතිය හෝ පෙම්වතා වෙත සොදුරු ඇමතුමක්.\n💻Usage: *.msglv*"


QueenSew.newcmdaddtosew({pattern: 'msglv', fromSew: false, desc: SEW }, (async (message, match) => {
    
    var r_text = new Array ();
r_text [0] = "*ඔබ මා සෙවූ දෙයක් නොවේ. මම ආදරයෙන් බැඳුනේ මම මගේ මනසින් බැහැරව සිටියදී ය.*";
r_text [1] = "*ඔබේ සිනහව මගේ ය, මගේ ලෝකයේ මගේ එකම හුස්ම, සුවඳැති සොඳුරිය, මම ඔබ වෙනුවෙන් මරණය වෙත යන්නෙමි.*";
r_text [2] = "*ඔවුන් මට කිව්වා පස්සේ බලන්න කියලා. මේ වයසේදී අල්ලාහ් ඔබව මට විරුද්ධව ගෙනාවේ නම්; එය මගේ වරදක්ද?*";
r_text [3] = "*බලාපොරොත්තුවක් ඔබේ සිතේ ඉසිනු ඇත, ඔබේ දින තුළ දහස් සතුටක් උපදිනු ඇත, සියල්ල ඔබ මෙන් වී ඔබේ දෑස් මෙන් ලස්සන වේවා.*";
r_text [4] = "*ඔබේ ඇස් වල ජීවිතයේ ආලෝකය මගේ ලෝකය ආලෝකවත් කරයි, මම ජීවත් වන ජීවිතය ඔබට ඊර්ෂ්‍යා කරයි මැණික.*";
r_text [5] = "*මම ඔබ සමඟ ජීවත් වන නිසා මගේ සියලු අලංකාරයන්, සතුට සහ උද්යෝගය මම ඔබ වෙත ගෙන එන්නෙමි.*";
r_text [6] = "*මම නින්දට වැටෙන විට මම ඔබ ගැන සිහින දකිමි.*";
r_text [7] = "*ලෝකයේ ආශ්චර්‍යයන් 7 ක් වත් වටින්නේ නැති ඔබ අසල මගේ ප්‍රේමය, මගේ අභ්‍යන්තර ලෝකයේ එකම පුදුමය ඔබයි. *";
r_text [8] = "*ඔබ සමඟ ජීවිතය භුක්ති විඳින්න, මම එය ගැනීමට ඉගෙන ගත්තා, මම ඔබේ අත අල්ලා ගත් විට මගේ හද ගැස්ම දැනුණා, ඔබේ වචන වලින් මම සිනහ වීමට ඉගෙන ගත්තා, මගේ ආදරය.*";
r_text [9] = "*ඔබ දැන් දුරස්ව සිටියත්, ඔබේ සිහිනය ප්‍රමාණවත්, බා, යම් දිනෙක ඔබ මා අසලට එනු ඇත, එවිට මම ජීවත් වීමට පටන් ගනිමි.*";
r_text [10] = "*මම ඔබට ආදරෙයි කියන්න කැමතියි, නමුත් ඊටත් වඩා මම ඔබේ ඇස් දෙස බලන විට ඔබේ උණුසුම් සිනහවට කැමතියි.*";
r_text [11] = "*ඔබ මිනිසෙකුට අවශ්‍ය නමුත් ලබා ගත නොහැකි සත්වයෙක්. බොරු ලෝකයට යවන මගේ එකම සත්‍යය ඔබයි, මගේ ආදරය.*";
r_text [12] = "*ඔබේ අභ්‍යන්තර අලංකාරය ප්‍රමාණවත්, ලෝකයේ බහු වාර්ෂික ආදරයන්ට මෙම බොරුව ප්‍රමාණවත්ය මාගේ ප්‍රේමය, ඔබේ අභ්‍යන්තරයේ සුන්දරත්වය මගේ සඳ මුහුණුවරයි..*";
r_text [13] = "*ඔබ වසන්තයකි*";
r_text [14] = "*ඔබ තරම් සුන්දර කෙනෙකු මම මෙම ලොව දැක නැත..*";
r_text [15] = "*මුලින්ම ඔබේ කටහඬ මගේ මතකයට එයි ..*";
r_text [16] = "*මම හිතුවේ ඔබ මුලින්ම දුටු විට ඔබ දේවදූතයෙක් කියායි, දැන් ඔබ මගේ සුරංගනාවියක් වුණා, ඔබ මගේ ජීවිතයට ජීවයක් ගෙනාවා.*";
r_text [17] = "*Darling, you are super beautiful today, look at the hair messy but separate*";
r_text [18] = "*එන්න, ඔව් කියන්න, ඔව් කියන්න, මම මගේ හදවතට දෑත් විවර කර, එම උණුසුම් ආදරය එනතෙක් බලා සිටියෙමි.*";
r_text [19] = "*මගේ මීපැණි ඇස් මගේ ස්වර්ගයයි, බොරු ලෝකයේ මගේ එකම සත්‍යය ඔබ පමණයි, ඔබ මගේ ලෝකයේ එකම සත්‍යය බවට පත් වුනා, මට බොරු ලෝකය අමතක වුනා.*";
r_text [20] = "*If you are, it will be even if there is no other.*"; 
r_text [21] = "*ඒ මොහොතේ මම ප්‍රීති වීමට ඉගෙන ගත්තා, මම ඔබේ අත අල්ලා ගත් විට මගේ හදවත ගැහෙන බව දැනුනා, මම ඔබේ වචන වලින් සිනාසීමට ඉගෙන ගත්තා, ❤මගේ ආදරය..*";

var i = Math.floor(22*Math.random())

await message.sendMessage(`${r_text[i]}`);

}));