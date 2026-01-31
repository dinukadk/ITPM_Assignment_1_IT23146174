// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

const TARGET_URL = 'https://www.swifttranslator.com/';

// Increase timeout for slow translations
test.setTimeout(60000);

// ---------------------------------------------------------------------------
// 27 POSITIVE SCENARIOS
// ---------------------------------------------------------------------------
const positiveScenarios = [
  {
    id: 'Pos_Fun_0001',
    description: 'Religious greeting phrase',
    input: 'jeesu pihitayi!',
    expected: 'ජේසු පිහිටයි!'
  },
  {
    id: 'Pos_Fun_0002',
    description: 'Request with English technical term',
    input: 'mata meka manage karala dhenna puLuvandha?',
    expected: 'මට මෙක manage කරල දෙන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0003',
    description: 'Complex sentence with determination',
    input: 'oya monavaa kivvath mata yanna oona',
    expected: 'ඔය මොනවා කිව්වත් මට යන්න ඕන'
  },
  {
    id: 'Pos_Fun_0004',
    description: 'Sequential action command',
    input: 'bath kaalaa beheth bonna',
    expected: 'බත් කාලා බෙහෙත් බොන්න'
  },
  {
    id: 'Pos_Fun_0005',
    description: 'English teacher kivvaa mee file eka office ekata yavanna kiyalaa',
    input: 'English teacher kivvaa mee file eka office ekata yavanna kiyalaa',
    expected: 'English teacher කිව්වා මේ file එක office එකට යවන්න කියලා'
  },
  {
    id: 'Pos_Fun_0006',
    description: 'Negative imperative command',
    input: 'vikaara karannepaa',
    expected: 'විකාර කරන්නෙපා'
  },
  {
    id: 'Pos_Fun_0007',
    description: 'Direct instruction with location',
    input: 'ooka mehaata geenna',
    expected: 'ඕක මෙහාට ගේන්න'
  },
  {
    id: 'Pos_Fun_0008',
    description: 'Conditional sentence with English term',
    input: 'Bonus eka ganna nam target eka cover karannama venavaa',
    expected: 'Bonus එක ගන්න නම් target එක cover කරන්නම වෙනවා'
  },
  {
    id: 'Pos_Fun_0009',
    description: 'Time bound requirement with English',
    input: 'Before 2PM task eka complete venna oona',
    expected: 'Before 2PM task එක complete වෙන්න ඕන'
  },
  {
    id: 'Pos_Fun_0010',
    description: 'Conditional payment instruction',
    input: 'cash madhi nam full payment ekama card eken karannath puLuvan ee vuNaata discount ekanam adu karanna venavaa bank fee ekak add vena nisaa. 50% vath cash dhunnoth discount eka bill ekata add karanna puLuvan.',
    expected: 'cash මදි නම් full payment එකම card එකෙන් කරන්නත් පුළුවන් ඒ වුණාට discount එකනම් අඩු කරන්න වෙනවා bank fee එකක් add වෙන නිසා. 50% වත් cash දුන්නොත් discount එක bill එකට add කරන්න පුළුවන්.'
  },
  {
    id: 'Pos_Fun_0011',
    description: 'Exclamatory statement about event',
    input: 'adha match eka nam supirii!',
    expected: 'අද match එක නම් සුපිරී!'
  },
  {
    id: 'Pos_Fun_0012',
    description: 'Long conditional about weather impact',
    input: 'adhath vassoth nam mee paara muLu vagaavama ahaka dhanna venavaa',
    expected: 'අදත් වස්සොත් නම් මේ පාර මුළු වගාවම අහක දන්න වෙනවා'
  },
  {
    id: 'Pos_Fun_0013',
    description: 'Polite request with person name',
    input: 'Mr.chamiira venadhatanam mee vedhdhi office chair ekee innavaa. adha late venava kiyala kalin inform karaadha kiyalaa HR eken ahalaa ikmaNata ahalaa meeting eka reschedule karaganna. samahara dhavas valata eyaa late venavane.',
    expected: 'Mr.චමීර වෙනදටනම් මේ වෙද්දි office chair එකේ ඉන්නවා. අද late වෙනව කියල කලින් inform කරාද කියලා HR එකෙන් අහලා ඉක්මණට අහලා meeting එක reschedule කරගන්න. සමහර දවස් වලට එයා late වෙනවනෙ.'
  },
  {
    id: 'Pos_Fun_0014',
    description: 'Aggressive request with possessive',
    input: 'karaNaakaralaa mata magee paaduve inna dhenna.',
    expected: 'කරණාකරලා මට මගේ පාඩුවෙ ඉන්න දෙන්න.'
  },
  {
    id: 'Pos_Fun_0015',
    description: 'Request with English politeness marker',
    input: 'Please, kiyana dhee  vitharak karanna.',
    expected: 'Please, කියන දේ  විතරක් කරන්න.'
  },
  {
    id: 'Pos_Fun_0016',
    description: 'Time-sequenced actions with abbreviations',
    input: '7Am vedhdhi atm eken cash aragena office building eka LaGAta enna.',
    expected: '7Am වෙද්දි atm එකෙන් cash අරගෙන office building එක ළඟට එන්න.'
  },
  {
    id: 'Pos_Fun_0017',
    description: 'Simple negative statement',
    input: 'mama ehema karannee naehae.',
    expected: 'මම එහෙම කරන්නේ නැහැ.'
  },
  {
    id: 'Pos_Fun_0018',
    description: 'Long formal news-style paragraph',
    input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana, mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.',
    expected: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.'
  },
  {
    id: 'Pos_Fun_0019',
    description: 'Interrogative about timing',
    input: 'oyaa kavadhdha enna hithan inne?',
    expected: 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?'
  },
  {
    id: 'Pos_Fun_0020',
    description: 'Compound past tense actions',
    input: 'mama kaeevaa saha nidha gaththaa',
    expected: 'මම කෑවා සහ නිද ගත්තා'
  },
  {
    id: 'Pos_Fun_0021',
    description: 'Date range with closing schedule',
    input: 'janavaari 26 iDHAla 31 venakaQQ kadee vahalaa',
    expected: 'ජනවාරි 26 ඉඳල 31 වෙනකං කඩේ වහලා'
  },
  {
    id: 'Pos_Fun_0022',
    description: 'Statement with multiple spaces',
    input: 'mata havasa    vaeda vagayak thiyenavaa..',
    expected: 'මට හවස    වැඩ වගයක් තියෙනවා..'
  },
  {
    id: 'Pos_Fun_0023',
    description: 'Conditional reward scenario',
    input: 'vaeda tika ikmaNata complete karoth nivaaduvak ganna puLuvan.',
    expected: 'වැඩ ටික ඉක්මණට complete කරොත් නිවාඩුවක් ගන්න පුළුවන්.'
  },
  {
    id: 'Pos_Fun_0024',
    description: 'Sequential work instructions',
    input: 'Letter eka scan karalaa ikmaNata boss ta mail karanna…',
    expected: 'Letter එක scan කරලා ඉක්මණට boss ට mail කරන්න…'
  },
  {
    id: 'Pos_Fun_0025',
    description: 'Exclamatory prohibition with spaces',
    input: 'apoyi!!!     eeka nam karanna epaa..',
    expected: 'අපොයි!!!     ඒක නම් කරන්න එපා..'
  },
  {
    id: 'Pos_Fun_0026',
    description: 'Long conditional advice statement',
    input: 'anith dheeval kohoma vunath, oyaa oyaage vaedee hariyata complete karalaa dhenna..',
    expected: 'අනිත් දේවල් කොහොම වුනත්, ඔයා ඔයාගෙ වැඩේ හරියට complete කරලා දෙන්න..'
  },
  {
    id: 'Pos_Fun_0027',
    description: 'Past action reporting',
    input: 'mama kasunta call karalaa details tika dhilaa kivvaa oyaatath update ekak dhiilaa ithuru ithuru vaeda tikath complete karalaa approval karagaththata passe apita mail karalaa inform karanna kiyalaa. namuth eyaata ee seerama amathaka velaa.',
    expected: 'මම කසුන්ට call කරලා details ටික දිලා කිව්වා ඔයාටත් update එකක් දීලා ඉතුරු ඉතුරු වැඩ ටිකත් complete කරලා approval කරගත්තට පස්සෙ අපිට mail කරලා inform කරන්න කියලා. නමුත් එයාට ඒ සේරම අමතක වෙලා.'
  }
];

