import email from "../images/footer_email.png";
import location from "../images/footer_location.png";
import tel from "../images/footer_telephone.png";
import clock from "../images/footer_clock.png";
import snacks from "../images/snacks.jpg";
import coffee from "../images/coffee.jpg";
import bread from "../images/bread.jpg";
const en = {
  lang: "en",
  nav: [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About us",
      path: "/about-us",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/contact-us",
    },
  ],
  main: {
    title: "BAKERY GKIKAS",
    paragraph:
      "We make products by utilizing the arts of bakery and confectionery based on knowledge, experience and passion with selected ingredients from nature to satisfy our customers’ requests for a qualitative, healthy and safe diet.",
    homePageCards: [
      {
        id: 1,
        icon: <img src={bread} alt="" />,
        text: "The secret of making bread is the passion, which is why every product is kneaded daily using only the purest and healthiest ingredients. In our store you have the opportunity to choose from a variety of breads depending on your preference, from most delicious to healthiest.",
      },
      {
        id: 2,
        icon: <img src={snacks} alt="" />,
        text: "A rich breakfast is a prerequisite for a good start to the day. Here you will find freshly baked puff pastry, handmade sandwiches and various types of tasty / healthy snacks that you can enjoy at our place or take to work.",
      },
      {
        id: 3,
        icon: <img src={coffee} alt="" />,
        text: "Combine your breakfast with your favorite drink. Here you will find a variety of options from hot or cold coffee, chocolate or orange juice from fresh oranges squeezed at that time.",
      },
    ],
    FooterInfo: [
      {
        id: 1,
        key: "Adress: ",
        text: "Dimokratias 41",
        icon: location,
      },
      {
        id: 2,
        key: "Tel.: ",
        text: "22940-675570",
        icon: tel,
      },
      {
        id: 3,
        key: "email: ",
        text: "fournosgkika@yahoo.gr",
        icon: email,
      },
      {
        id: 4,
        key: "Working hours: ",
        text: "06:00-20:30",
        icon: clock,
      },
    ],
  },
  navImg: require(`./../images/united-kingdom.png`).default,
  aboutUs: {
    HeaderH1: "About us",
    HeaderP: "Get to know us",
    HeaderBtn: "More",
    CounterText: "years and still counting",
    InfoText:
      "Αγαπάμε αυτό που κάνουμε και το αποδεικνύουμε καθημερινά λειτουργώντας με κάθε αξιοπρέπεια, σεβασμό και ζήλο για την δουλειά μας. Σκοπός μας είναι να αναδείξουμε σε κάθε περίπτωση τις τοπικές γεύσεις και τις καθαρές και πολύτιμες πρώτες ύλες του νησιού μας γι’ αυτό και συνεργαζόμαστε με έναν μικρό τοπικό μύλο του κ. Στεφανάκη όπου και αλέθουμε τους μοναδικούς καρπούς της κρητικής γης.",
    InputRangeData: [
      {
        id: 1,
        text: "Text 1",
        url: "pexels-geraud-pfeiffer-6605310 (1).jpg",
      },
      {
        id: 2,
        text: "Text 2",
        url: "pexels-maria-orlova-4916562.jpg",
      },
      {
        id: 3,
        text: "Text 3",
        url: "pexels-maria-orlova-4913487.jpg",
      },
      {
        id: 4,
        text: "Text 4",
        url: "pexels-geraud-pfeiffer-6605310 (1).jpg",
      },
    ],
  },
  ContactUs: {
    contact: "Send us a Message",
    name: "Name",
    email: "e-mail",
    message: "Message",
    btn: "Send",
    location:
      "We’re located around 10kms northwest of Corfu town on the 10th km of Palaiokastritsas national road after Tzavros junction.",
  },
};

