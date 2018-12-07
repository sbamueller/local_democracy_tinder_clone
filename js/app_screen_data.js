const items = [
    {
      name: 'En motion föreslår att lekparken vid Stadsparken ska vara bemannad året runt. Ja eller nej?',
      job: 'Satsa på att bygga ny skola',
      images: ["images/Lekplatsen.jpg"],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["M", "L",  "SD", "KD", "C", "<br/>(Förslaget antogs)"],
      which_parties_voted_YES_for_this__as_image: "ScreenShot2018-08-20at12.21.12.jpg",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "MP", "V", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "ScreenShot2018-08-20at12.21.12.jpg",
    },
    {
      name: 'Ska Grundskolenämnden få ett ökat kommunbidrag med 20 miljoner kronor, så att deras budget hamnar på 1,4 miljarder kronor?',
      job: 'Satsa mer eller mindre på sjukvård',
      images: ['images/Grundskolenämnden.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["S", "M",  "L", "MP", "V", "KD", "C", "<br/>(Förslaget antogs)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["SD", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },
    {
      name: 'Ska Borås inrätta en försöksverksamhet med lärarassistenter på en av Borås Stads skolor?',
      job: 'Storyteller',
      images: ['images/Lararassistenter.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["M", "L",  "SD", "KD", "C", "<br/>(Förslaget antogs)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "MP", "V", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },
    {
      name: 'Ska elever få vara med och rekrytera rektorer?',
      job: 'Motivational Speaker',
      images: ['images/Rektor_Julio.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["S", "MP",  "V", "<br/>(Förslaget avvisades)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["M", "L", "SD", "KD","<br/>(Förslaget avvisades)" ],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },    
    {
      name: 'Ska Borås avveckla mark- och entreprenadverksamhet som erbjuds andra än kommunens förvaltningar och bolag?',
      job: 'Motivational Speaker',
      images: ['images/entreprenadservice.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["M", "L",  "SD", "KD", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "MP", "V", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },
    {
      name: 'Ska Borås införa en spetsutbildning i matematik på en av Borås grundskolor?',
      job: 'Motivational Speaker',
      images: ['images/Spetsutbildning.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["M", "L",  "SD", "KD", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "MP", "V", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },
  {
      name: 'Ska Borås införa obligatoriskt val av grundskola?',
      job: 'It went well.',
      images: ['images/Skolvalet.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["M", "L",  "SD", "KD", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "MP", "V", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },
  {
      name: 'Ska Borås testa att införa korta lektionspauser (powerbreaks) i någon av kommunens skolor?',
      job: 'Jedi Master',
      images: ['images/Powerbreak.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["SD", "<br/>(Förslaget avvisades)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "M",  "L", "MP", "V", "KD", "C", "<br/>(Förslaget avvisades)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },
  {
      name: 'Ska Borås införa mobil- och surfplatteförbud i grundskolan?',
      job: 'Mekong Cafe 2',
      images: ['images/Mobilforbud.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["L", "SD", "<br/>(Förslaget avvisades)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "M", "MP", "V", "KD", "C", "<br/>(Förslaget avvisades)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
    },
  {
      name: 'Ska Kulturnämnden ta över driften av Orangeriet från och med 1/6 2017?',
      job: 'Discovery (Manila) Park',
      images: ['images/Orangeriet.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["S", "MP",  "V", "<br/>(Förslaget antogs)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["M", "L", "SD", "C", "KD (avstår)", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },

  {
      name: 'Ska Borås folkomrösta om Kongresshuset?',
      job: 'Discovery (Manila) Park',
      images: ['images/Kongresshuset.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["SD", "KD", "<br/>(Förslaget avvisades)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "M", "L", "MP", "V", "C (en person röstade ja)", "<br/>(Förslaget avvisades)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
  {
      name: 'Ska Borås införa lagliga graffitiväggar?',
      job: 'Discovery (Manila) Park',
      images: ['images/Graffitivaggar.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["S", "L",  "MP", "V", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["M", "SD", "C", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
  {
      name: 'Ska Borås införa 1%-regeln för konstnärlig utsmyckning och gestaltning vid nyproduktion eller renovering av offentliga byggnader och platser i Borås?',
      job: 'Discovery (Manila) Park',
      images: ['images/Enprocentsregeln.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["S", "L",  "MP", "SD", "V", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["M", "KD", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
  {
      name: 'Ska Borås sälja 25 procent av sitt fastighetsbestånd?',
      job: 'Discovery (Manila) Park',
      images: ['images/fastighetsbestand.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["L", "<br/>(Förslaget avvisades)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "M (avstår)", "MP", "SD", "V", "KD", "C (avstår)", "<br/>(Förslaget avvisades)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
  {
      name: 'Ska det kommunala bolaget Fristadbostäder köpa fastigheterna Längjum och Sik i området Karlsberg för uppskattningsvis 40 miljoner kronor?',
      job: 'Discovery (Manila) Park',
      images: ['images/Fristadbostader.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["S", "MP", "V", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["M", "L", "SD", "KD", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
   {
      name: 'Ska Borås ta fram en specifik HBTQ-policy? Alternativet är att ser över befintliga dokument och lyfta HBTQ-perspektivet.',
      job: 'Discovery (Manila) Park',
      images: ['images/HBTQ.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["L", "KD", "C", "<br/>(Förslaget avvisades)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "M (avstår)", "MP", "SD (avstår)", "V", "<br/>(Förslaget avvisades)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
   {
      name: 'Ska kommuninvånare som är 65 år och äldre få gratis broddar?',
      job: 'Discovery (Manila) Park',
      images: ['images/Broddar.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["M", "L", "SD", "KD", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "MP (en person röstade ja)", "V", "<br/>(Förslaget antogs)" ],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
   {
      name: 'Ska det vara sex kommunalråd i Borås, istället för fem?',
      job: 'Discovery (Manila) Park',
      images: ['images/6_kommunalrad.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["SD", "<br/>(Förslaget avvisades)"],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["S", "M", "L", "MP","V", "KD", "C", "<br/>(Förslaget avvisades)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  },
   {
      name: 'Ska ersättningen till kommunens förtroendevalda öka med 10 procent?',
      job: 'My front doorstep',
      images: ['images/arvoden.jpg'],
      //// where does a yes / no lead to?       
      //
      // voted YES
      which_parties_voted_YES_for_this__as_list: ["S", "M",  "L", "MP", "V", "KD", "C", "<br/>(Förslaget antogs)" ],
      which_parties_voted_YES_for_this__as_image: "images/screen_0__YES_results",
      // voted NO
      which_parties_voted_NO_for_this__as_list: ["SD", "<br/>(Förslaget antogs)"],
      which_parties_voted_NO_for_this__as_image: "images/screen_0__NO_results",
  }
];