// ---------------------------------------------------------------------------
// 11 NEGATIVE SCENARIOS
// ---------------------------------------------------------------------------
const negativeScenarios = [
  {
    id: 'Neg_Fun_0001',
    description: 'Incomplete phrase missing context',
    input: 'sadarayen piligannawa',
    expected: 'සාදරයෙන් පිළිගන්නවා'
  },
  {
    id: 'Neg_Fun_0002',
    description: 'Mixed terminology causes issues',
    input: 'Wifi eke signal madi nisa mobile data use karanna..',
    expected: 'Wifi එකේ signal මදි නිසා mobile data use කරන්න..'
  },
  {
    id: 'Neg_Fun_0003',
    description: 'Religious phrase with special meaning',
    input: 'theruwan saranai',
    expected: 'තෙරුවන් සරණයි'
  },
  {
    id: 'Neg_Fun_0004',
    description: 'Misspelled words affect output',
    input: 'pereda hawasa ape gamata hodatama wassa',
    expected: 'පෙරේදා හවස අපේ ගමට හොඳටම වැස්සා'
  },
  {
    id: 'Neg_Fun_0005',
    description: 'Greeting with non-standard spelling',
    input: 'suba sandyawak!',
    expected: 'සුබ සන්ද්‍යාවක්!'
  },
  {
    id: 'Neg_Fun_0006',
    description: 'Casual greeting non standard form',
    input: 'ada dawasa nam subai',
    expected: 'අද දවස නම් සුබයි'
  },
  {
    id: 'Neg_Fun_0007',
    description: 'Complex sentence with spacing issues',
    input: 'eyai mai iye idala balan idiye oya enakam',
    expected: 'එයයි මායි  ඊයෙ ඉඳලා බලන් ඉඳියේ ඔයා එනකම්'
  },
  {
    id: 'Neg_Fun_0008',
    description: 'Colloquial request with slang',
    input: 'chande danna game giyama rabutan tikak aragena enna',
    expected: 'ඡන්දෙ දාන්න ගමේ ගියාම රඹුටන් ටිකක් අරගෙන එන්න'
  },
  {
    id: 'Neg_Fun_0009',
    description: 'Sequential actions unclear structure',
    input: 'dan meka aragena gihin ilaga sathiye aragena enna',
    expected: 'දැන් මේක අරගෙන ගිහින් ඊලඟ සතියෙ අරගෙන එන්න'
  },
  {
    id: 'Neg_Fun_0010',
    description: 'Person name with non standard text',
    input: 'Nuwan pereda hawasa ape gedara awith the bila tikak wela idala giye',
    expected: 'නුවන් පෙරේදා හවස අපේ ගෙදර ඇවිත් තේ බීලා ටිකක් වෙලා ඉඳල ගියේ'
  },
  {
    id: 'Neg_Fun_0011',
    description: 'Formal request with incomplete structure',
    input: 'Mr. Pererata puLuwanda mata meka solve karaganna help ekak denna',
    expected: 'Mr. පෙරේරට පුළුවන්ද මට මේක solve කරගන්න help එකක් දෙන්න'
  }
];

// ---------------------------------------------------------------------------
// TEST SUITE
// ---------------------------------------------------------------------------
test.describe('IT3040 Assignment 1 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(TARGET_URL);
    await page.waitForLoadState('networkidle');
  });

  // POSITIVE TESTS
  for (const scenario of positiveScenarios) {
    test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {

      const inputBox = page.getByRole('textbox', {
        name: 'Input Your Singlish Text Here.'
      });

      const outputBox = page.locator(
        '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
      );

      await inputBox.clear();
      await inputBox.fill(scenario.input);

      await expect(outputBox).toHaveText(scenario.expected, {
        timeout: 20000
      });
    });
  }

  // NEGATIVE TESTS
  for (const scenario of negativeScenarios) {
    test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {

      const inputBox = page.getByRole('textbox', {
        name: 'Input Your Singlish Text Here.'
      });

      const outputBox = page.locator(
        '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
      );

      await inputBox.clear();
      await inputBox.fill(scenario.input);

      await expect(outputBox).toHaveText(scenario.expected, {
        timeout: 20000
      });
    });
  }

});