const gr = {
  lang: "gr",
  nav: [
    {
      id: 1,
      name: "ΑΡΧΙΚΗ",
      path: "/",
    },
    {
      id: 2,
      name: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ",
      path: "/about-us",
    },
    {
      id: 3,
      name: "ΕΠΙΚΟΙΝΩΝΙΑ",
      path: "/contact-us",
    },
  ],
  main: {
    title: "ΦΟΥΡΝΟΣ ΓΚΙΚΑ",
    paragraph:
      "Αξιοποιώντας τις τέχνες της αρτοποιίας και της ζαχαροπλαστικής φτιάχνουμε προϊόντα βασισμένα στην γνώση την εμπειρία και το μεράκι με επιλεγμένα υλικά απ΄ τη φύση για να ικανοποιήσουμε τις απαιτήσεις των πελατών μας για μια ποιοτική υγιεινή και ασφαλή διατροφή.",
    homePageCards: [
      {
        id: 1,
        icon: <img src={bread} alt="" />,
        text: "Το μυστικό στον άρτο είναι το μεράκι και η τέχνη, γιαυτό και κάθε αρτοπαρασκεύσμα ζυμώνεται καθημερινά χρησιμοποιώντας τα πιο αγνά και υγιεινά υλικά.Έτσι στο κατάστημά μας έχετε τη δυνατότητα να διαλέξετε ανάμεσα από μία ποικιία ειδών άρτου ανάλογα την προτίμησή σας, από το πιο γευστικό ως το πιο υγιεινό.",
      },
      {
        id: 2,
        icon: <img src={snacks} alt="" />,
        text: "Ένα πλούσιο πρωινό είναι απαραίτηση προϋπόθεση για να ξεκινήσει καλά η ημέρα. Έδώ θα βρείτε φρεσκοψημένες σφολιάτες, χειροποίητα σάντουϊτς και διάφορα είδη γευστικών/υγιεινών σνακ τα οποία μπορείτε να τα απολαύσετε στο χώρο μας ή να τα πάρετε στη δουλειά σας.",
      },
      {
        id: 3,
        icon: <img src={coffee} alt="" />,
        text: "Συνδύασε το πρωινό σου με το αγαπημένο σου ρόφημα. Εδώ θα βρεις πληθώρα επιλογών από καφέ ζεστό ή κρύο, σοκολάτα ή χυμό πορτοκάλι από ολόφρεσκα πορτοκάλια στυμμένα εκείνη τη στιγμή.",
      },
    ],
    FooterInfo: [
      {
        id: 1,
        key: "Οδός: ",
        text: "Δημοκρατίας 41",
        icon: location,
      },
      {
        id: 2,
        key: "Τηλ.: ",
        text: "22940-675570",
        icon: tel,
      },
      {
        id: 3,
        key: "email: ",
        text: "fournosgkika@yahoo.gr",
        icon: email,
      },
      {
        id: 4,
        key: "Ώρες καταστήματος: ",
        text: "06:00-20:30",
        icon: clock,
      },
    ],
  },
  navImg: require(`./../images/greece.png`).default,
  aboutUs: {
    HeaderH1: "Σχετικά με εμάς",
    HeaderP: "Ποιοι είμαστε",
    HeaderBtn: "Περισσότερα",
    CounterText: "χρόνια και συνεχίζουμε",
    InfoText:
      "Αγαπάμε αυτό που κάνουμε και το αποδεικνύουμε καθημερινά λειτουργώντας με κάθε αξιοπρέπεια, σεβασμό και ζήλο για την δουλειά μας. Σκοπός μας είναι να αναδείξουμε σε κάθε περίπτωση τις τοπικές γεύσεις και τις καθαρές και πολύτιμες πρώτες ύλες του νησιού μας γι’ αυτό και συνεργαζόμαστε με έναν μικρό τοπικό μύλο του κ. Στεφανάκη όπου και αλέθουμε τους μοναδικούς καρπούς της κρητικής γης.",
    InputRangeData: [
      {
        id: 1,
        text: "Κείμενο 1",
        url: "pexels-geraud-pfeiffer-6605310 (1).jpg",
      },
      {
        id: 2,
        text: "Κείμενο 2",
        url: "pexels-maria-orlova-4916562.jpg",
      },
      {
        id: 3,
        text: "Κείμενο 3",
        url: "pexels-maria-orlova-4913487.jpg",
      },
      {
        id: 4,
        text: "Κείμενο 4",
        url: "pexels-geraud-pfeiffer-6605310 (1).jpg",
      },
    ],
  },
  ContactUs: {
    contact: "Στείλτε μας μήνυμα",
    name: "Όνομα",
    email: "e-mail",
    message: "Μήνυμα",
    btn: "Αποστολή",
    location:
      "We’re located around 10kms northwest of Corfu town on the 10th km of Palaiokastritsas national road after Tzavros junction.",
  },
};

export { en, gr };
