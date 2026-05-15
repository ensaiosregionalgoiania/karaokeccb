const hymnsData = {
    "1": { 
        nome: "Cristo meu Mestre",
        compasso: "4/4",
        velMin: 56, velMed: 61, velMax: 66,
        inicio: 1,
        velMinMeiaHora: 35, velMedMeiaHora: 37, velMaxMeiaHora: 40,
        MeiaHora: "S", velX3: "N",
        versos: [
            "Cri|sto |meu |Mes|tre |e |meu |Se|nhor, |Eu |Te |a|do|ro, |por |fé, |com |fer|vor; |Ro|go |que |guar|des| meu |co|ra|ção;| Vem |pro|te|gê-|lo, |com| Tu|a  |un|ção |E |de|fen|dê-|lo, |ó |meu |Guar|di|ão.", //47
            "Mes|tre |di|vi|no, |sem|pre |sen|ti |Meu |co|ra|ção |de|pen|den|te |de |Ti; |Bom |fun|da|men|to |dá-|lhe, |Se|nhor, |Dá-|lhe |fir|me|za, |vir|tu|de, |va|lor |E |for|ta|le|za, |ó |meu |Pro|te|tor.", //47
            "Va|le |pro|fun|do, |chei|o |de |mal, |É |es|te| mun|do, |ó |Rei |di|vi|nal. |Só |Tu|a |for|ça| po|de |man|ter |San|to |e |pu|ro, |na| gra|ça, |meu |ser, |Sem|pre |se|gu|ro, |com |fé |e |po|der.",//46
            "Mes|tre |pie|do|so, |com |Tu|a |mão, |Fa|ze |per|fei|to |o |meu |co|ra|ção, |San|to, ar|do|ro|so |em |Te |ser|vir, |Sem|pre |vol|ta|do |aos |bens |do |por|vir; |Mes|tre |a|ma|do, |de|se|jo |Te ou|vir."
        ],
        temposVersos: [4,2,2,4,4,4,2,2,8,4,2,2,4,2,2,4,2,2,8,4,2,2,4,4,4,2,2,8,4,2,2,4,2,2,4,3,1,8,4,2,2,4,4,2,4,3,1,8],
        notas: ['G4','G4','G4','Bb4','Bb4','Eb4','Ab4','Ab4','G4','C5','C5','C5','Bb4','G4','G4','G4','F4','F4','F4','G4','G4','Bb4','Bb4','Bb4','C5','D5','Eb5','D5','Eb5','D5','C5','Bb4','G4','Bb4','Bb4','Bb4','Ab4','G4','C5','D5','Eb5','Eb5','Eb4','F4','G4','G4','F4','Eb4'],
        temposNotas: [4,2,2,4,4,4,2,2,8,4,2,2,4,2,2,4,2,2,8,4,2,2,4,4,4,2,2,8,4,2,2,4,2,2,4,3,1,8,4,2,2,4,4,2,4,3,1,8],
    },
    "2": { 
        nome: "De Deus tu és eleita",
        compasso: "4/4",
        velMin: 60, velMed: 70, velMax: 80,
        inicio: 4,
        velMinMeiaHora: 42, velMedMeiaHora: 44, velMaxMeiaHora: 46,
        MeiaHora: "S", velX3: "N",
        versos: [
            "De| Deus| tu| és| e|lei|ta,| i|gre|ja| de| Je|sus,| O| teu| di|vi|no| Mes|tre| á| gló|ria| te| con|duz;| Pre|pa|ra|-te,| pois| E|le| mui| bre|ve| vol|ta|rá;| A| gló|ria| que| te| espe|ra| já| pre|pa|ra|da es|tá.",
            "Com| ce|les|tiais| a|dor|nos| es|pe|ra o| teu| Se|nhor,| Ves|ti|da| de| jus|ti|ça| e| do| di|vi|no a|mor;| Di|le|ta| és| de| Cris|to,| que| vi|da| te| do|ou;| A| fim| de| res|ga|tar|-te,| Seu| san|gue| der|ra|mou.",
            "É| gran|de| tu|a| gló|ria,| i|gre|ja| de| Je|sus;| Con|sa|gra|-te| a| E|le,| an|dan|do em| su|a| luz;| Em| bre|ve,| no| Seu| rei|no,| glo|rio|sa| en|tra|rás,| E a| fa|ce| do| E|spo|so,| no| céu,| con|tem|pla|rás."
        ],
        temposVersos: [
        4,4,4,4,4,8,4,4,4,4,4,4,12,
        4,4,4,4,4,8,4,4,4,4,4,4,12,
        4,4,4,4,4,8,4,4,6,2,4,4,12,
        4,4,4,4,4,8,4,4,4,4,4,4,12
        ],
        notas: ['G4','G4','G4','Ab4','G4','G4','F4','Eb4','Eb4','C5','Bb4','Ab4','G4','Ab4','Bb4','Eb5','Eb5','D5','D5','C5','Bb4','Ab4','Bb4','G4','Eb4','F4','F4','G4','Ab4','Bb4','C5','C5','Bb4','Eb5','Eb5','D5','C5','G4','Ab4','F4','G4','G4','Ab4','G4','G4','F4','Eb4','Eb4','F4','Eb4','D4','Eb4'],
        temposNotas: [
        4,4,4,4,4,8,4,4,4,4,4,4,12,
        4,4,4,4,4,8,4,4,4,4,4,4,12,
        4,4,4,4,4,8,4,4,6,2,4,4,12,
        4,4,4,4,4,8,4,4,4,4,4,4,12
        ],
    },
    "3": { 
        nome: "Faz-nos ouvir Tua voz",
        compasso: "4/4",
        velMin: 60, velMed: 68, velMax: 76,
        inicio: 1,
        velMinMeiaHora: 37, velMedMeiaHora: 38, velMaxMeiaHora: 40,
        MeiaHora: "N", velX3: "N",
        versos: [
            "Faz|-nos| ou|vir| Tu|a| voz| glo|ri|o|sa,| Ó| nos|so| Mes|tre,| fi|el| Re|den|tor;| A| Tu|a i|gre|ja,| di|le|ta| es|po|sa,| Sen|te| por| Ti| i|ne|fá|vel| a|mor.\n\n|Ó| ca|ro| Sal|va|dor,| a| Tu|a| voz| de a|mor| Nos| gui|a| pa|ra o| céu,| glo|rio|so| lar;| Pe|la| Pa|la|vra| vem| nos| con|so|lar.",
            "Ó| Je|sus| Cris|to,| ce|les|te| Es|po|so,| Vem| con|du|zir|-nos,| por| Teu| gran|de a|mor;| Já| an|te|ve|mos,| ó| Rei| ma|jes|to|so,| A| gló|ria e|ter|na| do| Teu| es|plen|dor..\n\n|Ó| ca|ro| Sal|va|dor,| a| Tu|a| voz| de a|mor| Nos| gui|a| pa|ra o| céu,| glo|rio|so| lar;| Pe|la| Pa|la|vra| vem| nos| con|so|lar.",
            "A| Tu|a i|gre|ja| es|tá| se a|dor|nan|do| Pa|ra en|con|trar|-se| Con|ti|go, ó| Je|sus;| Com| san|tas| ves|tes,| es|tá| a|guar|dan|do| Ver| Tu|a| fa|ce| no| rei|no| de| luz..\n\n|Ó| ca|ro| Sal|va|dor,| a| Tu|a| voz| de a|mor| Nos| gui|a| pa|ra o| céu,| glo|rio|so| lar;| Pe|la| Pa|la|vra| vem| nos| con|so|lar."
        ],
        temposVersos: [4,2,2,4,2,2,4,2,2,4,4,4,2,2,4,2,2,4,2,2,8,4,2,2,4,2,2,4,2,2,4,4,4,2,2,4,2,2,4,2,2,8,4,2,2,3,1,4,4,2,2,3,1,4,4,2,2,2,2,4,4,2,2,8,4,2,2,3,1,4,4,2,2,8],
        notas: ['G4','G4','B4','G4','G4','G4','A4','A4','A4','B4','G4','C5','C5','C5','B4','B4','B4','A4','A4','A4','G4','G4','G4','B4','G4','G4','G4','A4','A4','A4','B4','G4','C5','C5','C5','B4','B4','B4','A4','A4','A4','G4','A4','B4','A4','G4','B4','D5','A4','B4','A4','G4','B4','D5','C5','C5','C5','B4','G4','B4','A4','A4','A4','B4','C5','C5','E5','B4','G4','B4','A4','A4','A4','G4'],
        temposNotas: [4,2,2,4,2,2,4,2,2,4,4,4,2,2,4,2,2,4,2,2,8,4,2,2,4,2,2,4,2,2,4,4,4,2,2,4,2,2,4,2,2,8,4,2,2,3,1,4,4,2,2,3,1,4,4,2,2,2,2,4,4,2,2,8,4,2,2,3,1,4,4,2,2,8],
    },
    "4": { 
        nome: "Ouve a nossa oração",
        compasso: "6/4",
        velMin: 112, velMed: 125, velMax: 138,
        inicio: 1,
        velMinMeiaHora: 72, velMedMeiaHora: 75, velMaxMeiaHora: 78,
        MeiaHora: "N", velX3: "N",
        versos: [
            "Nos|sos| o|lhos| pa|ra os| céus, |ó| Deus,| nos| le|van|ta|mos; |Con|fi|an|do em| Teu| a|mor, |a| nos|sa| voz| al|ça|mos.\n\n|Ou|ve a| nos|sa| o|ra|ção |Des|de a| Tu|a ha|bi|ta|ção; |Tu|a| ben|ção,| Teu| per|dão, |Man|da, ó Deus| pi|e|do|so.",
            "Re|fri|gé|rio| ce|les|tial |e |bál|sa|mo| pre|cio|so |É| sen|tir|-Te em| nos|so| ser, |Pai| san|to,| glo|ri|o|so.\n\n|Ou|ve a| nos|sa| o|ra|ção |Des|de a| Tu|a ha|bi|ta|ção; |Tu|a| ben|ção,| Teu| per|dão, |Man|da, ó Deus| pi|e|do|so.",
            "No| Teu| tro|no,| ó| Se|nhor, |re|ce|be| nes|ta| ho|ra |A| hu|mil|de| o|ra|ção |do| po|vo| que| Te a|do|ra.\n\n|Ou|ve a| nos|sa| o|ra|ção |Des|de a| Tu|a ha|bi|ta|ção; |Tu|a| ben|ção,| Teu| per|dão, |Man|da, ó Deus| pi|e|do|so."
        ],
        temposVersos: [
            4,2,4,2,4,2,4,
            2,4,2,4,2,6,6,
            4,2,4,2,4,2,4,
            2,4,2,4,2,6,6,
            4,2,4,2,4,2,6,
            4,2,4,2,4,2,6,
            4,2,4,2,4,2,6,
            4,2,4,2,6,6
        ],
        notas: ['C5','C5','B4','B4','C5','C5','Bb4','Ab4','Eb4','Ab4','Bb4','Ab4','Ab4','G4','Db5','Db5','C5','C5','Db5','Bb4','G4','Eb4','Ab4','Bb4','C5','D5','Eb5','Eb4','C5','C5','Db5','C5','C5','Bb4','F4','Bb4','Bb4','C5','Bb4','Bb4','Ab4','Eb4','C4','Eb4','Ab4','Bb4','C5','Eb5','Db5','C5','Ab4','C5','Ab4','Bb4','Ab4'],
        temposNotas: [
            4,2,4,2,4,2,4,
            2,4,2,4,2,6,6,
            4,2,4,2,4,2,4,
            2,4,2,4,2,6,6,
            4,2,4,2,4,2,6,
            4,2,4,2,4,2,6,
            4,2,4,2,4,2,6,
            4,2,4,2,6,6
        ],
    },
    "5": { 
        nome: "A Rocha celestial",
        compasso: "6/8",
        velMin: 112, velMed: 128, velMax: 144,
        inicio: 1,
        velMinMeiaHora: 70, velMedMeiaHora: 73, velMaxMeiaHora: 76,
        MeiaHora: "N", velX3: "N",
        versos: [
            "Sá|bio e |pru|den|te |se|rá |o |var|ão |Que a |ca|sa |na |ro|cha |er|guer; | |Sem|pre |te|rá |e|fi|caz |pro|te|ção, |Pois |na|da |a |po|de a|ba|ter.| |\n\n"+
            "A |Ro|cha |ce|les|ti|al |É |Cris|to, o |Fi|lho |de |Deus, |O |Fun|da|men|to e|ter|nal |De |quem |bus|ca o |rei|no |dos |céus.",
            "Quem |so|bre a a|rei|a |qui|ser |cons|tru|ir, |Em |vão |tra|ba|lha|do |te|rá, | |Pois |su|a |ca|sa |vi|rá |a |ca|ir; |Em |fal|so a|li|cer|ce es|ta|rá.| |\n\n"+
            "A |Ro|cha |ce|les|ti|al |É |Cris|to, o |Fi|lho |de |Deus, |O |Fun|da|men|to e|ter|nal |De |quem |bus|ca o |rei|no |dos |céus.",
            "As |tem|pes|ta|des |e os |ven|tos |vi|rão |A |to|dos, |com |gran|de |fu|ror; | |Mas |os |que |so|bre |a |Ro|cha |es|tão, |Fir|me|za |te|rão |no |Se|nhor.| |\n\n"+
            "A |Ro|cha |ce|les|ti|al |É |Cris|to, o |Fi|lho |de |Deus, |O |Fun|da|men|to e|ter|nal |De |quem |bus|ca o |rei|no |dos |céus.",
        ],
        temposVersos: [
            2,2,2,2,2,2,2,2,2,4,
            2,2,2,2,2,2,2,6,6,
            2,2,2,2,2,2,2,2,2,4,
            2,2,2,2,2,2,2,6,6,
            6,4,2,2,2,2,6,
            6,4,2,2,2,2,6,
            6,4,2,2,2,2,12,
            6,2,2,2,2,2,2,12],
        notas: [
            'Eb4','Eb4','Eb4','Eb4','C4','Eb4','Ab4','Bb4','C5','Eb4','Ab4','G4','G4','G4','G4','Ab4','Bb4','Ab4','Eb4',
            'Eb4','Eb4','Eb4','Eb4','C4','Eb4','Ab4','Bb4','C5','Eb4','C5','Bb4','Bb4','Bb4','Bb4','Ab4','F4','Eb4',' ',
            'C5','Ab4','F4','Eb4','C4','F4','Eb4',
            'C5','Db5','C5','Bb4','F4','C5','Bb4',
            'C5','Eb5','Eb5','Db5','Ab4','Bb4','C5',
            'Db5','C5','Bb4','Ab4','G4','Ab4','Bb4','Ab4'],
        temposNotas: [
            2,2,2,2,2,2,2,2,2,4,
            2,2,2,2,2,2,2,6,6,
            2,2,2,2,2,2,2,2,2,4,
            2,2,2,2,2,2,2,6,6,
            6,4,2,2,2,2,6,
            6,4,2,2,2,2,6,
            6,4,2,2,2,2,12,
            6,2,2,2,2,2,2,12],
    },
    "6": { 
        nome: "Glória ao Justo fiel Cordeiro",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |Cor|dei|ro |i|ma|cu|la|do, |Je|sus |Cris|to, |e|xal|te|mos; |"+
            "Do |Seu |No|me |fa|la|re|mos, |pois, |com |in|fi|ni|to |a|mor, |"+
            "Ve|io |à |ter|ra, |glo|ri|o|so, |com |po|der |e |es|plen|dor. |"+

            "Se|gui|re|mos |a |Je|sus |Cris|to |com |in|tei|ra |con|fi|an|ça; |"+
            "Te|mos |vi|va |es|pe|ran|ça |de |che|gar |ao |lar |de |a|mor, |"+
            "Di|ri|gi|dos, |am|pa|ra|dos |pe|lo |sá|bio |Con|du|tor. |"+

            "Só |a |Cris|to |da|re|mos |gló|ri|a |e |lou|vo|res |em |e|ter|no, |"+
            "Pois |liv|rou|-nos |do |in|fer|no, |do |pe|ca|do |e |do |mal, |"+
            "Pa|ra |dar|-nos |a |he|ran|ça |no |Seu |lar |ce|les|ti|al. |"+

            "Gló|ri|a |ao |Jus|to, |fi|el |Cor|dei|ro, |"+
            "Pu|ro, |San|to, |Ver|da|dei|ro! |"+
            "Pe|la |mor|te |no |ma|dei|ro, |"+
            "Nos |re|con|ci|li|ou |com |De|us. |"

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "7": { 
        nome: "Granjeai granjeai os talentos",
        compasso: "6/4",
        velMin: 80,
        velMed: 90,
        velMax: 100,
        inicio: 6,
        velMinMeiaHora: 53,
        velMedMeiaHora: 56,
        velMaxMeiaHora: 59,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Os |ta|len|tos |Je|sus |nos |tem |da|do, |"+
            "Don |ce|les|tes |de |gran|de |va|lor; |"+
            "Nós |de|ve|mos, |com |to|do |o |cu|da|do, |"+
            "Gran|je|á-|los, |ser|vin|do |ao |Se|nhor." ,

            "Gran|je|ai, |gran|je|ai |os |ta|len|tos; |"+
            "So|bre |o |mui|to |o |Se|nhor |vos |po|rá; |"+
            "Vi|gi|ai |e |es|tai |sem|pre |a|ten|tos, |"+
            "Eis |que |E|le |à |por|ta |es|tá." ,

            "Se |de |tu|do |nós |for|mos |pru|den|tes, |"+
            "Se |fi|éis |o |Se|nhor |nos |a|char, |"+
            "Her|da|re|mos |Seus |bens |per|ma|nen|tes |"+
            "No |re|pou|so |da |gló|ria |sem |par." ,

            "Di|li|gen|tes |o|brei|ros |se|ja|mos, |"+
            "Pois |os |fru|tos |Je|sus |vai |pe|dir; |"+
            "Os |ta|len|tos |ja|mais |es|con|da|mos, |"+
            "Se |qui|ser|mos |a |gló|ria |fru|ir."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "8": { 
        nome: "Oh! Vem sim vem",
        compasso: "6/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nes|ta |ter|re|na |vi|da, |ó |jus|to |Re|den|tor, |"+
            "São |gran|des |os |com|ba|tes |aos |Teus |fi|éis, |Se|nhor |"+

            "Oh! |Vem, |sim, |vem |nos |a|le|grar, |Se|nhor; |"+
            "És |nos|sa |Es|pe|ran|ça |e |nos|so |De|fen|sor. |" ,

            "No |mun|do |há |vai|da|de, |mui|ta |tris|te|za |e |dor, |"+
            "Mas |Teus |re|mi|dos |sen|tem |a |Tu|a |paz |e |a|mor. |" ,

            "Do |céu |Te |es|pe|ra|mos, |glo|ri|o|so, |e|ter|no |Rei; |"+
            "Tu |és |ve|raz |Pas|tor |e |nós |so|mos |Tu|a |grei."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "9": { 
        nome: "Luminosa é a senda",
        compasso: "3/4",
        velMin: 63,
        velMed: 67,
        velMax: 72,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Lu|mi|no|sa |é |a |sen|da"+
            "Que |con|duz, |por |fé, |a |Deus;"+
            "Não |há |na|da |que |me |pren|da"+
            "Ne|m |de|te|nha |os |pas|sos |meus." ,

            "Que |pra|zer |é |vi|ver |Com |o |meu |bom |Je|sus!"+
            "Na |tris|te|za |e |na |a|le|gri|a |sin|to |em |mim |a |Su|a |luz." ,

            "Ju|bi|lo|so, |eu |pros|si|go"+
            "Pa|ra |a |gló|ri|a |e|ter|nal;"+
            "Sei |que |Cris|to |es|tá |co|mi|go,"+
            "Pro|te|gen|do|-me |do |mal." ,

            "Je|sus |Cris|to |me |con|so|la"+
            "Quan|do |es|tou |em |a|fli|ção;"+
            "Seu |Es|pí|ri|to |con|tro|la"+
            "Mi|nha |men|te |e |co|ra|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "10": { 
        nome: "Prossegui vitoriosos em Cristo",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pros|se|gui |vi|to|ri|o|sos |em |Cris|to,"+
            "E|le, |em |bre|ve, |dos |céus |vai |vol|tar;"+
            "Man|da|rá |re|co|lher |Seus |re|mi|dos"+
            "Pa|ra, |à |gló|ri|a |e|ter|na, |os |le|var." ,

            "Cer|ta|men|te |e|xal|ta|do |se|rá"+
            "Quem |o |No|me |de |Cris|to |não |ne|gar;"+
            "E|xal|ta|do |com |gló|ri|a |ce|les|ti|al,"+
            "Her|da|rá |a |ri|que|za |e|ter|nal." ,

            "Pros|se|gui, |rei|ei|tan|do |o |pe|ca|do,"+
            "Pois |i|reis |en|con|trar |o |Se|nhor;"+
            "Pa|ra |vós, |E|le |tem |pre|pa|ra|do"+
            "Um |lu|gar |no |Seu |rei|no |de |a|mor." ,

            "Pros|se|gui |nes|ta |fé |glo|ri|o|sa,"+
            "O |i|ni|mi|go |de |vós |fu|gi|rá;"+
            "Vi|gi|ai |na |o|ra|ção, |no |cu|da|do,"+
            "E |con|vos|co |Je|sus |es|ta|rá."
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "11": { 
        nome: "Ó igreja de Deus resplandece",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |i|gre|ja |de |Deus, |res|plan|de|ce"+
            "E |a|le|gra|-te, |de |co|ra|ção,"+
            "Es|pa|lhan|do |a |se|men|te |ce|les|te,"+
            "A|nun|ci|an|do |a |ve|raz |sal|va|ção." ,

            "Tu |és |a |i|gre|ja |de |Je|sus |Cris|to, |o |Cor|dei|ro,"+
            "Que |tem |o |Seu |tro|no |nos |céus;"+
            "E|le, |o |jus|to, |Fi|el, |ver|da|dei|ro,"+
            "Te |da|rá |as |pro|mes|sas |de |Deus." ,

            "És |i|gre|ja |for|mo|sa |e |a|ma|da"+
            "Por |Cris|to, |o |teu |Sal|va|dor,"+
            "Que |te |quer |sem|pre |mais |a|dor|na|da"+
            "De |jus|ti|ça |e |su|bli|me |a|mor." ,

            "À |glo|ri|o|sa |e |ce|les|te |ci|da|de"+
            "I|rás, |com |Je|sus, |Sal|va|dor;"+
            "Lá |há |paz, |gran|de |a|mor, |san|ti|da|de;"+
            "Lá |ve|rás |o |fi|el |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "12": { 
        nome: "Sempre em Jesus confiarei",
        compasso: "3/4",
        velMin: 58,
        velMed: 67,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 36,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sem|pre |em |Je|sus |con|fi|a|rei, |Su|a |Pa|la|vra |hon|ra|rei;"+
            "Por |Su|a |mor|te |a|troz |na |cruz, |me |con|ce|deu |e|ter|na |luz." ,

            "Cris|to |me |gui|a |com |po|der,"+
            "Cris|to |me |gui|a |com |sa|ber;"+
            "E|le |é |o |A|mi|go |mui |fi|el,"+
            "Cris|to |Je|sus, |o |E|ma|nu|el." ,

            "Os |bons |con|se|lhos |de |Je|sus |são, |pa|ra |mim, |di|vi|na |luz;"+
            "E|les |me |tra|zem |re|ti|dão |e |di|vi|nal |con|so|la|ção." ,

            "Eu |vou |a|van|te, |com |va|lor; |si|go |por |fé |o |meu |Se|nhor."+
            "No |céu, |um |di|a, |o |ve|rei |e |i|gual |a |E|le |en|tão |se|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "13": { 
        nome: "Confiemos em Deus",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 45,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 50,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |a|ma|dos, |ven|ce|re|mos |es|te |mun|do |en|ga|na|dor;"+
            "Pe|la |fé |nós |lu|ta|re|mos, |co|fi|an|do |no |Se|nhor." ,

            "Con|fie|mos |em |Deus,"+
            "E|le |é |o |nos|so |Pai;"+
            "E|le |ou|ve |aos |Seus"+
            "E, |ao |céu, |le|vá|-los |vai."+
            "Pe|lo |Seu |i|men|so |a|mor"+
            "Nos |pro|te|ge |o |Se|nhor;"+
            "Oh! |O|re|mos, |com |fer|vor,"+
            "Ao |gran|de |Deus, |For|ma|dor." ,

            "Do |Seu |tro|no |glo|ri|o|so |nos |con|tem|pla |o |Se|nhor;"+
            "Deus, |o |To|do|-Po|de|ro|so, |nos |con|ser|va |em |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "14": { 
        nome: "Manda os Teus dons celestes",
        compasso: "6/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 6,
        velMinMeiaHora: 70,
        velMedMeiaHora: 73,
        velMaxMeiaHora: 76,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Os |Teus |fi|éis, |re|u|ni|dos |an|te |a |Tu|a |pre|sen|ça,"+
            "O |san|to |Con|so|la|dor |es|pe|ram, |ó |Se|nhor."+
            "To|dos, |con|tri|tos, |cla|ma|mos |com |fé |e |com |re|ve|rên|cia;"+
            "Cum|pre |em |nós |a |pro|mes|sa |de |Deus, |o |Cri|a|dor." ,

            "Man|da |os |Teus |dons |ce|les|tes |pe|lo |Es|pí|ri|to |san|to;"+
            "Co|bre |os |fi|éis |com |o |man|to |do |Teu |Con|so|la|dor." ,

            "Os |Teus |fi|éis, |re|u|ni|dos, |bus|cam |os |Teus |dons |ce|les|tes;"+
            "Cla|mam |com |to|do |o |fer|vor: |A|ten|de, |ó |Se|nhor!"+
            "Es|pe|ran|ço|sos, |a|guar|dam, |cren|do |no |que |pro|me|tes|te;"+
            "Fa|ze |que |to|dos |sin|ta|mos |o |Teu |Con|so|la|dor." ,

            "Os |Teus |fi|éis, |re|u|ni|dos, |cons|tan|te|men|te |cla|man|do,"+
            "Sen|tem, |ó |bom |Re|den|tor, |ce|les|ti|al |fer|vor;"+
            "Pa|ci|en|te|men|te |es|pe|ra|mos, |sem|pre, |com |fé, |im|plo|ran|do:"+
            "Vem, |ó |Se|nhor, |con|fir|mar|-nos |com |o |Con|so|la|dor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "15": { 
        nome: "Ó alma que choras",
        compasso: "12/8",
        velMin: 108,
        velMed: 120,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 72,
        velMedMeiaHora: 75,
        velMaxMeiaHora: 78,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ó |al|ma |que |cho|ras |"+
            "com |gran|de a|mar|gor, |"+
            "Se |que|res |a|lí|vio, |"+
            "re|cor|re ao |Se|nhor; |\n"+
            "A |e|le im|plo|ran|do, |"+
            "con|for|to a|cha|rás; |"+
            "Gra|ça, |e |vir|tu|de, |"+
            "e |vi|da |te|rás. |\n\n" ,

            "A|mi|go |sin|ce|ro |"+
            "é |Cris|to |Je|sus, |"+
            "Que |sal|va o |per|di|do, |"+
            "ao |céu |o |con|duz. |\n"+
            "Tu|a |voz |le|van|ta |"+
            "ao |bom |Re|den|tor, |"+
            "Cla|ma |por |so|cor|ro, |"+
            "cla|ma ao |Teu |Se|nhor. |\n\n" ,

            "Ó |al|ma |can|sa|da, |"+
            "re|cor|re ao |Se|nhor, |"+
            "E|le |te |sus|ten|ta |"+
            "e |te |dá |vi|gor; |\n"+
            "Au|xí|lio |do |al|to |"+
            "não |fal|ta |ja|mais, |"+
            "Em |Cris|to |con|fi|a |"+
            "e |não |cho|res |mais." ,
        ],
        temposVersos: [
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,

            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,

            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6
        ],
        notas: [
            'Bb4','Bb4','A4','G4','G4','F4',
            'Eb4','Eb4','G4','F4','D4',
            'Bb4','Bb4','A4','G4','G4','F4',
            'E4','E4','F4','G4','F4',
            'A4','A4','Bb4','C5','C5','F4',
            'F4','F4','Bb4','C5','D5',
            'D5','D5','C5','A4','Bb4','G4',
            'F4','F4','F4','F4','F4',

            'Bb4','Bb4','A4','G4','G4','F4',
            'Eb4','Eb4','G4','F4','D4',
            'Bb4','Bb4','A4','G4','G4','F4',
            'E4','E4','F4','G4','F4',
            'A4','A4','Bb4','C5','C5','F4',
            'F4','F4','Bb4','C5','D5',
            'D5','D5','C5','A4','Bb4','G4',
            'F4','F4','F4','F4','F4',

            'Bb4','Bb4','A4','G4','G4','F4',
            'Eb4','Eb4','G4','F4','D4',
            'Bb4','Bb4','A4','G4','G4','F4',
            'E4','E4','F4','G4','F4',
            'A4','A4','Bb4','C5','C5','F4',
            'F4','F4','Bb4','C5','D5',
            'D5','D5','C5','A4','Bb4','G4',
            'F4','F4','F4','F4','F4'
        ],
        temposNotas: [
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,

            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,

            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6,
            3,1,1,1,3,3,
            3,1,1,1,6

        ]
    },
    "16": { 
        nome: "Promessa excelente",
        compasso: "6/4",
        velMin: 100,
        velMed: 110,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 60,
        velMedMeiaHora: 63,
        velMaxMeiaHora: 66,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pro|mes|sa |ex|ce|len|te |fi|zes|te, |ó |Deus,"+
            "Fi|el |cum|pri|men|to |a |Pa|la|vra |te|rá;"+
            "Sen|tir |Teu |Es|pí|ri|to |que|rem |os |Teus;"+
            "Teu |po|vo |cla|man|do |es|tá." ,

            "En|vi|a, |ó |Deus, |por |a|mor,"+
            "Teus |dons |pe|lo |Con|so|la|dor."+
            "Vem |nos |re|ves|tir |de |po|der |di|vi|nal;"+
            "Vi|si|ta|-nos, |Pai |e|ter|nal." ,

            "Oh! |Vem |des|per|tar|-nos, |a|ma|do |Se|nhor;"+
            "O |Es|pí|ri|to |San|to |en|vi|a |dos |céus;"+
            "Com |fé |a|guar|da|mos |o |Con|so|la|dor,"+
            "Que |faz |vir|tu|o|sos |os |Teus." ,

            "O |Teu |San|to |Es|pí|ri|to |nos |gui|a|rá"+
            "Em |to|da |ver|da|de, |jus|ti|ça |e |a|mor;"+
            "Por |E|le |Teu |po|vo |en|si|na|do |se|rá;"+
            "Teu |dom |a|guar|da|mos, |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "17": { 
        nome: "Ó Senhor vem visitar-me",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |se|nhor, |vem |vi|si|tar|-me |e |a|len|tar |a |mi|nha |fé;"+
            "Eu |de|se|jo |con|sa|grar|-me |e |al|can|çar, |de |Ti, |mer|cê." ,

            "Com |o |Es|pí|ri|to |di|vi|no"+
            "Vem, |Je|sus, |me |ba|ti|zar;"+
            "Aos |Teus |pés |eu |me |in|cli|no"+
            "E |Te |ro|go |sem |ces|sar:"+
            "Oh! |Vem |Se|nhor, |Com |Teu |Dom |me |con|so|lar." ,

            "Ó |Je|sus, |és |mi|nha |Sor|te, |és |mi|nha |Sal|va|ção;"+
            "Faz|-me |fir|me, |faz|-me |for|te |pe|la |Tu|a |San|ta |un|ção." ,

            "E |ao |fim |se|rei |di|to|so, |pois |Con|ti|go |es|ta|rei;"+
            "No |Teu |rei|no |glo|ri|o|so, |fa|ce |a |fa|ce |Te |ve|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "18": { 
        nome: "É Jesus meu Refúgio",
        compasso: "3/4",
        velMin: 76,
        velMed: 84,
        velMax: 92,
        inicio: 3,
        velMinMeiaHora: 45,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gran|de |é |a |tor|men|ta |e |a |tri|bu|la|ção,"+
            "Mui|tos |são |os |com|ba|tes, |gran|de, |a |ten|ta|ção;"+
            "Mas |Je|sus, |meu |Ro|che|do |e |Fi|el |Guar|di|ão,"+
            "É |a |For|ta|le|za |que |dá |pro|te|ção." ,

            "É |Je|sus |meu |Re|fú|gio, |meu |fi|el |pro|te|tor,"+
            "E |n'E|le |a|bri|ga|do |te|rei |Seu |vi|gor;"+
            "Ca|da |di|a |que |pas|sa, |sin|to |mais |Seu |a|mor"+
            "E |a |vi|da |ce|les|te |do |meu |Sal|va|dor." ,

            "Ao |Se|nhor, |mais |u|ni|do |eu |al|me|jo |vi|ver"+
            "E |cum|prir, |nes|te |mun|do, |Seu |glo|ri|o|so |que|rer;"+
            "Os |Seus |pas|sos |se|guin|do, |eu |i|rei |re|ce|ber"+
            "Mais |for|ça |e |co|ra|gem, |a |fim |de |ven|cer." ,

            "Vou |com |a |fé |no |meu |Mes|tre, |a |tor|men|ta |en|fren|tar,"+
            "Mes|mo |que |for|te|men|te |e|la |se |le|van|tar;"+
            "Com |Je|sus, |a |vi|tó|ria |eu |i|rei |al|can|çar,"+
            "Pois |Su|as |pro|mes|sas |não |po|dem |fa|lhar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "19": { 
        nome: "Manda-nos Teu Poder",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Man|da, |ó |Se|nhor, |do |céu, |fo|go |san|to |ao |po|vo |Teu;"+
            "Man|da|-nos |Teu |po|der;"+
            "Fo|go |que |des|trói |o |mal, |fo|go |san|to, |ce|les|ti|al;"+
            "Man|da|-nos |Teu |po|der." ,

            "Man|da|-nos |o |Teu |po|der,"+
            "O |Po|der |re|no|va|dor, |pe|lo |Teu |i|men|so |a|mor;"+
            "Vem, |Se|nhor, |se|lar |Teu |po|vo"+
            "Com |o |bom |Con|so|la|dor." ,

            "Vem |as |bên|ções |der|ra|mar |e, |os |que |dor|mem, |des|per|tar;"+
            "Man|da|-nos |Teu |po|der;"+
            "E |das |nos|sas |vi|das |faz |tes|te|mu|nho |e|fi|caz;"+
            "Man|da|-nos |Teu |po|der." ,

            "Vem |nos |dar |as |o|ra|ções, |vi|si|tan|do |os |co|ra|ções;"+
            "Man|da|-nos |Teu |po|der;"+
            "Em |cons|tan|te |co|mu|nhão, |es|pe|ra|mos |Tu|a |un|ção;"+
            "Man|da|-nos |Teu |po|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "20": { 
        nome: "Teu Espírito derrama",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 47,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Teu |Es|pí|ri|to |der|ra|ma"+
            "So|bre |Teus |fi|éis, |Se|nhor,"+
            "Que |hum|il|des |e |con|tri|tos,"+
            "Bus|cam |o |Con|so|la|dor." ,

            "Vem |com |Teu |Po|der, |Se|nhor, |Teu |po|vo |for|ti|fi|car;"+
            "Com |o |bom |Con|so|la|dor, |vem, |oh! |vem |ba|ti|zar." ,

            "Teu |Es|pí|ri|to |der|ra|ma,"+
            "A |pro|mes|sa |cum|pre, |ó |Deus,"+
            "En|vi|an|do |aos |Teus |fi|lhos"+
            "As |vir|tu|des |lá |dos |céus." ,

            "Teu |Es|pí|ri|to |der|ra|ma,"+
            "Re|ves|tin|do|-nos |de |a|mor;"+
            "Dif |Teus |dons |ma|ra|vi|lho|sos,"+
            "En|ri|que|ce|-nos, |Se|nhor."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "21": { 
        nome: "Não mais oprimidos seremos",
        compasso: "6/8",
        velMin: 116,
        velMed: 127,
        velMax: 138,
        inicio: 6,
        velMinMeiaHora: 66,
        velMedMeiaHora: 68,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Não |mais |o|pri|mi|dos |se|re|mos"+
            "Na |vol|ta |do |nos|so |Se|nhor;"+
            "A |voz |es|pe|ra|da |ou|vi|re|mos:"+
            "'Oh! |Vin|de!', |di|rá |o |Sal|va|dor;"+
            "A |vi|da |e|ter|na |com |gló|ria"+
            "Te|re|mos, |por |Cris|to, |nos |céus;"+
            "Com|ple|ta |se|rá |a |vi|tó|ria"+
            "Ao |ver|mos |a |fa|ce |de |Deus." ,

            "Não |mais |per|se|gui|dos |se|re|mos"+
            "Na |vol|ta |do |nos|so |Se|nhor;"+
            "Dei|xan|do |es|te |mun|do, |i|re|mos"+
            "Ao |céu |nos|sa |pá|tria |de |a|mor;"+
            "Na|que|la |ci|da|de |glo|ri|o|sa,"+
            "Lu|gar |de |e|ter|no |es|plen|dor,"+
            "A |he|ran|ça |di|vi|na, |pre|ci|o|sa,"+
            "Te|re|mos |de |Deus, |Cri|a|dor." ,

            "A |vol|ta |de |Cris|to |glo|ri|o|so"+
            "Se|rá |com |po|der |e |es|plen|dor;"+
            "De|ve|mos |es|tar |re|ves|ti|dos"+
            "De |gra|ça, |jus|ti|ça |e |a|mor."+
            "I|re|mos, |en|tão, |ó |que|ri|dos,"+
            "Des|fru|tar |a |he|ran|ça |e|ter|nal,"+
            "Pois |Je|sus |nos |da|rá |a |co|ro|a |re|al,"+
            "No |di|to|so |lar |ce|les|ti|al." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "22": { 
        nome: "Guia-me ó Senhor",
        compasso: "6/8",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gui|a|-me, |ó |Se|nhor, |na |ful|gu|ran|te |luz;"+
            "Dá|-me |mais |do |a|mor, |que |à |gló|ria |me |con|duz." ,

            "Gui|a|-me, |gui|a|-me |com |Tu|a |mão, |Se|nhor;"+
            "Gua|rda|-me, |gua|rda|-me |do |mun|do |en|ga|na|dor." ,

            "Gui|a|-me, |bom |Je|sus, |des|can|so |eu |te|rei;"+
            "Re|ge|-me |pe|la |luz |que |vem |de |Ti, |meu |Rei." ,

            "Gui|a|-me, |Sal|va|dor, |na |Tu|a |san|ta |lei;"+
            "Gua|rda|-me |em |a|mor, |Teu |No|me |ben|di|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "23": { 
        nome: "O Senhor é o meu Pastor",
        compasso: "6/4",
        velMin: 96,
        velMed: 108,
        velMax: 120,
        inicio: 1,
        velMinMeiaHora: 62,
        velMedMeiaHora: 65,
        velMaxMeiaHora: 68,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "O |Se|nhor |é |o |meu |Pas|tor, |na|da |dei|xa|rá |me |fal|tar;"+
            "Com |a |Su|a |man|si|dão, |em |ver|des |pas|tos |faz|-me |an|dar;"+
            "Re|fri|gé|rio, |fé |e |paz |mi|nha |al|ma |n'E|le |a|chou;"+
            "Nas |ve|re|das |ce|les|ti|ais, |os |meus |pas|sos |Je|sus |fir|mou." ,

            "Se |eu |ti|ves|se |que |an|dar |pe|lo |va|le |da |mor|te, |ó |Deus,"+
            "Eu |não |te|me|ri|a |o |mal, |por|quan|to |es|tou |nos |bra|ços |Teus;"+
            "Tu|a |va|ra, |ó |Se|nhor, |me |con|ser|va |em |re|ti|dão,"+
            "Teu |ca|ja|do |di|vi|nal |traz |con|for|to |e |con|so|la|ção." ,

            "U|ma |me|sa |pa|ra |mim, |ó |Se|nhor, |Tu |vens |pre|pa|rar;"+
            "Com |Teu |ó|le|o |vens |me |un|gir, |fa|zes |meu |cá|lix |trans|bor|dar;"+
            "A |bon|da|de, |a |mer|cê |so|bre |mim |con|tem|pla|rei;"+
            "Nas |mo|ra|das |do |meu |Deus |pa|ra |sem|pre |ha|bi|ta|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "24": { 
        nome: "Dá-me graça, Senhor",
        compasso: "6/4",
        velMin: 88,
        velMed: 94,
        velMax: 100,
        inicio: 6,
        velMinMeiaHora: 52,
        velMedMeiaHora: 54,
        velMaxMeiaHora: 56,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Dá|-me |gra|ça, |Se|nhor, |pa|ra |sem|pre |te |a|mar"+
            "Com |in|ten|so |e |pro|fun|do |a|mor"+
            "Que |pro|ce|de |de |Ti, |glo|ri|o|so |Se|nhor,"+
            "E |me |faz |Teus |con|se|lhos |guar|dar." ,

            "Que|ro |a|mar |Te |com |to|do |o |fer|vor"+
            "A|do|rar|-Te, |meu |bom |Sal|va|dor;"+
            "Vem, |com |Tu|as |vir|tu|des, |cin|gir"+
            "O |Teu |ser|vo, |que |quer |Te |ser|vir." ,

            "Com |di|vi|na |a|fei|ção |que|ro |sem|pre |Te |hon|rar"+
            "E |tam|bém |ser |fi|el |ser|vi|dor;"+
            "Es|se |i|men|so |a|mor |que |de |Ti |vem, |Se|nhor,"+
            "Me |en|si|na |ao |Teu |No|me |e|xal|tar." ,

            "Es|se |e|lo |de |a|mor |sem|pre |me |faz |lem|brar"+
            "Quan|to |a|mas|te |mi|nh'al|ma, |Se|nhor;"+
            "Que|ro |sem|pre |sen|tir, |cul|ti|var |es|se |a|mor,"+
            "A|guar|dan|do, |com |fé, |Teu |vol|tar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "25": { 
        nome: "Um grande bem precioso bem",
        compasso: "3/4",
        velMin: 54,
        velMed: 63,
        velMax: 72,
        inicio: 2.5,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Um |gran|de |bem, |pre|ci|o|so |bem, |eu |re|ce|bi |do |Cri|a|dor"+
            "Que |me |cha|mou |e |re|ve|lou, |por |com|pai|xão, |o |Re|den|tor;"+
            "O |Seu |que|rer |eu |com|pre|en|di |e |pe|ca|dor |eu |me |sen|ti;"+
            "Meu |co|ra|ção |se |que|bran|tou, |to|do |o |meu |ser |se |trans|for|mou"+
            "Eu |sou |fe|liz, |ben|di|go |a |Deus; |com |sal|va|ção |me |a|gra|ci|ou" ,

            "Que |gran|de |bem, |pre|ci|o|so |bem! |Eu |ser|vo |a |Deus, |o |For|ma|dor,"+
            "Que |pa|ra |Si |me |se|pa|rou; |re|mi|do |sou |do |Sal|va|dor;"+
            "Pu|ri|fi|cou |meu |co|ra|ção, |me |con|ce|deu |o |Seu |per|dão;"+
            "A|té |o |fim |do |meu |vi|ver, |Seu |san|to |a|mor |a|nun|ci|a|rei;"+
            "Com |a |un|ção |do |Cri|a|dor, |de |to|do |o |mal |me |a|fas|ta|rei." ,

            "É |gran|de |bem, |pre|ci|o|so |bem, |vi|ver |na |fé, |ter |paz |com |Deus,"+
            "Par|ti|ci|par, |com |os |fi|éis, |dos |e|ter|nais |te|sou|ros |Seus;"+
            "Sou |mui |fe|liz, |pois |al|can|cei |lu|gar |nos |céus, |por |Cris|to, |o |Rei;"+
            "A |Deus, |o |Pai, |e |a |Je|sus |e|xal|ta|rei |com |to|do |o |a|mor;"+
            "O |ga|lar|dão |re|ce|be|rei |das |san|tas |mãos |do |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "26": { 
        nome: "Julga-me Senhor",
        compasso: "4/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Jul|ga|-me, |Se|nhor, |pois |a|mo |a |Tu|a |lei,"+
            "Con|fi|an|do |em |Ti, |ja|mais |va|ci|la|rei;"+
            "Vem, |ó |Deus, |com |Teu |fa|lar, |mi|nha |al|ma |sus|ten|tar,"+
            "Que|ro |em |jus|ti|ça |sem|pre |ca|mi|nhar." ,

            "Teu |Es|pí|ri|to, |ó |Se|nhor,"+
            "Tu|do |po|de |in|ves|ti|gar;"+
            "Na|da |pos|so |te |ocul|tar,"+
            "Pois, |com |Teu |di|vi|no |o|lhar,"+
            "Vês |os |céus |e |a |ter|ra, |sá|bio |Cri|a|dor." ,

            "Di|an|te |dos |meus |o|lhos |Teu |fa|vor |es|tá:"+
            "Bem-|a|ven|tu|ran|ça |que |i|gual |não |há;"+
            "Que|ro, |ó |Deus, |Te |a|gra|dar |e |Teu |rei|no |al|can|çar;"+
            "Vem, |com |a |Pa|la|vra, |me |pu|ri|fi|car." ,

            "Em |ca|mi|nho |pla|no |os |meus |pés |es|tão,"+
            "No |ca|mi|nho |que |con|duz |à |sal|va|ção;"+
            "Nas |con|gre|ga|ções, |ó |Deus, |con|ta|rei |os |fei|tos |Teus,"+
            "Pois |Tu |can|ce|las|te |os |pe|ca|dos |meus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "27": { 
        nome: "O Senhor é minha Luz",
        compasso: "6/8",
        velMin: 116,
        velMed: 130,
        velMax: 144,
        inicio: 5,
        velMinMeiaHora: 72,
        velMedMeiaHora: 74,
        velMaxMeiaHora: 76,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "O |Se|nhor |é |a |mi|nha |Luz |e |mi|nha |e|ter|na |Sal|va|ção."+
            "Na|da |de|vo |eu |te|mer, |pois |E|le |é |meu |fi|el |Guar|di|ão,"+
            "O |Se|nhor |é |o |meu |Deus, |na|da |a|qui |re|ce|a|rei;"+
            "Pa|ra |sem|pre |sen|ti|rei |a |pro|vi|dên|cia |do |meu |gran|de |Rei." ,

            "Se |vi|er |me |cir|cun|dar |to|do |o |e|xér|ci|to |do |mal,"+
            "O |Se|nhor |en|vi|a|rá |Seu |gran|de |e|xér|ci|to |ce|les|ti|al."+
            "Com |o |co|ra|ção |em |paz, |ser|vo |ao |san|to |Cri|a|dor;"+
            "Pe|que|ni|no |e |fra|co |sou, |mas |meu |Re|fú|gio |é |Deus, |meu |Se|nhor." ,

            "Meu |de|se|jo |é |mo|rar |sem|pre |na |ca|sa |do |Se|nhor,"+
            "Pois |as|sim |con|tem|pla|rei |a |for|mo|su|ra |do |meu |Cri|a|dor."+
            "E|le |me |es|con|de|rá |quan|do |vi|er |a |ten|ta|ção;"+
            "Pro|te|gi|do |es|ta|rei |sem|pre |de|bai|xo |do |Seu |pa|vi|lhão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "28": { 
        nome: "Para o céu marchemos",
        compasso: "4/4",
        velMin: 69,
        velMed: 74,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pa|ra |o |céu |mar|che|mos, |fir|mes, |sem |te|mer,"+
            "Na|da |nes|ta |mar|cha |po|de |nos |de|ter;"+
            "Com |va|lor |mar|che|mos, |quem |im|pe|di|rá?"+
            "Cris|to, |nos|sa |For|ça, |Seu |po|der |nos |da|rá." ,

            "Mar|che|mos |pa|ra |o |céu, |mo|ra|da |do |Se|nhor,"+
            "O|lhan|do |bem |a|ten|tos |Pa|ra |o |Re|den|tor;"+
            "Mar|che|mos |com |va|lor |à |pá|tria |ce|les|ti|al;"+
            "Lá |des|fru|ta|re|mos |vi|da |e|ter|nal." ,

            "Pa|ra |o |céu |mar|che|mos, |chei|os |de |a|mor,"+
            "Do |a|mor |de |Cris|to, |nos|so |Con|du|tor;"+
            "Com |va|lor |an|de|mos, |sem|pre |em |u|ni|ão,"+
            "Pa|ra |e|ter|na |gló|ria, |a |ce|les|te |Si|ão." ,

            "Pa|ra |o |céu |mar|che|mos, |sem |es|mo|re|cer;"+
            "Pe|la |fé, |po|de|mos |to|do |o |mal |ven|cer;"+
            "Cris|to |for|ta|le|ce |nos|so |co|ra|ção;"+
            "No |e|ter|nal |re|pou|so |nos |da|rá |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "29": { 
        nome: "Senhor Jesus Tu és o meu Rochedo",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor |Je|sus, |Tu |és |meu |Ro|che|do,"+
            "Só |em |Ti |de|se|jo |sem|pre |con|fi|ar;"+
            "De|fen|de|-me |de |to|do |mal |e |me|do,"+
            "Pois |so|men|te |Tu |me |po|des |a|ju|dar" ,

            "Ò |Se|nhor, |vem |con|du|zir|-me"+
            "Pe|lo |Es|pí|ri|to |à |pá|tria |e|ter|nal;"+
            "Da |ver|da|de |vem |cin|gir|-me"+
            "E |de |to|da |a |ar|ma|du|ra |ce|les|ti|al." ,

            "Se|nhor |Je|sus, |a |Tu|a |mão |po|ten|te"+
            "Me |fa|rá |ven|cer |o |mun|do |en|ga|na|dor;"+
            "Es|te|ja |Tu|a |for|ça |em |mim |pre|sen|te"+
            "E |Te |glo|ri|fi|ca|rei, |ó |meu |Se|nhor." ,

            "Se|nhor |Je|sus, |és |mi|nha |Es|pe|ran|ça,"+
            "Meu |Re|fú|gio, |meu |Es|cu|do |e |De|fen|sor;"+
            "Ao |co|ra|ção |dá |fir|me |con|fi|an|ça"+
            "Pa|ra |sem|pre |ser |fi|el |e |ven|ce|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "30": { 
        nome: "Confiarei sempre no Senhor",
        compasso: "6/8",
        velMin: 100,
        velMed: 116,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 69,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Con|fi|a|rei |sem|pre |no |Se|nhor, |no |Seu |su|bli|me |a|mor;"+
            "Nun|ca |se|rei |con|fun|di|do |na |a|fli|ção |ou |na |dor." ,

            "Cris|to |é |bom |e |cle|men|te, |bál|sa|mo |a |to|da |dor;"+
            "Paz |di|vi|nal |ex|ce|len|te |vem |do |Se|nhor." ,

            "Em |Je|sus |Cris|to |eu |te|nho |fé, |só |n'E|le |es|pe|ra|rei;"+
            "Mes|mo |es|tan|do |em |an|gús|tia, |n'E|le |eu |con|fi|a|rei" ,

            "Nas |mi|nhas |pro|vas, |con|fi|a|rei |em |Cris|to, |Li|ber|ta|dor;"+
            "N'E|le |eu |te|nho |fir|me|za, |pois |é |fi|el |Pro|te|tor."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "31": { 
        nome: "Forte Rocha",
        compasso: "2/2",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "For|te |Ro|cha |é |Deus |Sem|pi|ter|no;"+
            "Nos|sa |fé |só |n'E|le |se |fun|da;"+
            "Seu |a|mor |ce|les|ti|al |e |pa|ter|no,"+
            "Na |tri|bu|la|ção |nos |cir|cun|da."+
            "Do |as|tu|to |ten|ta|dor |nos |li|vra |o |Cri|a|dor |e |nos |pro|te|ge;"+
            "Na|da |nós |te|me|re|mos,"+
            "Pois |o |In|ven|cí|vel |nós |te|mos." ,

            "Es|ta|rá |pa|ra |sem|pre |per|di|do"+
            "Quem |em |si |so|men|te |con|fi|a,"+
            "Mas |se|rá |lá |do |céu |so|cor|ri|do,"+
            "Cre|do |em |Je|sus, |nos|so |Gui|a."+
            "O |Fi|lho |do |bom |Deus |é |De|fen|sor |dos |Seus, |é |Rei |da |gló|ria;"+
            "D'E|le |vir|tu|de |te|mos,"+
            "E |vi|tó|ria |al|can|ça|re|mos." ,

            "A |Pa|la|vra, |que |é |nos|sa |Vi|da,"+
            "De|ve |ser |por |nós |e|xal|ta|da;"+
            "É, |tam|bém, |nos|sa |fir|me |Gui|ri|da"+
            "Que |não |po|de |ser |a|ba|la|da."+
            "O |mal |vi|rá |ten|tar |a |fim |de |des|po|jar |os |res|ga|ta|dos,"+
            "Mas |te|re|mos |vi|tó|ria,"+
            "Pois |é |nos|so |o |rei|no |e |a |gló|ria." ,


        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "32": { 
        nome: "Eu me escondo em Ti Senhor",
        compasso: "2/4",
        velMin: 56,
        velMed: 64,
        velMax: 72,
        inicio: 1,
        velMinMeiaHora: 34,
        velMedMeiaHora: 35,
        velMaxMeiaHora: 37,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Eu |me |es|con|do em |Ti, |Se|nhor |e|ter|no, |"+
            "Em |Ti |me a|bri|go, |ó |meu |Sal|va|dor; |"+
            "Sin|to |em |mim |o |Teu |a|mor |su|per|no; |"+
            "Vi|vo |se|gu|ro; |és |meu |De|fen|sor. |" ,

            "Bus|co |de |Ti |a |pro|te|ção |ce|les|te |"+
            "Quan|do |es|tou |cer|ca|do |pe|lo |mal, |"+
            "Pois |Tu, |Je|sus, |és |meu |a|ma|do |Mes|tre; |"+
            "Cui|das |de |mim |com |ze|lo |di|vi|nal. |" ,

            "Quan|do |a|qui |es|tou |a|tri|bu|la|do, |"+
            "Quan|do |es|tá |sem |paz |meu |co|ra|ção, |"+
            "Cla|mo |a |Ti, |meu |Re|den|tor |a|ma|do; |"+
            "De |Ti |es|pe|ro |a |li|ber|ta|ção." ,

        ],
        temposVersos: [
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,

            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,

            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8
        ],
        notas: [
            'Eb4','D4','Eb4','F4','Eb4','Eb4','C5','Bb4','Ab4','Ab4','G4',
            'Bb4','G4','Ab4','Bb4','C5','Eb4','Eb4','G4','F4','Eb4',
            'Eb4','D4','Eb4','F4','Eb4','Ab4','C5','Eb5','Db5','C5','Bb4',
            'Eb5','Db5','C5','F4','Bb4','Ab4','G4','C5','Bb4','Ab4',

            'Eb4','D4','Eb4','F4','Eb4','Eb4','C5','Bb4','Ab4','Ab4','G4',
            'Bb4','G4','Ab4','Bb4','C5','Eb4','Eb4','G4','F4','Eb4',
            'Eb4','D4','Eb4','F4','Eb4','Ab4','C5','Eb5','Db5','C5','Bb4',
            'Eb5','Db5','C5','F4','Bb4','Ab4','G4','C5','Bb4','Ab4',

            'Eb4','D4','Eb4','F4','Eb4','Eb4','C5','Bb4','Ab4','Ab4','G4',
            'Bb4','G4','Ab4','Bb4','C5','Eb4','Eb4','G4','F4','Eb4',
            'Eb4','D4','Eb4','F4','Eb4','Ab4','C5','Eb5','Db5','C5','Bb4',
            'Eb5','Db5','C5','F4','Bb4','Ab4','G4','C5','Bb4','Ab4'
        ],
        temposNotas: [
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,

            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,

            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8,
            4,2,2,6,2,2,2,2,2,4,4,
            4,2,2,4,4,2,2,3,1,8

        ]
    },
    "33": { 
        nome: "Jesus é o nosso Guia",
        compasso: "6/8",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quem |po|de |con|so|lar|-nos |nes|te |pe|re|gri|nar?"+
            "Quem |po|de |con|du|zir|-nos |ao |nos|so |e|ter|no |lar?"+
            "Quem |po|de |dar|-nos |mais |for|ças? |Quem |po|de |nos |so|cor|rer?"+
            "A|que|le |que, |por |pi|e|da|de, |foi |na |cruz, |por |nós, |mor|rer;"+
            "Je|sus |que, |so|bre |tu|do, |re|ce|beu |de |Deus |po|der." ,

            "Je|sus |é |o |nos|so |Gui|a,"+
            "Per|fei|to |e |fi|el;"+
            "Es|pe|re|mos |noi|te |e |di|a"+
            "Só |em |Cris|to, |o |E|ma|nu|el." ,

            "Por |um |ca|mi|nho |pla|no |nos |gui|a|rá |Je|sus,"+
            "E|le |nos |i|lu|mi|na |com |Sua |e|ter|na |luz;"+
            "É |E|le |Quem |nos |en|vi|a |vir|tu|de, |gra|ça |e |po|der,"+
            "E, |nes|te |mun|do |de |tre|vas, |nos |fa|rá |res|plan|de|cer;"+
            "Fin|dan|do |a |jor|na|da, |Sua |fa|ce |i|re|mos |ver." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "34": { 
        nome: "O Mestre que desceu dos céus",
        compasso: "3/4",
        velMin: 54,
        velMed: 60,
        velMax: 66,
        inicio: 3,
        velMinMeiaHora: 34,
        velMedMeiaHora: 35,
        velMaxMeiaHora: 37,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Mes|tre |que |des|ceu |dos |céus, |"+ 
            "Je|sus, |o |Re|den|tor, |"+ 
            "Dei|xou |e|xem|plo aos |san|tos |Seus, |"+ 
            "E|xem|plo |de |a|mor", 
            
            "Cur|va|do, |lhes |la|vou |os |pés "+
            "E |as|sim |Se |hu|mi|lhou; |"+ 
            "Com |es|sa |o|bra |que E|le |fez, |"+ 
            "O a|mor |nos |en|si|nou. ", 
            
            "'A|mai|-vos', |dis|se o |Re|den|tor |"+ 
            "Que |te|ve |mor|te a|troz; |"+ 
            "Je|sus, |por |Seu |di|vi|no a|mor, |"+ 
            "Sal|vou |a |to|dos |nós. ", 
            
            "Bus|que|mos |o |su|bli|me a|mor |"+ 
            "Que |Deus |quer |con|ce|der; |"+ 
            "Por |nós, |Je|sus, |o |Sal|va|dor, |"+ 
            "I|rá |in|ter|ce|der. "             
        ],
        temposVersos: [
            4, 6, 2, 2, 2, 3, 1, 6, 2, 6, 2, 2, 2, 8,
            4, 6, 2, 2, 2, 3, 1, 6, 2, 6, 2, 2, 2, 8
         ],
        notas: [
            'G4', 'G4', 'G4', 'Ab4', 'G4', 'G4', 'F4', 'F4', 'F4', 'Bb4', 'F4', 'G4', 'Ab4', 'G4',
            'Bb4', 'Bb4', 'Bb4', 'Eb5', 'D5', 'D5', 'C5', 'C5', 'C5', 'Bb4', 'Eb4', 'G4', 'F4', 'Eb4'
        ],
        temposNotas: [
            4, 6, 2, 2, 2, 3, 1, 6, 2, 6, 2, 2, 2, 8,
            4, 6, 2, 2, 2, 3, 1, 6, 2, 6, 2, 2, 2, 8
        ]
    },
    "35": { 
        nome: "Eis que multidão mui grande",
        compasso: "6/8",
        velMin: 108,
        velMed: 114,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 63,
        velMedMeiaHora: 65,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eis |que |mul|ti|dão |mui |gran|de, |de |to|das |na|ções |e |tri|bos,"+
            "Foi |vis|ta |no |céus |e |da|va |lou|vor |pe|ran|te |o |Sal|va|dor."+
            "Tra|ja|vam |ves|ti|dos |bran|cos, |la|va|dos |por |Je|sus |Cris|to;"+
            "Nas |mãos |le|va|vam |pal|mas, |lou|van|do |ao |Cri|a|dor." ,

            "Di|zi|am, |pe|ran|te |o |tro|no |de |Deus |e |do |Seu |Cor|dei|ro,"+
            "Que |a |Deus, |o |Se|nhor, |fi|el |Cri|a|dor, |per|ten|ce |a |sal|va|ção."+
            "Pros|tra|dos, |com |re|ve|rên|cia, |ho|ra|vam |ao |Ver|da|dei|ro;"+
            "A|ções |de |gra|ças |da|vam, |em |san|ta |a|do|ra|ção." ,

            "Com |an|jos, |na |e|ter|na |gló|ria, |a|le|gres, |can|ta|vam |hi|nos;"+
            "Mos|tra|ram |va|lor |com |Cris|to, |o |Se|nhor, |na |gran|de |tri|bu|la|ção."+
            "Às |fon|tes |das |á|guas |vi|vas, |Je|sus |gui|a |os |seus |des|ti|nos;"+
            "Com |gran|de |re|go|zi|jo, |no |céu |res|plan|de|ce|rão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "36": { 
        nome: "A fiel proteção",
        compasso: "6/4",
        velMin: 84,
        velMed: 92,
        velMax: 100,
        inicio: 6,
        velMinMeiaHora: 52,
        velMedMeiaHora: 53,
        velMaxMeiaHora: 55,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |fi|el |pro|te|ção |do |Teu |man|to |de |a|mor"+
            "Se|gu|ran|ça |me |traz, |bom |Je|sus;"+
            "A|bri|ga|do |es|tou, |te|nho |for|ça |e |va|lor;"+
            "Tri|lha|rei |Tu|a |sen|da |de |luz." ,

            "O |Teu |man|to |de |a|mor |sin|to |es|tar |so|bre |mim;"+
            "Mi|nha |vi|da |te |en|tre|go, |Se|nhor;"+
            "Vi|ve|rei |pe|la |fé, |pro|te|gi|do |as|sim,"+
            "Na |pre|sen|ça |de |Deus, |Cri|a|dor." ,

            "Meu |des|ti|no |de |luz |ve|jo |ao |lon|ge, |Se|nhor,"+
            "E |ja|mais |o|lha|rei |pa|ra |trás;"+
            "Mi|nha |cren|ça |em |Ti |guar|da|rei, |Re|den|tor;"+
            "Teu |po|der, |vir|tu|o|so |me |faz." ,

            "Teu |in|ten|to, |Se|nhor, |vem |em |mim |re|ve|lar;"+
            "Pre|ci|o|sos |são |os |pla|nos |Teus;"+
            "De |va|lor |em |va|lor |que|ro |a|qui |ter|mi|nar"+
            "A |car|rei|ra |pro|pos|ta |por |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "37": { 
        nome: "Se a nossa vida entregarmos a Jesus",
        compasso: "4/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se |a |nos|sa |vi|da |en|tre|gar|mos |a |Je|sus,"+
            "Mal |ne|nhum |de|ve|mos |nós |te|mer;"+
            "Nun|ca |pe|re|ceu |quem |a |Je|sus |se |en|tre|gou"+
            "De |sin|ce|ro |co|ra|ção;"+
            "Ce|les|ti|al |a|mor |pro|vou"+
            "Quem |sen|tiu, |de |Deus, |per|dão;"+
            "Jun|tos |ca|mi|nhe|mos, |fir|mes |e |cons|tan|tes,"+
            "Ru|mo |à |ce|les|ti|al |Si|ão." ,

            "Se |a |nos|sa |vi|da |en|tre|gar|mos |a |Je|sus,"+
            "Tu|do |po|de|re|mos |su|por|tar;"+
            "N'E|le |con|fie|mos |e |es|pe|re|mos |pe|la |fé,"+
            "Pois |bem |per|to |E|le |es|tá;"+
            "Pe|lo |Seu |i|men|so |a|mor,"+
            "Ao |fi|el |a|ju|da|rá."+
            "Se, |nas |nos|sas |pro|vas, |nós |O |in|vo|car|mos,"+
            "A |vi|tó|ria |nos |da|rá." ,

            "Nos|sa |vi|da |já |per|ten|ce |ao |Se|nhor |Je|sus,"+
            "Pro|cla|me|mos |to|dos: |d'E|le |sou!"+
            "Ó |ir|mãos, |de|ve|mos |ca|mi|nhar |em |Seu |te|mor,"+
            "Pois |Seu |san|gue |nos |la|vou;"+
            "Gló|ria |ao |nos|so |Re|den|tor,"+
            "Que |do |mal |nos |li|ber|tou;"+
            "So|bre |a |cruz |foi |mor|to, |mas, |vol|tan|do |à |vi|da,"+
            "Do |se|pul|cro |tri|un|fou!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "38": { 
        nome: "Ó Senhor és minha vida",
        compasso: "4/4",
        velMin: 56,
        velMed: 64,
        velMax: 72,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ó |Se|nhor, |és |mi|nha |Vi|da, |"+ 
            "Com |pra|zer |Te |vou |lou|var; |"+
            "És |A|ju|da |mui |que|ri|da, |"+ 
            "Que |na |luz |me |faz |an|dar.", 
            
            "Só |a |Ti, |ó |Deus, |a|do|ro, |"+ 
            "E |lou|vo|res |Te |da|rei |"+
            "Com |os |san|tos, |num |só |co|ro, |"+ 
            "Pois |Tu |és |o ex|cel|so |Rei.",
            
            "Meu |Se|nhor, |a |Tu|a |gló|ria |"+ 
            "Faz |res|plan|de|cer |em |mim; |"+ 
            "So|bre o |mal |te|rei |vi|tó|ria, |"+ 
            "Por |ser|vir|-Te a|té |o |fim.", 
            
            "Fo|me e |se|de |de |jus|ti|ça |"+ 
            "Mi|nha |al|ma |tem, |Se|nhor; |"+ 
            "Vem |fa|lar|-lhe |das |de|lí|cias |"+ 
            "Do |Teu |rei|no |de es|plen|dor."             
        ],
        temposVersos: [
            4, 4, 6, 2, 4, 4, 4, 4, 4, 4, 6, 2, 4, 4, 8,
            4, 4, 6, 2, 4, 4, 4, 4, 4, 4, 6, 2, 4, 4, 8            
        ],
        notas: [
            'G4', 'C5', 'Bb4', 'F4', 'G4', 'Ab4', 'G4', 'G4',
            'Bb4', 'Eb5', 'D5', 'A4', 'Bb4', 'C5', 'Bb4',
            'Bb4', 'Db5', 'C5', 'G4', 'Bb4', 'Ab4', 'F4', 'F4',
            'Eb4', 'F4', 'Ab4', 'G4', 'F4', 'F4', 'Eb4'
        ],
        temposNotas: [
            4, 4, 6, 2, 4, 4, 4, 4, 4, 4, 6, 2, 4, 4, 8,
            4, 4, 6, 2, 4, 4, 4, 4, 4, 4, 6, 2, 4, 4, 8            
        ]
    },
    "39": { 
        nome: "Eu desejo Senhor",
        compasso: "4/4",
        velMin: 60,
        velMed: 66,
        velMax: 72,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Eu |de|se|jo, |Se|nhor, |só |em |Ti |des|can|sar"+
            "E |a|qui |ca|mi|nhar |em |a|mor;"+
            "Se |por |tri|bu|la|ção |eu |ti|ver |que |pas|sar,"+
            "Me |pro|te|ge, |ó |bom |Cri|a|dor." ,

            "Que|ro, |ó |Deus |, |con|sa|grar|-Te |meu |ser;"+
            "Mi|nha |al|ma |de|se|ja |em |Teu |rei|no |vi|ver." ,

            "Eu |de|se|jo, |Se|nhor, |com |fer|vor |sem|pre |es|tar"+
            "Aos |Teus |pés, |em |cons|tan|te |o|ra|ção;"+
            "Gua|rda |meu |co|ra|ção |pa|ra |nun|ca |pe|car;"+
            "Faz|-me |an|dar |sem|pre |na |re|ti|dão." ,

            "Eu |de|se|jo, |Se|nhor, |por |Ti |sem|pre |vi|ver"+
            "E |cin|gir |a |co|ro|a |nos |céus;"+
            "Se|ja |em |lu|tas |ou |paz, |que|ro |sem|pre |di|zer:"+
            "Meu |Des|can|so |és |Tu |ó |meu |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "40": { 
        nome: "Quanto em mim Tu operaste",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quan|to |em |mim |Tu |o|pe|ras|te"+
            "Pe|lo |Teu |i|men|so |a|mor!"+
            "Gra|ça |e |for|ça |en|vi|as|te,"+
            "À |mi|nh'al|ma, |ó |Se|nhor." ,

            "Vem, |Se|nhor |Je|sus, |com |vir|tu|de |e |fé,"+
            "E |com |gra|ça, |for|ti|fi|car"+
            "O |meu |co|ra|ção, |que |Teu |tem|plo |é;"+
            "Que|ro |sem|pre |Te |e|xal|tar." ,

            "O |Es|pí|ri|to |da |gra|ça,"+
            "Que |pro|vém |de |Ti, |Se|nhor,"+
            "Sem|pre |mais |fi|el |me |fa|ça,"+
            "Ò |Je|sus, |meu |Re|den|tor." ,

            "Da |e|ter|na |e |sã |ver|da|de"+
            "Faz|-me |sem|pre |se|gui|dor,"+
            "Que|ro |an|dar |em |san|ti|da|de,"+
            "I|mi|tan|do |a |Ti, |Se|nhor."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "41": { 
        nome: "O teu coração vem a Cristo entregar",
        compasso: "9/8",
        velMin: 120,
        velMed: 132,
        velMax: 144,
        inicio: 6,
        velMinMeiaHora: 72,
        velMedMeiaHora: 74,
        velMaxMeiaHora: 76,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quem |o |seu |co|ra|ção |a |Je|sus |en|tre|gar,"+
            "Par|ti|ci|pa|rá |das |pro|mes|sas |de |Deus;"+
            "Ve|raz |sal|va|ção |n'E|le |en|con|tra|rá"+
            "E |re|ce|be|rá |a |he|ran|ça |nos |céus." ,

            "A |vi|da |e|ter|nal |só |em |Cris|to |a|cha|rás;"+
            "Há |n'E|le |po|der |con|ce|di|do |por |Deus;"+
            "Os |Seus |ri|cas |dons |a|qui |re|ce|be|rás,"+
            "E |o |ga|lar|dão |lá |na |gló|ria |dos |céus." ,

            "A|cei|ta |o |per|dão |que |Je|sus |quer |te |dar,"+
            "Con|fes|sa |ao |Se|nhor |os |pe|ca|dos |que |tens;"+
            "O |teu |Re|den|tor |quer |do |mal |te |li|vrar"+
            "E |te |en|ri|que|cer |dos |e|ter|nos |Seus |bens." ,

            "O |teu |co|ra|ção |vem |a |Cris|to |en|tre|gar,"+
            "Re|jei|ta |o |mal |e, |do |mun|do, |a |i|lu|são;"+
            "A |paz |e |o |per|dão |só |Je|sus |po|de |dar,"+
            "E |a |vi|da |e|ter|nal |na |ce|les|te |Si|ão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "42": { 
        nome: "Ó minha alma por que te abates?",
        compasso: "12/8",
        velMin: 50,
        velMed: 55,
        velMax: 60,
        inicio: 9,
        velMinMeiaHora: 30,
        velMedMeiaHora: 31,
        velMaxMeiaHora: 32,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Ó |mi|nha |al|ma, |por |que |te |a|ba|tes?"+
            "Em |Deus |es|pe|ra |nos |teus |com|ba|tes;"+
            "Se |en|tre |ma|les |tu |te |de|ba|tes,"+
            "Em |Deus |con|fi|a, |E|le |é |fi|el." ,

            "Por |que, |mi|nh'al|ma, |es|tás |a|fli|ta?"+
            "Deus |te |con|so|la, |te |e|di|fi|ca;"+
            "Só |E|le |guar|da |e |san|ti|fi|ca;"+
            "Sê |fir|me |n'E|le, |que |é |fi|el." ,

            "Vi|gor |e |gra|ça |só |Deus |con|ce|de,"+
            "Com |fé |su|pli|ca, |a |E|le |pe|de;"+
            "Je|sus, |o |jus|to, |por |ti |in|ter|ce|de;"+
            "Sê, |mi|nha |al|ma, |a |Deus, |fi|el." ,

            "Deus |é |o |sus|ten|to |da |mi|nha |vi|da,"+
            "Da|rá |con|for|to |em |to|da |li|da;"+
            "Ao |Seu |des|can|so |Deus |te |con|vi|da;"+
            "Ò |mi|nha |al|ma, |con|fi|a |em |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "43": { 
        nome: "Trema o céu a terra o mar",
        compasso: "3/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eis |que |os |mon|tes |se |a|ba|la|ram"+
            "An|te |Deus, |o |Cri|a|dor;"+
            "Ri|o |e |mar |tam|bém |pa|ra|ram"+
            "Pe|la |or|dem |do |Se|nhor." ,

            "Tre|ma |o |céu, |a |ter|ra, |o |mar,"+
            "Na |pre|sen|ça |do |Se|nhor,"+
            "E, |do |mun|do, |os |mo|ra|do|res,"+
            "Deem|-lhe |gló|ria |e |lou|vor." ,

            "O |Se|nhor |fez, |do |ro|che|do,"+
            "Fon|te |de |á|guas |pa|ra |os |Seus;"+
            "Quan|do |a |fo|me |trou|xe |o |me|do,"+
            "Pão |man|dou|-lhes |des|de |os |céus." ,

            "Na|da |im|pe|de |o |Oni|po|ten|te"+
            "De |o|pe|rar |a |Seu |pra|zer;"+
            "E|le |é |o |Deus |vi|ven|te,"+
            "Sem|pi|ter|no |é |Seu |po|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "44": { 
        nome: "Sol da justiça",
        compasso: "9/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 7,
        velMinMeiaHora: 74,
        velMedMeiaHora: 76,
        velMaxMeiaHora: 78,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Do |Pai |das |lu|zes, |o |Deus |vi|ven|te,"+
            "Ve|io |com |gló|ria |Cris|to |Je|sus;"+
            "O |san|to |Fi|lho |do |O|ni|po|ten|te"+
            "É, |pa|ra |o |mun|do, |Vi|da |e |Luz." ,

            "Sol |da |jus|ti|ça, |Sol |da |jus|ti|ça,"+
            "Te|mos |a|go|ra |Teu |es|plen|dor;"+
            "Gra|ça |trou|xes|te |do |Pai |E|ter|no,"+
            "Mi|se|ri|cór|di|a |ao |pe|ca|dor." ,

            "O |po|vo |san|to, |i|lu|mi|na|do,"+
            "É |di|ri|gi|do |por |es|sa |Luz,"+
            "Pois, |do |Seu |tro|no, |o |Rei |a|ma|do"+
            "Vi|gi|a |sem|pre |e |o |con|duz." ,

            "Do |mal, |a |for|ça |se |en|fra|que|ce,"+
            "É |dis|si|pa|do |o |seu |po|der,"+
            "Pois |é |só |Cris|to |Quem |pre|va|le|ce;"+
            "Seu |rei|no |a|van|ça |pa|ra |ven|cer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "45": { 
        nome: "Oh! Quanto nos amaste!",
        compasso: "9/4",
        velMin: 96,
        velMed: 108,
        velMax: 120,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Man|da|-nos, |ó |Se|nhor,"+
            "Bên|ções |lá |dos |céus,"+
            "Que |con|for|to |nos |dão,"+
            "Ò |e|ter|no |Deus,"+
            "Pa|ra |Teus |fei|tos |a|nun|ci|ar"+
            "E |o |Teu |san|to |No|me |lou|var." ,

            "Oh! |Quan|to |nos |a|mas|tes,"+
            "bon|do|so |Cri|a|dor!"+
            "Dá|-nos |mais |do |Teu |san|to"+
            "E |pu|ro |a|mor." ,

            "Man|da |Tu|a |Pa|la|vra, |ó |For|ma|dor,"+
            "Pe|lo |Es|pí|ri|to |San|to |Con|so|la|dor;"+
            "De|se|ja|mos |me|lhor |com|pre|en|der"+
            "Teu |di|vi|no |e |san|to |que|rer." ,

            "Con|ti|nua, |Se|nhor, |a |nos |en|si|nar;"+
            "Nos|sas |men|tes |Tu |po|des |i|lu|mi|nar"+
            "Pa|ra |que |nós |pos|sa|mos |ven|cer"+
            "E, |ao |fim, |ga|lar|dão |re|ce|ber." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "46": { 
        nome: "Grandioso é o nosso Deus",
        compasso: "6/8",
        velMin: 92,
        velMed: 109,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |For|ta|le|za |de |to|do |o |cren|te"+
            "É |Deus |que |tu|do |cri|ou;"+
            "É, |na |an|gús|tia, |So|cor|ro |pre|sen|te,"+
            "É |Quem |do |pó |nos |for|mou." ,

            "Gran|di|o|so |é |o |nos|so |Deus,"+
            "O |Deus |que |son|da |os |co|ra|ções;"+
            "So|bre |a |ter|ra |é |E|le |e|xal|ta|do"+
            "En|tre |as |su|as |na|ções." ,

            "Mes|mo |mu|dan|do|-se |os |mon|tes |e |a |ter|ra,"+
            "Não |sen|ti|re|mos |te|mor;"+
            "Tu|do |de|bai|xo |das |mãos |Deus |en|cer|ra,"+
            "Pois |é |de |tu|do |o |Se|nhor." ,

            "Gran|de |é |o |Deus |que |nos |tem |a|gre|ga|do,"+
            "Sem|pre |co|nos|co |es|tá;"+
            "'Deus |dos |E|xér|ci|tos' |E|le |é |cha|ma|do,"+
            "E|le |é |Quem |vi|da |nos |dá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "47": { 
        nome: "Sublime é o perdão!",
        compasso: "6/8",
        velMin: 120,
        velMed: 136,
        velMax: 152,
        inicio: 6,
        velMinMeiaHora: 76,
        velMedMeiaHora: 78,
        velMaxMeiaHora: 80,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|ten|ta |ve|zes |se|te |ao |teu |ir|mão |per|do|a", 
            "as|sim |fa|lou |o |Mes|tre |ao |ser |in|ter|ro|ga|do;"+
            "Se |tu |o |per|do|a|res, |se|rás |a|ben|ço|a|do"+
            "E |bem-|a|ven|tu|ra|do. |Su|bli|me |é |o |per|dão!" ,

            "Me|di|ta, |ir|mão |a|ma|do, |no |gran|de |a|mor |de |Cris|to"+
            "E |bus|ca |a |ex|ce|len|te, |e|ter|na |Ca|ri|da|de;"+
            "Ca|mi|nha |na |jus|ti|ça, |na |paz, |na |san|ti|da|de,"+
            "Em |to|da |hu|mi|da|de. |Su|bli|me |é |o |per|dão!" ,

            "Se |teu |ir|mão |a|ma|res |de |um |co|ra|ção |sin|ce|ro,"+
            "Te|rás |a |vi|da |e|ter|na |na |ce|les|ti|al |ci|da|de;"+
            "Em|bo|ra |o|fen|di|do, |Su|por|ta |com |pi|e|da|de,"+
            "Con|ser|va |a |san|ti|da|de. |Su|bli|me |é |o |per|dão!" ,

            "Per|do|a |teu |ir|mão |de |to|do |o |co|ra|ção,"+
            "As|sim |te|rás |cum|pri|do |o |san|to |man|da|men|to;"+
            "Tam|bém |te|rás |per|dão |e |paz |no |co|ra|ção;"+
            "Por |Deus |se|rás |ben|quis|to. |Su|bli|me |é |o |per|dão!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "48": { 
        nome: "Creio no Senhor",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Quão |glo|ri|o|sa |sin|to |em |mim"+
            "A |voz |do |Cri|a|dor!"+
            "Re|fri|gé|rio |e|la |traz,"+
            "É |um |bál|sa|mo |de |a|mor." ,

            "Cre|io |no |Se|nhor,"+
            "Sá|bio |Cri|a|dor;"+
            "Sin|to |em |mim |o |Seu |po|der"+
            "Que |me |fa|rá |ven|cer." ,

            "A |Pa|la|vra |do |Se|nhor,"+
            "De|se|jo |sem|pre |ou|vir;"+
            "Se|gu|ran|ça |E|la |traz"+
            "E |es|pe|ran|ça |do |por|vir." ,

            "Eu |al|me|jo |sem|pre |es|tar"+
            "U|ni|do |ao |gran|de |Deus;"+
            "Em |jus|ti|ça |e |re|ti|dão,"+
            "Vou |se|guin|do |pa|ra |os |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "49": { 
        nome: "Venho adorar-Te, santo Criador",
        compasso: "6/4",
        velMin: 108,
        velMed: 120,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 72,
        velMedMeiaHora: 74,
        velMaxMeiaHora: 76,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ó |Deus |e |Pai, |Se|nhor |de |e|ter|ni|da|de,"+
            "Ven|ho |a|do|rar|-Te, |san|to |Cri|a|dor;"+
            "Com |fé |e |te|mor |da |Tu|a |ma|jes|ta|de,"+
            "Pa|ra |os |céus |e|le|vo |meu |cla|mor." ,

            "Ro|go, |Se|nhor, |por |mé|ri|to |de |Cris|to,"+
            "Dá |ao |Teu |ser|vo |gra|ça |e |sa|ber;"+
            "Aos |o|lhos |Teus |de|se|jo |ser |ben|quis|to;"+
            "Nes|ta |o|ra|ção |trans|for|ma |o |meu |ser." ,

            "Vem |vi|si|tar |mi|nh'al|ma, |ó |Deus |ben|di|to,"+
            "Das |mi|nhas |pro|vas |me |es|que|ce|rei;"+
            "Eis|-me |aos |Teus |pés, |an|si|o|so |e |con|tri|to;"+
            "Ar|den|te|men|te |Te |e|xal|ta|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "50": { 
        nome: "Glória a Jesus Aleluia",
        compasso: "6/8",
        velMin: 108,
        velMed: 126,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gló|ria |a |Je|sus! |A|le|lu|ia! |Gló|ria |ao |gran|de |Rei!"+
            "Gló|ria |por |to|do |o |sem|pre |a |Cris|to |eu |da|rei;"+
            "E|le |me |tem |con|du|zi|do, |com |fé |e |com |a|mor,"+
            "Nes|te |ca|mi|nho |de |vi|da; |gló|ria |ao |bom |Pas|tor!" ,

            "Gló|ria |a |Je|sus! |A|le|lu|ia! |Eu |sem|pre |can|ta|rei,"+
            "Gló|ria |a |Je|sus! |A|le|lu|ia! |N'E|le |pros|pe|ra|rei;"+
            "Re|ce|be|rei |sem|pre |for|ças |do |meu |bom |Sal|va|dor"+
            "Pa|ra |em |to|do |o |mo|men|to, |Lhe |tri|bu|tar |lou|vor." ,

            "Gló|ria |a |Je|sus! |A|le|lu|ia! |Por |mi|nha |Sal|va|ção,"+
            "Gló|ria |e |hon|ra |Lhe |de|vo, |e |mi|nha |gra|ti|dão;"+
            "Me|re|ce|dor |é |meu |Mes|tre |de |re|ce|ber |lou|vor,"+
            "Pois |me |da|rá |a |vi|tó|ria, |por |Seu |i|men|so |a|mor." ,

            "Gló|ria, |gló|ria |a |Je|sus, |o |meu |Pas|tor |fi|el!"+
            "Gló|ria |ao |Sal|va|dor, |Cris|to, |E|ma|nu|el;"+
            "Gló|ria |não |ces|sa|rei |de |dar |ao |Re|den|tor;"+
            "Mi|nha |al|ma |en|gran|de|ce"+
            "Ao |meu |e|ter|nal |Se|nhor!"

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "51": { 
        nome: "A Palavra do Senhor é Pão celestial",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |Pa|la|vra |do |Se|nhor, |pa|ra |mim,"+
            "É |um |te|sou|ro |de |va|lor |sem |i|gual;"+
            "Fa|la |do |a|mor |de |Deus,"+
            "O |a|mor |que |não |tem |fim,"+
            "O |a|mor |que |li|vra |do |po|der |do |mal." ,

            "A |Pa|la|vra |do |Se|nhor, |Pão |ce|les|ti|al,"+
            "Faz|-nos |ca|mi|nhar |na |luz, |li|vra|-nos |do |mal;"+
            "Deus |nos |en|vi|ou |dos |céus, |Cris|to, |o |E|ma|nu|el,"+
            "Ro|cha |vi|va |de |on|de |ma|na |lei|te |e |mel." ,

            "Luz |que |gui|a |nas |ve|re|das |dos |céus"+
            "E |i|lu|mi|na |quem |em |tre|vas |es|tá;"+
            "É |a |luz |que |nos |faz |ver"+
            "As |ri|que|zas |do |bom |Deus"+
            "E |en|ten|di|men|to |di|vi|nal |nos |dá." ,

            "É |um |fa|rol |de |ce|les|ti|al |es|plen|dor,"+
            "Que |nos |gui|a |a |ci|da|de |e|ter|nal;"+
            "Quem |com |Cris|to |ca|mi|nhar,"+
            "Quem |ser|vir |ao |Cri|a|dor,"+
            "Cer|to |che|ga|rá |à |pá|tria |di|vi|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "52": { 
        nome: "Luz eternal é Jesus",
        compasso: "6/8",
        velMin: 108,
        velMed: 126,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 72,
        velMedMeiaHora: 74,
        velMaxMeiaHora: 76,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Luz |e|ter|nal |que |vem |de |Deus"+
            "É |Je|sus , |o |Re|den|tor;"+
            "É |E|le |a |Vi|da |que, |dos |céus,"+
            "Ve|io |por |gra|ça |do |Cri|a|dor;"+
            "Gló|ria |ao |Pai, |por |Seu |gran|de |a|mor." ,

            "Vós |sois |luz |do |mun|do, |"+
            "Dis|se |o |gran|de |Mes|tre."+
            "Com |a |luz |ce|les|te |po|de|mos,"+
            "A |Deus, |a|gra|dar." ,

            "Deus |fez, |em |nós, |sur|gir |a |luz,"+
            "Nos|sa |men|te |es|cla|re|ceu;"+
            "Su|a |Pa|la|vra |em |nós |pro|duz"+
            "En|ten|di|men|to |que |vem |dos |céus,"+
            "Que |nos |re|ve|la |os |pla|nos |Seus." ,

            "Nós |ca|mi|nha|mos |nes|sa |luz"+
            "Pa|ra |ter|mos |co|mu|nhão"+
            "Com |Deus, |o |Pai, |e |o |bom |Je|sus,"+
            "E |al|can|çar|mos |a |sal|va|ção,"+
            "Vi|da |e|ter|na |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "53": { 
        nome: "Nós somos luz do mundo",
        compasso: "4/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 48,
        velMedMeiaHora: 50,
        velMaxMeiaHora: 52,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nós |so|mos |luz |des|te |mun|do,"+
            "Nos |fa|lou |o |Sal|va|dor,"+
            "E |so|mos |sal |des|ta |ter|ra,"+
            "Por |Deus, |Cri|a|dor;"+
            "An|te |os |ho|mens,"+
            "De|ve|mos |sem|pre |bri|lhar"+
            "E |as |bo|as, |o|bras,"+
            "Ao |mun|do, |po|de|re|mos |mos|trar." ,

            "Cris|to, |o |Mes|tre |di|vi|no,"+
            "Nos |dá |sem|pre |o |Seu |sa|ber,"+
            "En|ten|di|men|to, |vir|tu|de, |fé,"+
            "Tam|bém |po|der;"+
            "Pe|lo |Es|pí|ri|to |San|to |nos |gui|a|rá;"+
            "As|sim |o |Seu |po|vo, |na |ter|ra,"+
            "Sem|pre |mais |bri|lha|rá." ,

            "Deus |re|ve|lou |aos |pe|que|nos"+
            "Os |se|gre|dos |lá |do |céu;"+
            "A |luz |di|vi|na, |por |Cris|to,"+
            "Já |lhes |con|ce|deu;"+
            "São |sá|bios |pa|ra |ser|vir"+
            "A |Deus, |Cri|a|dor,"+
            "São |luz |pa|ra |o |mun|do"+
            "De |tre|vas |e |têm |gran|de |es|plen|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "54": { 
        nome: "Um tesouro glorioso achei",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Um |te|sou|ro |glo|ri|o|so |a|chei |em |Je|sus,"+
            "Um |te|sou|ro |de |i|men|so |va|lor;"+
            "Não |é |pra|ta |nem |ou|ro"+
            "Que |ao |ho|mem |se|duz,"+
            "É |a |vi|da |de |Deus, |Cri|a|dor." ,

            "Um |te|sou|ro |glo|ri|o|so |a|chei"+
            "Em |Je|sus, |o |di|vi|no |Re|den|tor;"+
            "Na|da |mais |pre|ci|o|so |en|con|tra|rei;"+
            "Gran|de |gra|ça |me |fez |o |Sal|va|dor." ,

            "Os |te|sou|ros |da|qui |po|de |a |tra|ça |ro|er,"+
            "A |fer|ru|gem, |tam|bém, |con|su|mir;"+
            "Mas |a|que|les |do |céu, |que |i|rei |re|ce|ber,"+
            "Na|da |po|de |ja|mais |des|tru|ir." ,

            "Que |a|le|gri|a |eu |sin|to |por |ter |sal|va|ção,"+
            "Pe|la |san|ta |pre|sen|ça |de |Deus!"+
            "Sin|to |a |Vi|da |to|mar |to|do |o |meu |co|ra|ção;"+
            "Cris|to |é |a |vi|da |que |le|va |aos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "55": { 
        nome: "Paz seja em vós",
        compasso: "6/8",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 73,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Foi |gran|de |a |tem|pes|ta|de |que, |no |mar, |se |le|van|tou,"+
            "On|das |co|bri|am |o |bar|co |e |a |to|dos |te|mor |cau|sou;"+
            "O |Mes|tre |es|ta|va |dor|min|do, |foi |des|per|ta|do, |en|tão,"+
            "Pe|los |que |a |E|le |pe|di|am |so|cor|ro |e |sal|va|ção." ,

            "Ao |Seu |man|dar |san|to |e |di|vi|nal,"+
            "Paz |se|ja |em |vós;"+
            "Ven|tos |e |ma|res |se |a|qui|e|ta|rão,"+
            "Paz |se|ja |em |vós;"+
            "Con|vos|co |es|tá |o |Se|nhor |do |mar,"+
            "Por|tan|to, |com |fé, |vós |de|veis |re|mar,"+
            "Pois |E|le |es|tá |pron|to |a |vos |sal|var,"+
            "Ten|de |paz, |ten|de |paz;"+
            "As |on|das |ces|sam |de |en|ca|pe|lar,"+
            "Paz |se|ja |em |vós." ,

            "Re|pre|en|den|do |o |ven|to, |Je|sus |a|qui|e|tou |o |mar,"+
            "E |hou|ve |gran|de |bo|nan|ça |di|an|te |do |Seu |man|dar."+
            "Nas |pro|vas |e |nas |tor|men|tas, |n'E|le |de|veis |ter |fé;"+
            "Per|to |es|tá |vos|so |Mes|tre, |que |do|no |de |tu|do |é." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "56": { 
        nome: "Põe em Deus a confiança",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Põe |em |Deus |a |con|fi|an|ça, |se|gue |sem|pre |a |Je|sus;"+
            "E|le |é |a |Es|pe|ran|ça |que |à |gló|ria |te |con|duz;"+
            "Não |va|ci|les, |mas |con|fi|a, |pois |e|ter|no |é |Seu |po|der;"+
            "Nós |pe|ri|gos |E|le |en|vi|a |os |Seus |an|jos |te |sus|ter." ,

            "Mes|mo |que |os |a|nos |pas|sem, |Seu |a|mor |não |pas|sa|rá;"+
            "Céus |e |ter|ra |tam|bém |pas|sam, |mas |o |Ver|bo |fir|me |es|tá."+
            "Vin|do |as |tre|vas |so|bre |o |mun|do |e, |do |sol, |ces|san|do |a |luz,"+
            "Cris|to, |por |a|mor |pro|fun|do, |ao |Seu |rei|no |te |con|duz." ,

            "Fir|me |na |fi|el |pro|mes|sa, |ao |mal |po|des |re|sis|tir;"+
            "Não |há |na|da |que |im|pe|ça |tu|a |gló|ria |no |por|vir;"+
            "Eis |que |per|to |es|tá |o |di|a |em |que |tu|do |ces|sa|rá,"+
            "Mas |a |tu|a |a|le|gri|a |pa|ra |sem|pre |du|ra|rá." ,

            "Põe |em |Deus |a |con|fi|an|ça, |sê |fi|el |ao |Re|den|tor;"+
            "Se|gue |a|van|te, |se|gue |pa|ra |os |céus;"+
            "Põe |em |Deus |a |es|pe|ran|ça, |sê |fi|el |ao |Cri|a|dor;"+
            "Gló|ria! |Gló|ria |ao |gran|de |Deus!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "57": { 
        nome: "É estreita a porta para a salvação",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "É |es|trei|ta |a |por|ta |pa|ra |a |sal|va|ção,"+
            "Dis|se |o |nos|so |Re|den|tor;"+
            "O |ca|mi|nho |lar|go |le|va |à |per|di|ção,"+
            "En|si|nou |o |Sal|va|dor." ,

            "Por|fie|mos |por |an|dar"+
            "Nós |ca|mi|nhos |do |Se|nhor"+
            "E |al|can|ça|re|mos |vi|da |e|ter|nal"+
            "Com |Deus |Pai, |o |Cri|a|dor." ,

            "Ó |ir|mãos |que|ri|dos, |Cris|to,"+
            "O |Sal|va|dor, |To|do |Po|de|ro|so |é;"+
            "Tão |so|men|te |nós |de|ve|mos |nos |dis|por"+
            "A |se|gui|-Lo |pe|la |fé." ,

            "Aos |de|se|jos |nos|sos |va|mos |re|nun|ci|ar,"+
            "A|gra|de|mos |ao |Se|nhor;"+
            "To|da |nos|sa |vi|da |va|mos |con|sa|grar"+
            "Ao |di|vi|no |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "58": { 
        nome: "Sou crente em Jesus",
        compasso: "4/4",
        velMin: 69,
        velMed: 80,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |me |gui|a |com |a|mor,"+
            "Na |fé, |na |paz |e |no |Seu |te|mor;"+
            "Meu |ser, |de|se|jo |con|sa|grar"+
            "A |Je|sus, |que |ve|io |pa|ra |me |sal|var." ,

            "Sou |cren|te |em |Je|sus, |meu |Se|nhor,"+
            "A |E|le |sem|pre |o|be|de|ce|rei;"+
            "Te|rei |em |mim |Seu |san|to |a|mor"+
            "E, |ao |fim, |rei|nar |com |E|le |po|de|rei." ,

            "Só |a |Je|sus |me |a|pe|ga|rei"+
            "E |mal |ne|nhum |eu |re|ce|a|rei;"+
            "Con|fi|o |sem|pre |em |Seu |po|der,"+
            "Na|da |po|de|rá |ja|mais |me |a|ba|ter." ,

            "Ao |fim |do |meu |pe|re|gri|nar,"+
            "I|rei |com |Cris|to |Je|sus |rei|nar;"+
            "Se|rei |di|to|so, |mui |fe|liz,"+
            "No |glo|ri|o|so, |san|to, |ce|les|ti|al |pa|ís." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "59": { 
        nome: "Faz-me mais perseverante",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Se|nhor |me |con|duz |a|van|te"+
            "Nes|ta |sen|da |de |a|mor,"+
            "Ao |des|ti|no, |mui |bri|lhan|te,"+
            "De |ri|que|za |e |es|plen|dor." ,

            "Faz|-me |mais |per|se|ve|ran|te"+
            "Nes|ta |gra|ça, |ó |Se|nhor;"+
            "Eu |a|guar|do, |con|fi|an|te,"+
            "Teus |te|sou|ros |de |a|mor." ,

            "Pe|lo |Es|pí|ri|to |di|vi|no,"+
            "Teu |a|mor |a|cres|ce |em |mim;"+
            "Só |por |Teu |glo|ri|o|so |en|si|no,"+
            "Che|ga|rei |a|té |o |fim." ,

            "A|mo |Tu|a |sã |ver|da|de,"+
            "Tu|a |lei |e |Teu |que|rer;"+
            "A|mo |Tu|a |san|ti|da|de"+
            "Que |me |faz |res|plan|de|cer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "60": { 
        nome: "Oh! Vem a Jesus",
        compasso: "6/8",
        velMin: 116,
        velMed: 124,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Re|jei|ta |o |mal |des|te |mun|do"+
            "E |vem |a |Je|sus |te |en|tre|gar;"+
            "Seu |san|to |a|mor |é |pro|fun|do;"+
            "Je|sus |quer |te |a|ben|ço|ar." ,

            "Oh! |vem |a |Je|sus,"+
            "Que |por |nós |mor|reu |so|bre |a |cruz;"+
            "Seu |san|gue |pre|ci|o|so |E|le |der|ra|mou,"+
            "E |com |Deus |nos |re|con|ci|li|ou." ,

            "Re|jei|ta |do |mun|do |a |vai|da|de,"+
            "Pois |e|la |te |quer |se|du|zir;"+
            "Da |gra|ça |e |da |san|ti|da|de,"+
            "Je|sus |po|de |te |re|ves|tir." ,

            "Pro|pó|si|to |fir|me |e |cons|tan|te"+
            "Es|te|ja |em |teu |co|ra|ção;"+
            "Je|sus |não |te |quer |va|ci|lan|te;"+
            "Há |n'E|le |re|al |sal|va|ção."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "61": { 
        nome: "A minha alma deseja ver-Te",
        compasso: "9/8",
        velMin: 132,
        velMed: 138,
        velMax: 144,
        inicio: 7,
        velMinMeiaHora: 76,
        velMedMeiaHora: 79,
        velMaxMeiaHora: 82,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "A |mi|nha |al|ma |quer |con|tem|plar|-Te,"+
            "Ó |meu |fi|el |e |a|ma|do |Je|sus;"+
            "Que|ro |ser|vir|-Te, |que|ro |se|guir|-Te"+
            "E |ca|mi|nhar |Con|ti|go |na |luz." ,

            "És |Tor|re |for|te |à |mi|nha |al|ma,"+
            "És |Pro|te|ção |em |tem|pos |de |dor;"+
            "Tu |me |a|le|gras, |Tu |me |pres|er|vas"+
            "De |to|do |o |mal, |ó |meu |Re|den|tor." ,

            "Vi|vo |a|guar|dan|do |a |Tu|a |vol|ta"+
            "Pa|ra |su|bir |Con|ti|go |a |Deus;"+
            "A |to|do |ins|tan|te |vi|vo |a|ne|lan|te"+
            "Por |con|tem|plar |a |gló|ria |dos |céus." ,

            "A |mi|nha |al|ma |de|se|ja |ver|-Te,"+
            "Sin|to |por |Ti |i|men|so |a|mor;"+
            "Eu |Te |a|do|ro, |eu |Te |im|plo|ro;"+
            "Faz|-me |vi|ver |Con|ti|go, |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "62": { 
        nome: "Ó Criador forte Rocha és",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ó |Cri|a|dor, |for|te |Ro|cha |és, |"+
            "I|men|so é |o |Teu |po|der; |"+
            "Eu |me |a|bri|go em |Ti, |Se|nhor, |"+
            "A|fim |de |nun|ca |pe|re|cer. |" ,

            "Ó |Cri|a|dor, |Teu |fi|el |fa|vor |"+
            "Me |faz |ju|bi|lar de |a|mor; |"+
            "Com |to|da a |al|ma, im|plo|ro a |Ti: |"+
            "Oh! |Vem |me |de|fen|der, |Se|nhor. |" ,

            "Ó |Cri|a|dor, |vem |me |pres|er|var |"+
            "Do |mal |e |da |ten|ta|ção; |"+
            "Mui |fra|co |sou, |re|cor|ro a |Ti; |"+
            "A|ten|de |mi|nha |o|ra|ção. |" ,

            "Ó |Cri|a|dor, |po|de|ro|so |Deus, |"+
            "Es|pe|ro |em |Teu |a|mor; |"+
            "O|pe|ra |sem|pre a |meu |fa|vor; |"+
            "Lou|vo|res |Te |da|rei, |Se|nhor." ,

        ],
        temposVersos: [
            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,

            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,

            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,

            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,
        ],
        notas: [
            'Eb4','Ab4','F4','Eb4','Ab4','Bb4','C5','Bb4','Ab4',
            'C5','Eb5','C5','Bb4','Ab4','C5','Bb4',
            'Eb5','C5','Bb4','Ab4','C5','Db5','C5','Bb4',
            'C5','Eb4','F4','Ab4','Bb4','C5','Bb4','Ab4',

            'Eb4','Ab4','F4','Eb4','Ab4','Bb4','C5','Bb4','Ab4',
            'C5','Eb5','C5','Bb4','Ab4','C5','Bb4',
            'Eb5','C5','Bb4','Ab4','C5','Db5','C5','Bb4',
            'C5','Eb4','F4','Ab4','Bb4','C5','Bb4','Ab4',

            'Eb4','Ab4','F4','Eb4','Ab4','Bb4','C5','Bb4','Ab4',
            'C5','Eb5','C5','Bb4','Ab4','C5','Bb4',
            'Eb5','C5','Bb4','Ab4','C5','Db5','C5','Bb4',
            'C5','Eb4','F4','Ab4','Bb4','C5','Bb4','Ab4',

            'Eb4','Ab4','F4','Eb4','Ab4','Bb4','C5','Bb4','Ab4',
            'C5','Eb5','C5','Bb4','Ab4','C5','Bb4',
            'Eb5','C5','Bb4','Ab4','C5','Db5','C5','Bb4',
            'C5','Eb4','F4','Ab4','Bb4','C5','Bb4','Ab4'
        ],
        temposNotas: [
            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,

            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,

            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,

            4,8,4,8,2,2,8,4,8,
            4,8,2,2,8,4,8,
            4,8,4,8,4,8,4,8,
            4,4,4,2,2,8,4,8,
        ]
    },
    "63": { 
        nome: "Se vós baterdes Ele vos abre",
        compasso: "9/8",
        velMin: 46,
        velMed: 51,
        velMax: 56,
        inicio: 7,
        velMinMeiaHora: 30,
        velMedMeiaHora: 31,
        velMaxMeiaHora: 32,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Com |fé |che|gai|-vos |ao |gran|de |Mes|tre,"+
            "Cris|to, |Je|sus, |o |Se|nhor;"+
            "Seus |dons |ce|les|tes,"+
            "Su|a |vir|tu|de |der|ra|ma|rá |por |a|mor;"+
            "Não |du|vi|deis, |pois |de |Cris|to"+
            "Vem |o |que |vós |pre|ci|sais;"+
            "Tu|do |E|le |po|de |fa|zer|-vos,"+
            "A|lém |do |que |vós |pen|sais." ,

            "O |mar |re|vol|to |e |a |tem|pes|ta|de"+
            "Cris|to |Je|sus |a|pla|cou;"+
            "Os |ce|gos |vi|ram, |co|xos |an|da|ram,"+
            "A |mui|tos |pu|ri|fi|cou;"+
            "Mor|tos |vol|ta|ram |à |vi|da,"+
            "Fo|ram |en|tre|gues |aos |seus."+
            "Cris|to, |é |o |Ver|bo |e|ter|no"+
            "Ve|io |por |gra|ça |de |Deus." ,

            "Se |vós |ba|ter|des, |E|le |vos |a|bre;"+
            "O |que |pe|dir|des, |da|rá."+
            "Se |vós |bus|car|des |o |Mes|tre,"+
            "Por |vós |a|cha|do |se|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "64": { 
        nome: "Tu que vives sem destino",
        compasso: "3/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 48,
        velMedMeiaHora: 50,
        velMaxMeiaHora: 52,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tu, |que |vi|ves |sem |des|ti|no |"+ 
            "Nes|te |mun|do |de |per|di|ção, |"+
            "Vem |a |Cris|to, |"+
            "Que |te |con|ce|de |Sal|va|ção, |"+ 
            "Ver|da|dei|ro |per|dão.",
            
            "Tu, |que es|tás |sem |es|pe|ran|ça |"+ 
            "Nes|te |mun|do |cru|el |de |dor, |"+ 
            "Vem |a |Cris|to |e |não |va|ci|les, |"+ 
            "Pois |te |cha|ma |com |gran|de |a|mor.", 
            
            "Dei|xa |Cris|to |con|du|zir|-te, |"+
            "Se|gue a |E|le |com |de|vo|ção; |"+
            "É |só |E|le o |re|al |Ca|mi|nho, |"+
            "É |o Au|tor |da e|ter|nal |re|den|ção.", 
            
            "Pe|ca|do|res |fo|mos |to|dos, |"+ 
            "Mas |Je|sus |ve|io |nos |sal|var |"+ 
            "Pa|ra, um |di|a |na |Su|a |gló|ria, |"+ 
            "A |co|ro|a |da |vi|da |nos |dar."
        ],
        temposVersos: [
            8, 4, 8, 4, 8, 4, 8, 4,
            8, 4, 4, 4, 4, 8, 4, 12,
            8, 4, 6, 2, 4, 8, 4, 8, 4,
            8, 4, 4, 4, 4, 8, 2, 2, 12
        ],
        notas: [
            'F4', 'F4', 'E4', 'C4', 'Bb4', 'Bb4', 'A4', 'F4',
            'C5', 'A4', 'C5', 'Bb4', 'G4', 'F4', 'A4', 'G4',
            'F4', 'F4', 'E4', 'D4', 'C4', 'Bb4', 'Bb4', 'A4', 'F4',
            'C5', 'A4', 'G4', 'Bb4', 'D5', 'F4', 'A4', 'G4', 'F4'
        ],
        temposNotas: [
            8, 4, 8, 4, 8, 4, 8, 4,
            8, 4, 4, 4, 4, 8, 4, 12,
            8, 4, 6, 2, 4, 8, 4, 8, 4,
            8, 4, 4, 4, 4, 8, 2, 2, 12
        ]
    },
    "65": { 
        nome: "Igual ao Mestre",
        compasso: "6/8",
        velMin: 42,
        velMed: 48,
        velMax: 54,
        inicio: 1,
        velMinMeiaHora: 28,
        velMedMeiaHora: 29,
        velMaxMeiaHora: 30,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "I|gual |ao |Mes|tre |eu |de|se|jo |ser,"+
            "Em |hu|mi|da|de |e |man|si|dão |vi|ver,"+
            "Sem|pre, |com |ze|lo,"+
            "Em |san|ti|da|de |an|dar"+
            "E |mi|nha |vi|da |a |E|le |con|sa|grar." ,

            "Meu |co|ra|ção |é |to|do |Teu, |Se|nhor,"+
            "E|le |é |um |tem|plo |pa|ra |Teu |lou|vor,"+
            "Guar|da|-o |do |mal, |ao |vir |a |ten|ta|ção;"+
            "Sou |Teu |re|mi|do, |di|vi|no |Re|den|tor." ,

            "Cris|to, |o |Mes|tre , |Su|a |cruz |le|vou"+
            "E |o |Pai |e|ter|no |O |glo|ri|fi|cou;"+
            "Tam|bém |de|se|jo |a |mi|nha |cruz |le|var"+
            "E, |pa|ra |sem|pre, |com |E|le |ha|bi|tar." ,

            "Co|mo |é |o |Mes|tre, |no |céu, |O |ve|rei;"+
            "À |se|me|lhan|ça |d'E|le |eu |se|rei,"+
            "Num |cor|po |san|to, |glo|ri|o|so |e |i|mor|tal,"+
            "Ha|bi|ta|rei |na |ci|da|de |e|ter|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "66": { 
        nome: "Cansado estás? Vem a Jesus",
        compasso: "3/4",
        velMin: 60,
        velMed: 66,
        velMax: 72,
        inicio: 2.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Can|sa|do |es|tás?"+
            "Vem |a |Je|sus,"+
            "O |jus|to |Re|mi|dor;"+
            "Te|rás |em |ti |a |Su|a |luz"+
            "E |Seu |di|vi|no |a|mor." ,

            "Vem, |o|pri|mi|do, |sem |tar|dar,"+
            "À |Fon|te |do |per|dão;"+
            "O |Re|den|tor |te |faz |her|dar"+
            "E|ter|na |sal|va|ção." ,

            "Da |o|pres|são, |li|vrar|-te-á"+
            "Je|sus, |o |Re|den|tor;"+
            "Da |per|di|ção, |sal|var|-te-á"+
            "Por |Seu |i|men|so |a|mor." ,

            "E|le |é |o |a|mor |que |não |tem |par,"+
            "A|mi|go |ce|les|ti|al;"+
            "A |vi|da |e|ter|na |quer |te |dar"+
            "No |rei|no |di|vi|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "67": { 
        nome: "Vinde a Mim!",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3.5,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Não |há |pa|la|vra |do|ce |i|gual |a |de |Je|sus,"+
            "Pa|la|vra |da |ver|da|de, |que |pa|ra |o |céu |con|duz."+
            "Quan|do |es|ti|ver|es |tris|te, |te|rás |con|so|la|ção"+
            "Bus|can|do |a |Je|sus |Cris|to, |Au|tor |da |sal|va|ção." ,

            "Não |An|des |mais |dis|tan|te |do |Sal|va|dor |Je|sus"+
            "Que, |com |a|mor, |te |cha|ma, |pois |é |a |tu|a |Luz."+
            "Se |fo|res |des|pre|za|do |e |não |ti|ve|res |paz,"+
            "Vem |lo|go |en|tre|gar|-te |ao |Sal|va|dor |ve|raz." ,

            "Vem, |sem |tar|dar, |u|nir|-te |a |Quem |te |diz |as|sim,"+
            "Com |voz |ce|les|te |e |do|ce:"+
            "Oh! |Vem, |sim, |vem |a |Mim."+
            "Por |Su|a |mão |gui|a|do, |a|qui |tu |an|da|rás"+
            "Tran|qui|lo |e |bem |se|gu|ro |e, |um |di|a, |ao |céu |i|rás." ,

            "Vin|de |a |Mim"+
            "Vós |to|dos |can|sa|dos |e |o|pri|mi|dos"," "+
            "Fa|lou |o |gran|de |Mes|tre, |Je|sus, |o |Re|den|tor;"+
            "Pois |Seu |far|do |é |le|ve, |Seu |ju|go |é |su|a|ve,"+
            "Só |E|le |traz |a|lí|vio: |per|dão |ao |pe|ca|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "68": { 
        nome: "Sem tardar vai a Cristo",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se, |can|sa|do |e |a|fli|to,"+
            "Tu |pro|cu|ras |sal|va|ção,"+
            "Não |de|mo|res, |vai |a |Cris|to,"+
            "Que |con|ce|de |re|den|ção." ,

            "Sem |tar|dar, |sem |tar|dar,"+
            "Vai |a |Cris|to, |o |Sal|va|dor;"+
            "E|le |quer |te |sal|var,"+
            "Se|gue |a |E|le |com |fer|vor." ,

            "Dá |um |pas|so |pa|ra |Cris|to"+
            "E |re|ce|be|rás |per|dão;"+
            "E, |por |Deus, |se|rás |ben|quis|to,"+
            "Sen|do |um |fi|el |cris|tão." ,

            "Não |re|cu|ses |o |cha|ma|do"+
            "Do |di|vi|no |Re|mi|dor"+
            "E |se|rás |jus|ti|fi|ca|do"+
            "An|te |Deus, |o |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "69": { 
        nome: "A família de Jesus",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Em |vol|ta |de |Je|sus"+
            "Se |a|cha|va |a |mul|ti|dão,"+
            "Ou|vin|do |Seus |con|se|lhos"+
            "E |a|pren|den|do |a |re|ti|dão."+
            "Al|guém |a|pro|xi|mou|-se"+
            "Pa|ra |Lhe |a|nun|ci|ar"+
            "Que |Su|a |mãe |e |Seus |ir|mãos"+
            "Que|ri|am |Lhe |fa|lar." ,

            "Res|pon|de |o |gran|de |Mes|tre,"+
            "Es|ten|den|do |Su|as |mãos:"+
            "A|qui |es|tá |a |Mi|nha |mãe"+
            "Tam|bém |os |Meus |ir|mãos; "+
            "À|que|les |que |o|be|de|cem |a |Deus |Pai,"+
            "Que |es|tá |nos |céus,"+
            "Je|sus |os |cha|ma |de |ir|mãos"+
            "E |co-|her|dei|ros |Seus." ,

            "Oh! |que |a|mor |pro|fun|do"+
            "Je|sus |tem |pe|los |Seus,"+
            "Pois |cha|ma|-os |de |ir|mãos"+
            "E |fi|lhos |do |e|ter|no |Deus;"+
            "Tão |ex|ce|len|te |a|fe|to"+
            "Deus |fa|rá |com|pre|en|der"+
            "Ao |ho|mem |que |in|vo|cá|-Lo"+
            "E |cum|prir |o |Seu |que|rer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "70": { 
        nome: "Senhor Tu és a minha esperança",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3.5,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor, |Tu |és |a |mi|nha |Es|pe|ran|ça,"+
            "Se|guir|-Te|-ei |de |to|do |o |meu |co|ra|ção;"+
            "Em |Ti |es|tá |a |mi|nha |con|fi|an|ça"+
            "De |re|ce|ber, |no |céu, |o |ga|lar|dão." ,

            "Ao |céu |de|se|jo |ir"+
            "Con|ti|go, |ó |Se|nhor;"+
            "A|li |i|rei |fru|ir"+
            "Os |bens |e|ter|nos, |ó |bom |Sal|va|dor." ,

            "Se|nhor, |Tu |és |a |mi|nha |for|ta|le|za,"+
            "E |és |tam|bém |o |meu |po|ten|te |Sal|va|dor;"+
            "Tu |re|mo|ves|te |a |mi|nha |in|cer|te|za,"+
            "A |vi|da |e |a |fé |me |des|te, |ó |Re|den|tor." ,

            "A|go|ra |te|nho |Tu|a |a|le|gri|a,"+
            "Vi|va |es|pe|ran|ça, |paz, |vi|gor, |a|mor |e |luz;"+
            "Tu |és |meu |Guar|da |e |tam|bém |meu |Gui|a,"+
            "És |tu|do |pa|ra |mim, |ó |bom |Je|sus."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "71": { 
        nome: "Ó Senhor Jesus eu recorro a Ti",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Se|nhor |Je|sus, |eu |re|cor|ro |a |Ti,"+
            "Teu |po|der |ma|ni|fes|ta |em |mim;"+
            "Con|fi|an|do |em |Ti, |sei |que |ven|ce|dor"+
            "Eu |se|rei |so|bre |o |vil |ten|ta|dor." ,

            "Ó |Je|sus, |meu |Je|sus,"+
            "Faz|-me |sem|pre |sen|tir |Teu |vi|gor;"+
            "Só |as|sim, |bom |Je|sus,"+
            "So|bre |o |mal |eu |se|rei |ven|ce|dor." ,

            "Ó |Se|nhor |Je|sus, |eu |re|cor|ro |a |Ti,"+
            "For|te |Ro|cha |Tu |és |pa|ra |mim;"+
            "Se, |de |co|ra|ção, |eu |a |Ti |cla|mar,"+
            "Po|de|rei |so|bre |o |mal |tri|un|far." ,

            "Ó |Se|nhor |Je|sus , |eu |re|cor|ro |a |Ti"+
            "Pa|ra |ter |Teu |a|mor |Sem|pre |em |mim;"+
            "Eu |im|plo|ro |a |Ti, |quei|ras |me |gui|ar,"+
            "Pa|ra |o |céu |eu |po|der |al|can|çar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "72": { 
        nome: "Nome glorioso o de Jesus",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "No|me |glo|ri|o|so, |o |de |Je|sus,"+
            "No|me |pre|ci|o|so, |de |i|men|so |a|mor,"+
            "No|me |per|fei|to |e |sem |i|gual,"+
            "Que |sal|va |o |pe|ca|dor!" ,

            "Ao |No|me |do |Se|nhor |Je|sus,"+
            "Ao |No|me |san|to |de |Je|sus,"+
            "To|do |o |jo|e|lho |se |do|bra|rá"+
            "E |O |a|do|ra|rá." ,

            "No|me |su|bli|me, |o |de |Je|sus,"+
            "Fon|te |de |vi|da |e |de |a|mor;"+
            "Ou|tro |não |há |pa|ra |res|ga|tar"+
            "Ao |ho|mem |pe|ca|dor." ,

            "No|me |gran|di|o|so, |o |de |Je|sus,"+
            "For|te, |po|ten|te, |li|ber|ta|dor;"+
            "Por |es|se |No|me, |que |não |tem |par,"+
            "Deus |sal|va |o |pe|ca|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "73": { 
        nome: "Semearei semearei",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|me|a|rei |a |pre|ci|o|sa |se|men|te"+
            "Do |E|van|ge|lho |de |Cris|to |Je|sus;"+
            "Se|me|a|rei |a |Pa|la|vra |po|ten|te"+
            "Que |bons |fru|tos |da |gra|ça |pro|duz." ,

            "Se|me|a|rei, |se|me|a|rei,"+
            "Pe|lo |Es|pí|ri|to |San|to |de |Deus;"+
            "Cei|fa|rei, |cei|fa|rei"+
            "Vi|da |e|ter|na, |com |gló|ria, |nos |céus." ,

            "Se|me|a|rei |a |jus|ti|ça |di|vi|na"+
            "Nes|te |mun|do |de |lu|tas |e |dor;"+
            "E, |na |paz, |se|me|a|rei |a |dou|tri|na,"+
            "Sã |dou|tri|na |do |meu |Re|den|tor." ,

            "A |se|men|te |e|ter|na, |ce|les|te,"+
            "Ge|ra |fi|lhos |a |Deus, |Cri|a|dor;"+
            "Da |i|ma|gem |de |Cris|to |os |re|ves|te"+
            "E |per|fei|tos |os |faz |em |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "74": { 
        nome: "Vamos produzir frutos de louvor",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Na |dou|tri|na |san|ta |do |céu,"+
            "En|si|nou |Je|sus, |Sal|va|dor:"+
            "Eis |que |pe|los |cam|pos |lan|çou"+
            "A |se|men|te |o |se|me|a|dor;"+
            "Par|te |da |se|men|te |lan|ça|da,"+
            "Con|su|mi|ram |as |a|ves |do |céu;"+
            "Jun|to |do |ca|mi|nho |cai|u |e |fru|to,"+
            "Por|tan|to, |não |deu." ,

            "Ou|tra |par|te |lo|go |cres|ceu,"+
            "Mas |ra|iz |em |si |não |for|mou;"+
            "En|tre |pe|dre|gais |foi |ca|ir,"+
            "Ve|io |o |sol |e |lo|go |mur|chou;"+
            "Ou|tra, |que |cai|u |en|tre |es|pi|nhos,"+
            "Su|fo|ca|da, |não |pô|de |cres|cer;"+
            "Mui|to |tem|po |não |resis|tiu |e |ve|io,"+
            "Por|tan|to, |a |mor|rer." ,

            "Mas |em |bo|a |ter|ra |cai|u"+
            "Ou|tra |par|ta |e |fru|ti|fi|cou;"+
            "Os |seus |fru|tos |deu,"+
            "Cem |por |um, |pa|ra |a|que|le |que |se|me|ou."+
            "A |Pa|la|vra |é |a |Se|men|te"+
            "Que |em |nós |o|pe|ra |com |po|der;"+
            "So|mos |a |la|vou|ra |de |Deus,"+
            "Que |quer |os |seus |fru|tos |co|lher." ,

            "Va|mos |pro|du|zir |fru|tos |de |lou|vor,"+
            "Fru|tos |pa|ra |hon|ra |e |gló|ria"+
            "De |Deus |e |de |Cris|to, |o |Se|nhor" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "75": { 
        nome: "Vem a Jesus ó alma errante",
        compasso: "3/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 45,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 50,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vem |a |Je|sus, |ó |al|ma |er|ran|te, |"+ 
            "E|le  é  o |Su|mo |Pas|tor; |"+
            "N'E|le a|cha|rás |a |gra|ça  a|bun|dan|te, |"+
            "A |vi|da, |o  a|mor.",
            
            "Vem |a |Je|sus, |ó |al|ma |can|sa|da |"+
            "Do |pe|ca|do e |da |dor; |"+
            "Sem|pre |se|rás |por |E|le am|pa|ra|da, |"+
            "Oh! |vem |ao |Se|nhor.",
            
            "Vem |a |Je|sus, |ó |al|ma |a|fli|ta, |"+
            "Vem |aos |pés |do |Se|nhor; |"+
            "Re|ce|be|rás |a |paz |in|fi|ni|ta |"+
            "De |Deus, |Cri|a|dor."

        ],
        temposVersos: [
            2, 2, 2, 4, 2, 2, 2, 2, 4, 2,
            4, 2, 2, 2, 2, 6,
            2, 2, 2, 4, 2, 2, 2, 2, 2, 2,
            2, 2, 2, 2, 6,
        ],
        notas: [
            'Eb4', 'F4', 'Eb4', 'Ab4', 'C5', 'Bb4', 'F4', 'G4', 'F4', 'Eb4',
            'Ab4', 'Ab4', 'C5', 'Bb4', 'F4', 'Bb4',
            'Eb4', 'F4', 'Eb4', 'C5', 'C5', 'C5', 'Db5', 'C5', 'C5', 'Bb4',
            'F4', 'G4', 'F4', 'G4', 'Ab4'
        ],
        temposNotas: [
            2, 2, 2, 4, 2, 2, 2, 2, 4, 2,
            4, 2, 2, 2, 2, 6,
            2, 2, 2, 4, 2, 2, 2, 2, 2, 2,
            2, 2, 2, 2, 6,
        ]
    },
    "76": { 
        nome: "Cristo Jesus Sua mão me dá",
        compasso: "6/4",
        velMin: 100,
        velMed: 113,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus |su|a |mão |me |dá;"+
            "Nes|te |ca|mi|nho |que |le|va |aos |céus,"+
            "E|le |di|ri|gi |os |pas|sos |meus;"+
            "Com |su|a |mão, |po|de|ro|sa |mão,"+
            "Me |faz |tri|un|far, |me |fa|rá |ha|bi|tar"+
            "Na |e|ter|nal |Si|ão." ,

            "Cris|to |Je|sus |su|a |mão |me |dá;"+
            "Com |su|a |som|bra |me |co|bri|rá"+
            "E |ne|nhum |mal, |me |mo|les|ta|rá;"+
            "Meus |pés |tam|bém |não |tro|pe|ça|rão;"+
            "Os |an|jos |dos |céus |ao |man|da|do |de |Deus,"+
            "Me |sus|ten|ta|rão." ,

            "Cris|to |Je|sus |Su|a |mão |me |dá;"+
            "Na|da, |por|tan|to, |me |faz |pa|rar,"+
            "Na|da |a|qui |po|de |me |a|ba|lar;"+
            "Com |meu |Je|sus, |pas|so |a |pas|so |vou;"+
            "Vi|tó|ria |te|rei, |co|ro|a|do |se|rei"+
            "Por |Quem |me |a|mou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "77": { 
        nome: "Vamos lançar a semente",
        compasso: "6/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 69,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Va|mos |lan|çar |a |se|men|te"+
            "Com |a|le|gri|a |e |a|mor,"+
            "Nes|ta |glo|ri|o|sa |se|a|ra"+
            "Do |nos|so |a|ma|do |Se|nhor." ,

            "San|ta |Se|men|te |é |a |Pa|la|vra |de |Deus;"+
            "Quem |com |a|mor |se|me|á-La,"+
            "Prê|mio |te|rá |lá |nos |céus." ,

            "As |bo|as |no|vas |le|ve|mos"+
            "Aos |que |em |tre|vas |es|tão,"+
            "A|nun|ci|an|do |que |Cris|to,"+
            "A |to|dos, |dá |sal|va|ção." ,

            "As |ter|ra |já |es|tão |bran|cas"+
            "E |pron|tas |pa|ra |cei|far"," "+
            "Dis|se |as|sim |o |bom |Mes|tre;"+
            "Va|mos |ir|mãos |tra|ba|lhar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "78": { 
        nome: "Glória a Jesus Glória a Jesus",
        compasso: "6/8",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 69,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "So|bre |o |mon|te |e |pe|ran|te |os |Seus"+
            "Cris|to |trans|fi|gu|rou|-Se,"+
            "E |a |voz |do |e|ter|no |Deus,"+
            "Da |nu|vem, |fez|-se |ou|vir:"+
            "Es|te |é |o |Meu |Fi|lho |a|ma|do;"+
            "N'E|le |Eu |Me |com|pra|zo." ,

            "Gló|ria |a |Je|sus! |Gló|ria |a |Je|sus!"+
            "De |Quem |o |Pai |tes|ti|fi|cou;"+
            "Gló|ria |a |Je|sus! |Gló|ria |a |Je|sus!"+
            "Que |mui|to |nos |a|mou." ,

            "O |Seu |ros|to |res|plan|de|ceu"+
            "E |co|mo |o |sol |tor|nou|-se;"+
            "Seu |ves|ti|do |se |em|bran|que|ceu,"+
            "Bri|lhan|do |co|mo |a |luz;"+
            "E |os |que |is|to |vi|ram,"+
            "Gran|de |as|som|bro |sen|ti|ram." ,

            "A |Je|sus |va|mos |es|cu|tar"+
            "E |ser|-Lhe |con|sa|gra|dos;"+
            "Su|a |gló|ria |nos |vai |mos|trar,"+
            "Quan|do |E|le |re|tor|nar;"+
            "Foi |por |Deus |e|xal|ta|do,"+
            "Nos|so |Mes|tre |a|ma|do." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "79": { 
        nome: "Bom é estarmos nós aqui",
        compasso: "3/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bom |é |es|tar|mos |nós |a|qui |na |pre|sen|ça |de |Deus,"+
            "Re|ce|ben|do |con|se|lhos |que |vêm |lá |dos |céus;"+
            "Me|di|tan|do |no |Se|nhor, |que |nos |quer |pa|ra |Si,"+
            "To|dos |jun|tos |can|te|mos: |bom |é |es|tar|mos |nós |a|qui." ,

            "En|tre |nós |es|tá"+
            "Quem |nos |quer |pa|ra |Si."+
            "Ju|bi|lo|sos, |can|te|mos:"+
            "Bom |é |es|tar|mos |nós |a|qui." ,

            "Bom |é |es|tar|mos |nós |a|qui |en|to|an|do |lou|vor,"+
            "Des|fru|tan|do, |por |gra|ça, |as |bên|ções |de |a|mor;"+
            "Ca|da |um |de |nós |di|rá: |do |Se|nhor |re|ce|bi"+
            "Su|as |bên|ções |glo|ri|o|sas; |bom |é |es|tar|mos |nós |a|qui." ,

            "Bom |é |es|tar|mos |nós |a|qui |in|vo|can|do |ao |Se|nhor,"+
            "E|le|van|do |a |nos|sa |o|ra|ção |com |fer|vor;"+
            "Bre|ve |va|mos |pa|ra |o |céu, |pa|ra |o |rei|no |de |luz,"+
            "Gran|de |gló|ria |te|re|mos, |ven|do |a |Deus |e |a |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "80": { 
        nome: "Por Cristo resgatado",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus, |o |san|to |Cor|dei|ro,"+
            "Deu |Su|a |vi|da |so|bre |o |ma|dei|ro,"+
            "Com |o |Seu |san|gue |me |res|ga|tou,"+
            "D'E|le |a|go|ra |sou." ,

            "Por |Cris|to, |res|ga|ta|do,"+
            "Ser|vo |ao |gran|de |Deus"+
            "Pa|ra |a |E|le |per|ten|cer,"+
            "Jun|to |aos |san|tos |Seus." ,

            "Pre|so |es|ta|va |na |i|ni|qui|da|de,"+
            "Cris|to |me |trou|xe |a |li|ber|da|de;"+
            "Por |su|a |gra|ça |me |res|ga|tou;"+
            "D'E|le |a|go|ra |sou." ,

            "Tem |mi|nha |al|ma |gran|de |a|le|gri|a,"+
            "Sem |es|pe|ran|ça |sem|pre |vi|vi|a;"+
            "Gló|ria |a |Je|sus |que |me |res|ga|tou,"+
            "D'E|le |a|go|ra |sou."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "81": { 
        nome: "A vida deu por ti",
        compasso: "6/8",
        velMin: 108,
        velMed: 114,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "A |vi|da |deu |por |ti"+
            "Cris|to |Je|sus, |o |Sal|va|dor;"+
            "Ver|teu |por |ti, |na |cruz,"+
            "San|gue |pre|ci|o|so, |ex|pi|a|dor;"+
            "Por |ti, |por |ti, |Su|a |vi|da |deu;"+
            "Oh! |dar|-lhe |teu |co|ra|ção;"+
            "Por |ti, |por |ti, |Su|a |vi|da |deu"+
            "E |te |da|rá |sal|va|ção." ,

            "Co|ro|a |tão |cru|el,"+
            "Gran|de |es|cár|nio |su|por|tou;"+
            "Os |cra|vos |e |o |fel,"+
            "Por |ti,|na |cruz, |o |Mes|tre |pro|vou;"+
            "To|mou |o |cá|lix |da |dor |por |ti,"+
            "As |tu|as |cul|pas |pa|gou;"+
            "To|mou |o |cá|lix |da |dor |por |ti,"+
            "Da |per|di|ção |te |li|vrou." ,

            "À |or|dem |di|vi|nal"+
            "O |Sal|va|dor |o|be|de|ceu;"+
            "In|jú|ria |sem |i|gual"+
            "E |vi|tu|pé|rio |E|le |so|freu;"+
            "Des|ceu |da |gló|ria |dos |céus |por |ti,"+
            "Em |Cris|to |há |re|den|ção."+
            "Des|ceu |da |gló|ria |dos |céus |por |ti,"+
            "Só |n'E|le |en|con|tras |per|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "82": { 
        nome: "Oh Que grande amor",
        compasso: "2/4",
        velMin: 54,
        velMed: 63,
        velMax: 72,
        inicio: 2,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pa|de|ceu |du|ra |mor|te |por |nós, |so|bre |a |cruz,"+
            "O |Rei |dos |reis;"+
            "Por |Seu |gran|de |a|mor |ao |céu |con|duz"+
            "Os |Seus |re|mi|dos |fi|éis." ,

            "Oh! |Que |gran|de |a|mor,"+
            "Que |su|bli|me |a|mor"+
            "Nos |con|ce|de |Je|sus!"+
            "E|le |é |a |nos|sa |e|ter|na |Luz." ,

            "Gra|ti|dão |nós |de|ve|mos |ao |nos|so |Se|nhor,"+
            "O |Rei |dos |reis,"+
            "Que |nos |le|va|rá |ao |Cri|a|dor,"+
            "Se |em |tu|do |for|mo |fi|éis." ,

            "Na |ci|da|de |e|ter|na |de |paz |di|vi|nal,"+
            "O |Rei |dos |reis"+
            "Ho|nra|rá, |com |gló|ria |pe|re|nal,"+
            "Os |Seus |a|ma|dos |fi|éis." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "83": { 
        nome: "Vinde às bodas",
        compasso: "6/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 6,
        velMinMeiaHora: 58,
        velMedMeiaHora: 61,
        velMaxMeiaHora: 64,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus |bre|ve|men|te |ce|le|bra|rá"+
            "As |bo|das |de |Je|sus;"+
            "A |i|gre|ja |se |pre|pa|ran|do |es|tá"+
            "Com |gra|ça, |a|mor |e |luz." ,

            "Vin|de |às |bo|das |do |Sal|va|dor,"+
            "Vin|de, |não |rei|jei|teis;"+
            "Ves|tes |di|vi|nas |de |jus|ti|ça"+
            "Dos |céus |re|ce|be|reis." ,

            "Ao |ri|co, |ao |po|bre, |con|vi|da |Deus"+
            "E |não |faz |dis|tin|ção;"+
            "Pois |quer |fazê|-los |her|dei|ros |dos |céus,"+
            "Her|dei|ros |da |sal|va|ção." ,

            "Que |gló|ria |e|ter|na,|ce|les|ti|al,"+
            "Que |hon|ra, |que |a|mor,"+
            "Te|rão |os |san|tos |no |lar |di|vi|nal"+
            "Com |Cris|to, |o |seu |Se|nhor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "84": { 
        nome: "Quão amável é a Tua casa",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quão |a|má|vel |é |a |Tu|a |ca|sa,"+
            "Ó |e|ter|no |Cri|a|dor!"+
            "Ne|la |sem|pre |en|con|tra|rá |con|for|to"+
            "Quem |Te |a|do|ra, |ó |Se|nhor;"+
            "Os |que |a|mam |Tu|a |ca|sa"+
            "Bem-|a|ven|tu|ra|dos |são;"+
            "De |con|tí|nuo, |ó |E|ter|no,"+
            "O |Teu |No|me |lou|va|rão." ,

            "Bem-|a|ven|tu|ra|do |to|do |a|que|le"+
            "Que |con|fi|a |no |Se|nhor"+
            "E |que |no |seu |co|ra|ção |sin|ce|ro,"+
            "Faz |mo|ra|da |o |Cri|a|dor."+
            "Pois |ca|mi|nha |na |jus|ti|ça"+
            "E |de |for|ça |em |for|ça |vai"+
            "Ru|mo |à |gló|ria |pro|me|ti|da,"+
            "À |en|con|trar|-se |com |o |Pai." ,

            "É |me|lhor |per|ma|ne|cer |um |di|a"+
            "Nós |Teus |á|tri|os, |ó |Se|nhor,"+
            "Do |que |mil |em |qual|quer |ou|tra |par|te"+
            "Lon|ge |do |di|vi|no |a|mor."+
            "Pois |tu |és |Sol |e |Es|cu|do"+
            "Ao |que |an|da |em |re|ti|dão;"+
            "Os |que |a|mam |Tu|a |ca|sa"+
            "Bem-|a|ven|tu|ra|dos |são." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "85": { 
        nome: "Anunciai o santo Evangelho",
        compasso: "4/4",
        velMin: 66,
        velMed: 79,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "I|de, |a|nun|ci|ar |o |san|to |E|van|ge|lho"+
            "Por |to|do |o |mun|do, |dis|se |Je|sus,"+
            "A |to|do |o |ho|mem, |jo|vem |ou |ve|lho,"+
            "Pa|ra |al|can|çar |o |rei|no |de |luz." ,

            "To|do |o |que |crer |e |for |ba|ti|za|do"+
            "Sal|vo |se|rá, |fa|lou |o |Se|nhor;"+
            "Mas |quem |não |crer |já |é |con|de|na|do,"+
            "Por |des|pre|zar |o |seu |Sal|va|dor." ,

            "Não |mais |du|vi|des, |es|te |é |o |ca|mi|nho,"+
            "Ne|le |o |pri|mei|ro |pas|so |vais |dar;"+
            "Com |a|le|gri|a, |se|gue |o |des|ti|no"+
            "Que |Cris|to |ve|io |a |ti |o|fer|tar." ,

            "Pe|lo |ba|tis|mo |és |se|pul|ta|do"+
            "Pa|ra, |ao |mun|do, |re|nun|ci|ar;"+
            "Sen|do, |por |Cris|to, |re|ge|ne|ra|do,"+
            "Em |Seu |ca|mi|nho |po|des |an|dar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "86": { 
        nome: "Grande Tu és ó Pai",
        compasso: "6/4",
        velMin: 80,
        velMed: 94,
        velMax: 108,
        inicio: 4,
        velMinMeiaHora: 55,
        velMedMeiaHora: 56,
        velMaxMeiaHora: 58,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gran|de |Tu |és, |ó |Pai, |em |le|al|da|de,"+
            "És |sem|pre |o |mes|mo, |ja|mais |mu|da|rás;"+
            "És |com|pas|si|vo, |in|fi|ni|to |em |bon|da|de,"+
            "Co|mo |Tu |és, |as|sim, |sem|pre |se|rás." ,

            "San|to |e |Su|pre|mo |és, |ex|cel|so |For|ma|dor,"+
            "So|bre |teus |fi|lhos |es|tá |Teu |fa|vor;"+
            "I|men|sa |é |Tu|a |fi|de|li|da|de,"+
            "Gló|ria |e |lou|vor |a |Ti, |ó |Cri|a|dor." ,

            "Quan|to |é |e|le|va|do, |ó |Deus, |Teu |pen|sa|men|to,"+
            "Em |Tu|as |o|bras |há |gran|de |sa|ber;"+
            "Re|ges |a |ter|ra, |os |céus |e |o |fir|ma|men|to,"+
            "Tu|do |e|nal|te|ce |Teu |gran|de |po|der." ,

            "Só |em |Ti |há |per|dão |pa|ra |o |pe|ca|do,"+
            "Paz |sem|pi|ter|na |dás |ao |co|ra|ção;"+
            "Tu|a |pre|sen|ça, |ó |Deus, |nos |tem |gui|a|do"+
            "E |gui|a|rá |a|té |a |per|fei|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "87": { 
        nome: "Eis que vem Jesus",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eis |que |vem |Je|sus, |o |nos|so |Es|po|so |di|vi|nal;"+
            "Com |pru|dên|cia, |va|mos |to|dos |jun|tos |vi|gi|ar;"+
            "Oh! |Que |paz |ce|les|ti|al"+
            "Sen|ti|rá |quem |pre|pa|ra|do |se |en|con|trar!" ,

            "Je|sus |Cris|to, |o |Es|po|so,"+
            "Pa|ra |as |bo|das |le|va|rá |os |Seus."+
            "Que |en|con|tro |glo|ri|o|so"+
            "Pa|ra |os |san|tos |do |vi|ven|te |Deus!" ,

            "Es|te|ja|mos |bem |a|ten|tos, |pois |Je|sus |vi|rá;"+
            "So|bre |as |nu|vens, |glo|ri|o|so, |a|pa|re|ce|rá;"+
            "Seus |fi|éis |re|co|lhe|rá"+
            "E |à |gló|ria |pro|me|ti|da |os |le|va|rá." ,

            "Tu|a |lâm|pa|da |não |de|ve |se |a|pa|gar, |ir|mão;"+
            "O |a|zei|te |da |Pa|la|vra |des|ce|rá |dos |céus;"+
            "A |Je|sus |se |jun|ta|rão"+
            "Os |pru|den|tes |que |ser|vi|ram |ao |gran|de |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "88": { 
        nome: "Minha oração",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 3.5,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Mi|nha |o|ra|ção,|ó |meu |Se|nhor,"+
            "E|le|vo |a |Ti |em |co|mu|nhão;"+
            "Faz|-me |sen|tir |Teu |gran|de |a|mor,"+
            "A |Tu|a |paz |e |Tu|a |un|ção." ,

            "Em |no|me |do |Se|nhor |Je|sus"+
            "E|le|vo |a |Ti |es|ta |o|ra|ção."+
            "Ó |Cri|a|dor, |Fon|te |de |luz,"+
            "En|tre|go |a |Ti |meu |co|ra|ção." ,

            "Mi|nha |o|ra|ção, |ó |Pai |de |a|mor,"+
            "E|le|vo |a |Ti |pa|ra |al|can|çar"+
            "A |Tu|a |paz, |o |Teu |fa|vor;"+
            "A|qui |es|tou |a |Te |a|do|rar." ,

            "Mi|nha |o|ra|ção, |ó |gran|de |Deus,"+
            "E|le|vo |a |Ti |pa|ra |a|pren|der"+
            "Os |e|ter|nais |pre|cei|tos |Teus"+
            "E |sem|pre |Te |o|be|de|cer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "89": { 
        nome: "Oh Grande Deus",
        compasso: "4/4",
        velMin: 80,
        velMed: 88,
        velMax: 96,
        inicio: 1,
        velMinMeiaHora: 52,
        velMedMeiaHora: 54,
        velMaxMeiaHora: 56,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Gran|de |Deus, |"+
            "se |cum|prem |as |pro|mes|sas |"+
            "Que |Tu |tens |fei|to |no |Se|nhor |Je|sus; |.|"+
            "Pe|los |Teus |si|nais, |"+
            "já |ve|mos |que |Te a|pres|sas |"+
            "Em |mos|trar |a |to|dos |Tu|a e|ter|na |luz. |" ,

            "Pai |e|ter|nal, |"+
            "do |céu |nos |tens |man|da|do |"+
            "Teu |San|to |Fi|lho, |o |E|ma|nu|el, |.|"+
            "Que, |da es|cra|vi|dão, |"+
            "nos |tem |já |li|ber|ta|do |"+
            "E |nos |fez |Seu |po|vo |san|to |e |fi|el. |" ,

            "Deus |Cri|a|dor, |"+
            "tam|bém |nos |en|vi|as|te |"+
            "Teu |San|to Es|pí|ri|to |Con|so|la|dor; |.|"+
            "Pa|ra a |re|den|ção |"+
            "e|ter|na |nos |se|las|te |"+
            "E, |por |es|se |Dom, |sen|ti|mos |Teu |a|mor. |" ,

        ],
        temposVersos: [
            8,4,4,12,
            4,4,4,4,4,8,8,
            8,6,2,4,4,4,4,8,8,12,4,
            4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,4,4,4,4,4,4,4,8,8,12,

            8,4,4,12,
            4,4,4,4,4,8,8,
            8,6,2,4,4,4,4,8,8,12,4,
            4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,4,4,4,4,4,4,4,8,8,12,

            8,4,4,12,
            4,4,4,4,4,8,8,
            8,6,2,4,4,4,4,8,8,12,4,
            4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,4,4,4,4,4,4,4,8,8,12

        ],
        notas: [
            'Bb4','A4','G4','F4',
            'F4','Bb4','A4','Bb4','C5','D5','Bb4',
            'D5','C5','C5','Bb4','G4','A4','Bb4','A4','G4','F4','',
            'F4','Eb5','D5','C5','Bb4',
            'F4','F4','Eb5','D5','C5','C5','Bb4',
            'F4','G4','F4','G4','F4','A4','Bb4','C5','D5','C5','Bb4',

            'Bb4','A4','G4','F4',
            'F4','Bb4','A4','Bb4','C5','D5','Bb4',
            'D5','C5','C5','Bb4','G4','A4','Bb4','A4','G4','F4','',
            'F4','Eb5','D5','C5','Bb4',
            'F4','F4','Eb5','D5','C5','C5','Bb4',
            'F4','G4','F4','G4','F4','A4','Bb4','C5','D5','C5','Bb4',

            'Bb4','A4','G4','F4',
            'F4','Bb4','A4','Bb4','C5','D5','Bb4',
            'D5','C5','C5','Bb4','G4','A4','Bb4','A4','G4','F4','',
            'F4','Eb5','D5','C5','Bb4',
            'F4','F4','Eb5','D5','C5','C5','Bb4',
            'F4','G4','F4','G4','F4','A4','Bb4','C5','D5','C5','Bb4'

        ],
        temposNotas: [
            8,4,4,12,
            4,4,4,4,4,8,8,
            8,6,2,4,4,4,4,8,8,12,4,
            4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,4,4,4,4,4,4,4,8,8,12,

            8,4,4,12,
            4,4,4,4,4,8,8,
            8,6,2,4,4,4,4,8,8,12,4,
            4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,4,4,4,4,4,4,4,8,8,12,

            8,4,4,12,
            4,4,4,4,4,8,8,
            8,6,2,4,4,4,4,8,8,12,4,
            4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,4,4,4,4,4,4,4,8,8,12

        ]
    },
    "90": { 
        nome: "Teu destino é a glória",
        compasso: "3/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pe|la |fé, |ir|mão |que|ri|do,"+
            "Ser|ve |a |Cris|to, |o |Re|den|tor;"+
            "Não |te |dei|xes |ser |ven|ci|do,"+
            "Ven|ce |o |mal |com |teu |Se|nhor." ,

            "Teu |des|ti|no |é |a |gló|ria,"+
            "A |he|ran|ça |dos |fi|éis;"+
            "É |se|gu|ra |a |vi|tó|ria"+
            "Que |da|rá |o |Rei |dos |reis." ,

            "Oh! |le|van|ta |as |mãos |can|sa|das"+
            "E |não |o|lhes |pa|ra |trás,"+
            "Pois |se|rão |for|ti|fi|ca|das"+
            "Pe|lo |Prín|ci|pe |da |paz." ,

            "Se|gue |as |o|bras |do |teu |Mes|tre,"+
            "Mar|cha |fir|me |pa|ra |o |céu;"+
            "E|le |é |a |Luz |ce|les|te,"+
            "Que |i|lu|mi|na |os |pas|sos |teus." ,

            "A |Pa|la|vra |da |ver|da|de,"+
            "A |Es|pa|da |di|vi|nal,"+
            "Te |con|ser|va |em |san|ti|da|de"+
            "Pa|ra |o |rei|no |e|ter|nal."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "91": { 
        nome: "No esconderijo do Onipotente",
        compasso: "6/4",
        velMin: 106,
        velMed: 113,
        velMax: 120,
        inicio: 1,
        velMinMeiaHora: 60,
        velMedMeiaHora: 62,
        velMaxMeiaHora: 65,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "No |es|con|de|ri|jo |do |O|ni|po|ten|te,"+
            "Sem|pre |do |mal |pres|er|va|do |es|ta|rás"+
            "E, |so|bre|vin|do |a |pro|va |ar|den|te,"+
            "Com |Su|a |som|bra |co|ber|to |se|rás." ,

            "O |Cri|a|dor |te |es|con|de|rá"+
            "Em |Seu |se|gu|ro |a|bri|go;"+
            "Ao |teu |re|dor |Se |a|cam|pa|rá,"+
            "Não |te|me|rás |o |i|ni|mi|go." ,

            "Flo|res|ce|rás |co|mo |to|da |a |pal|mei|ra"+
            "E, |co|mo |o |ce|dro, |as|sim |cres|ce|rás;"+
            "Na|da |em|bar|gar |po|de |a |tu|a |car|rei|ra"+
            "E |des|ta |gra|ça |ja|mais |ca|i|rás." ,

            "Não |te|me|rás |a |bra|ve|za |dos |ma|res"+
            "E |nem, |da |noi|te, |es|pan|to |te|rás;"+
            "Se |do |es|cu|do |da |fé |te |ar|ma|res,"+
            "Teu |i|ni|mi|go |por |ter|ra |ve|rás." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "92": { 
        nome: "O santo Evangelho",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 45,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 50,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |san|to |E|van|ge|lho |to|do |o |ho|mem |de|ve |ou|vir;"+
            "E|le |é |fi|el |es|pe|lho |que |re|fle|te |o |por|vir;"+
            "Re|fle|te |a |gran|de|za |do |a|mor |do |Sal|va|dor"+
            "E |nos |dá |re|al |cer|te|za |do |Seu |rei|no |de |es|plen|dor." ,

            "O |san|to |E|van|ge|lho |pe|lo |mun|do |e|co|a|rá;"+
            "De|ve |o |ho|mem |en|ten|dê|-Lo |e, |en|tão, |se |sal|va|rá."+
            "Con|for|ta |nos|sas |al|mas |e |nos |traz |con|so|la|ção,"+
            "Trans|mi|tin|do |paz |e |cal|ma |nes|ta |pe|re|gri|na|ção." ,

            "No |san|to |E|van|ge|lho |de |Je|sus, |o |Re|den|tor,"+
            "En|con|tra|mos |o |con|se|lho |que |nos |le|va |ao |Cri|a|dor;"+
            "Je|sus, |Cor|dei|ro |san|to, |trou|xe |nos|sa |re|den|ção;"+
            "En|to|e|mos |nos|so |can|to |pa|ra |Su|a |e|xal|ta|ção." ,

            "Sal|va|ção! |Sal|va|ção!"+
            "Vi|da |e|ter|na |e |per|dão!"+
            "Diz |o |som |de |a|mor"+
            "Do |E|van|ge|lho |do |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "93": { 
        nome: "Aceitando ao Senhor...",
        compasso: "3/4",
        velMin: 60,
        velMed: 66,
        velMax: 72,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Se|nhor |Je|sus |te |cha|ma, |"+
            "Só |por |E|le |tens |per|dão; |"+
            "Quer |do|ar|-te |no|va |vi|da, |"+
            "Dar|-te |paz |ao |co|ra|ção; |"+
            "A|cei|tan|do |ao |Se|nhor, |"+
            "Tem |per|dão |o |pe|ca|dor. |" ,

            "O |pe|ca|do |não |im|pe|de |"+
            "Que |te |cha|me |com |a|mor; |"+
            "Es|que|cer |o |teu |pas|sa|do |"+
            "Quer |Je|sus, |o |Re|den|tor; |"+
            "A|cei|tan|do |ao |Se|nhor, |"+
            "Tem |fa|vor |o |pe|ca|dor. |" ,

            "Tu|do es|tá |já |pre|pa|ra|do, |"+
            "Só |te |res|ta o|be|de|cer; |"+
            "Não |rei|jei|tes |o |cha|ma|do |"+
            "Que |Je|sus |vem |te |fa|zer; |"+
            "A|cei|tan|do |ao |Se|nhor, |"+
            "Tem |a |vi|da o |pe|ca|dor." ,

        ],
        temposVersos: [
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,6,2,2,2,4,4,
            3,1,6,2,2,2,8,
            3,1,4,4,3,1,8,
            3,1,6,2,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,6,2,2,2,4,4,
            3,1,6,2,2,2,8,
            3,1,4,4,3,1,8,
            3,1,6,2,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,6,2,2,2,4,4,
            3,1,6,2,2,2,8,
            3,1,4,4,3,1,8,
            3,1,6,2,2,2,8
        ],
        notas: [
            'F4','G4','F4','D4','Bb4','G4','F4','F4',
            'Bb4','C5','D5','C5','Bb4','A4','Bb4',
            'A4','Bb4','C5','C5','A4','F4','Bb4','Bb4',
            'A4','Bb4','C5','C5','A4','F4','Bb4',
            'F4','G4','F4','D4','Bb4','G4','F4',
            'Bb4','C5','D5','C5','Bb4','A4','Bb4',

            'F4','G4','F4','D4','Bb4','G4','F4','F4',
            'Bb4','C5','D5','C5','Bb4','A4','Bb4',
            'A4','Bb4','C5','C5','A4','F4','Bb4','Bb4',
            'A4','Bb4','C5','C5','A4','F4','Bb4',
            'F4','G4','F4','D4','Bb4','G4','F4',
            'Bb4','C5','D5','C5','Bb4','A4','Bb4',

            'F4','G4','F4','D4','Bb4','G4','F4','F4',
            'Bb4','C5','D5','C5','Bb4','A4','Bb4',
            'A4','Bb4','C5','C5','A4','F4','Bb4','Bb4',
            'A4','Bb4','C5','C5','A4','F4','Bb4',
            'F4','G4','F4','D4','Bb4','G4','F4',
            'Bb4','C5','D5','C5','Bb4','A4','Bb4'
        ],
        temposNotas: [
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,6,2,2,2,4,4,
            3,1,6,2,2,2,8,
            3,1,4,4,3,1,8,
            3,1,6,2,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,6,2,2,2,4,4,
            3,1,6,2,2,2,8,
            3,1,4,4,3,1,8,
            3,1,6,2,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,6,2,2,2,4,4,
            3,1,6,2,2,2,8,
            3,1,4,4,3,1,8,
            3,1,6,2,2,2,8

        ]
    },
    "94": { 
        nome: "Quem sustenta a nossa vida",
        compasso: "4/4!3/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 36,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quem |sus|ten|ta |a |nos|sa |vi|da |é |a |Pa|la|vra |do |Se|nhor,"+
            "Que |a|ni|ma, |e |e|di|fi|ca |e |nos |traz |con|so|la|ção,"+
            "E |que |u|ne |a |al|ma |hum|il|de |ao |a|mor |do |Re|den|tor;"+
            "É |a |Pa|la|vra |po|de|ro|sa |que |faz |crer |na |sal|va|ção." ,

            "A |Pa|la|vra |do |bom |Cri|a|dor |é |a |Gui|a |do |re|mi|do"+
            "Na |jor|na|da |a |ca|mi|nho |das |mo|ra|das |do |Fi|el;"+
            "É |a |Pa|la|vra |de |vir|tu|de, |que |le|van|ta |o |a|ba|ti|do;"+
            "É |a |es|pa|da |de |dois |gu|mes |é |o |Ver|bo, |E|ma|nu|el." ,

            "Pro|cla|me|mos |que |Je|sus |não |ta|rda|rá |em |re|tor|nar,"+
            "Va|mos |sem|pre |o|be|de|cê|-Lo |e |de |co|ra|ção |O |a|mar;"+
            "Es|te|ja|mos |vi|gi|lan|tes, |es|pe|ran|do |o |Seu |vol|tar,"+
            "Pois |em |bre|ve |a |trom|be|ta |to|dos |va|mos |es|cu|tar." ,

            "Não |se|ja|mos |o|ci|o|sos |em |ser|vir |o |gran|de |Rei,"+
            "Mas |se|ja|mos |fer|vo|ro|sos |pa|ra |sem|pre |O |a|ten|der;"+
            "Com |as |di|vi|nais |vir|tu|des |cum|pri|re|mos |Su|a |lei,"+
            "Su|bi|re|mos |pa|ra |gló|ria, |lar |do |O|ni|po|ten|te |Ser." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "95": { 
        nome: "Vinde ó benditos de Meu Pai",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vin|de, |ó |ben|di|tos |de |Meu |Pai"," "+
            "Ou|vi|rão |de |Cris|to, |o |Re|den|tor,"+
            "To|dos |os |que |a|mam |ao |bom |Deus"+
            "E |en|tra|rão |no |rei|no |de |a|mor."+
            "Oh! |que |es|plen|dor!"+
            "Que |con|so|la|ção |nos |guar|da |no |por|vir:"+
            "Jun|tos |do |e|ter|no |Cri|a|dor,"+
            "Os |bens |ce|les|tes |nós |i|re|mos |fru|ir!" ,

            "Ma|jes|to|so, |Cris|to |vol|ta|rá"+
            "Com |po|der |e |gran|de |es|plen|dor;"+
            "Man|da|rá |os |an|jos |re|co|lher"+
            "Os |fi|éis |ao |rei|no |de |a|mor;"+
            "No |céu |sur|gi|rá |com |gran|de |si|nal,"+
            "To|do |o|lho |O |ve|rá;"+
            "Gran|de |es|pan|to |pa|ra |o |pe|ca|dor,"+
            "Mas |gran|de |gló|ria |pa|ra |o |jus|to |se|rá." ,

            "Pa|ra |o |al|to |o|lhe|mos, |ó |fi|éis,"+
            "Per|to |es|tá |a |nos|sa |re|den|ção;"+
            "Con|ser|ve|mos |a |paz |e |o |a|mor,"+
            "Ca|mi|nhe|mos |em |re|ti|dão;"+
            "A |vi|da |e|ter|nal, |com |gló|ria |no |céu,"+
            "Je|sus |Cris|to |nos |da|rá;"+
            "Deus |en|xu|ga|rá |as |lá|gri|mas"+
            "E |to|da |a |tri|bu|la|ção |ces|sa|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "96": { 
        nome: "Vinde adoremos a Deus",
        compasso: "3/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 46,
        velMedMeiaHora: 48,
        velMaxMeiaHora: 50,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Vin|de, a|do|re|mos |a |Deus, |"+
            "San|to e |su|bli|me |Reis |dos |céus; |"+
            "Vin|de |com |fé; |"+
            "O |Deus |que |dá |sa|ber, |"+
            "Gran|dio|so |em |po|der, |"+
            "Que em |bre|ve i|re|mos |ver, |"+
            "E|ter|no |é. |" ,

            "Vin|de |ser|vir |ao |Se|nhor |"+
            "Que |nos |man|dou |o |Re|den|tor: |"+
            "Cris|to |Je|sus, |"+
            "San|to |Pas|tor, |ve|raz, |"+ 
            "Rei |de |jus|ti|ça e |paz, |"+
            "Que às |nos|sas |al|mas |traz |"+
            "Vi|da |e |luz. |" ,

            "Deus, |Pai |e|ter|no e |fi|el, |"+
            "Vos |far|ta|rá |de |lei|te e |mel |"+
            "E |vi|ve|reis |"+
            "Vi|da |de |paz |com |Deus, |"+
            "Com |os |re|mi|dos |Seus |"+
            "E, |jun|tos, |lá |nos |céus |"+
            "E|xul|ta|reis." ,

        ],
        temposVersos: [
            4,4,4,4,4,4,12,
            4,4,4,2,2,4,4,12,
            4,4,4,12,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,12,

            4,4,4,4,4,4,12,
            4,4,4,2,2,4,4,12,
            4,4,4,12,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,12,

            4,4,4,4,4,4,12,
            4,4,4,2,2,4,4,12,
            4,4,4,12,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,12
        ],
        notas: [
            'D5','B4','G4','A4','G4','F#4','G4',
            'G4','A4','B4','C5','D5','C5','B4','A4',
            'D5','B4','G4','D4',
            'A4','B4','C5','B4','A4','G4',
            'A4','B4','C5','B4','A4','G4',
            'G4','B4','D5','D5','E5','D5',
            'C5','B4','A4','G4',

            'D5','B4','G4','A4','G4','F#4','G4',
            'G4','A4','B4','C5','D5','C5','B4','A4',
            'D5','B4','G4','D4',
            'A4','B4','C5','B4','A4','G4',
            'A4','B4','C5','B4','A4','G4',
            'G4','B4','D5','D5','E5','D5',
            'C5','B4','A4','G4',

            'D5','B4','G4','A4','G4','F#4','G4',
            'G4','A4','B4','C5','D5','C5','B4','A4',
            'D5','B4','G4','D4',
            'A4','B4','C5','B4','A4','G4',
            'A4','B4','C5','B4','A4','G4',
            'G4','B4','D5','D5','E5','D5',
            'C5','B4','A4','G4'

        ],
        temposNotas: [
            4,4,4,4,4,4,12,
            4,4,4,2,2,4,4,12,
            4,4,4,12,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,12,

            4,4,4,4,4,4,12,
            4,4,4,2,2,4,4,12,
            4,4,4,12,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,12,

            4,4,4,4,4,4,12,
            4,4,4,2,2,4,4,12,
            4,4,4,12,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,6,2,4,
            4,4,4,12

        ]
    },
    "97": { 
        nome: "Cristo Jesus nosso bom Pastor",
        compasso: "6/8",
        velMin: 42,
        velMed: 47,
        velMax: 52,
        inicio: 1,
        velMinMeiaHora: 26,
        velMedMeiaHora: 27,
        velMaxMeiaHora: 28,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Co|mo |o|ve|lhas |que |não |têm |ne|nhum |pas|tor,"+
            "Lon|ge |do |bem |e |do |a|mor |do |Cri|a|dor,"+
            "To|dos |an|dá|va|mos |no |mal, |sem |en|xer|gar"+
            "O |bom |ca|mi|nho |ce|les|ti|al |pa|ra |tri|lhar." ,

            "2 Há |um |re|ba|nho |e |um |Pas|tor, |que |é |Je|sus;"+
            "Su|as |o|ve|lhas, |com |a|mor, |sem|pre |con|duz;"+
            "E|las |so|men|te |a|ten|de|rão |ao |Seu |fa|lar,"+
            "E |só |a |E|le |se|gui|rão |sem |va|ci|lar." ,

            "3 Va|mos |se|guir |o |bom |Je|sus, |Su|mo |Pas|tor;"+
            "Com |Seu |ca|ja|do |nos |con|duz |ao |lar |de |a|mor,"+
            "On|de |re|pou|so |ha|ve|rá |jun|to |a |Deus,"+
            "E |na|da |mais |per|tur|ba|rá |os |san|tos |Seus." ,

            "Cris|to |Je|sus, |nos|so |bom |Pas|tor,"+
            "Nos |a|gre|gou |pe|lo |Seu |a|mor;"+
            "So|bre |a |cruz |mui|to |pa|de|ceu;"+
            "Pe|las |o|ve|lhas, |su|a |vi|da |deu." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "98": { 
        nome: "Cristo Jesus tudo pode",
        compasso: "6/4",
        velMin: 88,
        velMed: 107,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 60,
        velMedMeiaHora: 62,
        velMaxMeiaHora: 65,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tu|do |en|tre|gue|mos |a |Cris|to |Je|sus,"+
            "Nos|so |cla|mor |E|le |po|de |a|ten|der;"+
            "So|men|te |an|de|mos |na |sen|da |de |luz"+
            "E |con|fi|an|tes |i|re|mos |vi|ver." ,

            "Cris|to |Je|sus |tu|do |po|de;"+
            "Co|nos|co |es|tá, |bên|ções |da|rá;"+
            "E|le |do |céu |nos |so|cor|re"+
            "E |na|da |nos |fal|ta|rá." ,

            "Nos|so |con|for|to |es|tá |em |Je|sus;"+
            "Paz |e |a|le|gri|a |só |E|le |nos |dá;"+
            "So|men|te |E|le |é |Quem |nos |con|duz;"+
            "O |Re|den|tor |nun|ca |nos |dei|xa|rá." ,

            "Sem |o |Se|nhor, |não |po|de|mos |an|dar"+
            "Em |Seu |ca|mi|nho |de |vi|da |e |de |a|mor;"+
            "Por |Su|a |gra|ça, |Je|sus |quer |nos |dar"+
            "Fé |e |vir|tu|de, |fir|me|za |e |va|lor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "99": { 
        nome: "Jesus Cristo é o Amigo celestial",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se |nós |fi|zer|mos |tu|do |o |que |nos |man|da"+
            "Je|sus |Cris|to, |nos|so |Re|den|tor,"+
            "Cha|mar|-nos-á |a |to|dos |de |a|mi|gos;"+
            "Tão |so|men|te |an|de|mos |em |a|mor." ,

            "Je|sus |Cris|to, |Je|sus |Cris|to"+
            "É |o |A|mi|go |ce|les|ti|al,"+
            "A|mo|ro|so |e |com|pas|si|vo;"+
            "É |o |A|mi|go |sem |i|gual." ,

            "É |es|se |A|mi|go |que |nos |a|com|pa|nha"+
            "Na |jor|na|da |ru|mo |ao |lar |de |Deus;"+
            "É |E|le |que |nos |fa|la |dos |te|sou|ros"+
            "Que |i|re|mos |des|fru|tar |nos |céus." ,

            "Seus |sá|bi|os |e |glo|ri|o|sos |man|da|men|tos,"+
            "Je|sus |Cris|to |vem |nos |en|si|nar;"+
            "Um |di|a |O |ve|re|mos |fa|ce |a |fa|ce,"+
            "E|le |mes|mo |pro|me|teu |vol|tar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "100": { 
        nome: "Todos juntos jubilemos",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pa|ra |es|ta |vo|ca|ção |ce|les|te,"+
            "Deus |nos |tem |cha|ma|do,"+
            "Gló|ria |e |lou|vor |nós |da|mos |ao |Se|nhor!"+
            "Den|tre |os |po|vos |e |as |tri|bos"+
            "Fo|mos |nós |com|pra|dos |por |Je|sus,"+
            "Lou|ve|mos |nos|so |Re|mi|dor!" ,

            "To|dos |jun|tos, |ju|bi|le|mos |de |um |co|ra|ção |sin|ce|ro,"+
            "Dan|do |hon|ra |e |gló|ria |ao |nos|so |Re|den|tor;"+
            "O |Seu |san|gue |pre|ci|o|so"+
            "E|le |der|ra|mou |por |nós |na |cruz;"+
            "Re|mi|dos |so|mos |do |Se|nhor." ,

            "Je|sus |Cris|to, |nos|so |Mes|tre,"+
            "É |o |Pri|mei|ro |e |o |Der|ra|dei|ro,"+
            "É |o |Rei |dos |reis, |de |to|dos |é |Se|nhor;"+
            "E|le |nos |con|ser|va |u|ni|dos"+
            "No |ca|mi|nho |de |jus|ti|ça |e |paz;"+
            "Ben|di|to |se|ja |o |Re|den|tor!" ,

            "Com |Je|sus, |ce|les|te |Es|po|so,"+
            "Pa|ra |sem|pre |rei|na|re|mos"+
            "No |Seu |lar |de |a|mor, |lu|gar |de |es|plen|dor;"+
            "Co|mo |E|le |nós |se|re|mos,"+
            "No |Seu |rei|no |e|ter|nal |de |luz;"+
            "Oh! |Gló|ria |ao |nos|so |Sal|va|dor!"

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "101": { 
        nome: "Cantemos juntos louvores a Deus",
        compasso: "4/4",
        velMin: 60,
        velMed: 66,
        velMax: 72,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Can|te|mos, |jun|tos, |lou|vo|res |a |Deus |"+
            "E |ce|le|bre|mos |ao |Se|nhor; |"+
            "Com |jú|bi|lo |e|le|ve|mos |aos |céus |"+
            "Tri|bu|tos |san|tos |ao |Cri|a|dor. |" ,

            "E|ter|na|men|te |pre|si|de o |Se|nhor, |"+
            "Seus |di|as |não |se |fi|da|rão; |"+
            "Pros|tre|mo|-nos |an|te |Deus, |Cri|a|dor, |"+
            "Pois |so|mos |o|bra |da |Su|a |mão. |" ,

            "Ó |vin|de |e |a|do|re|mos |por |fé, |"+
            "Ao |Deus |que |nos |fez |po|vo |Seu; |"+
            "O|ni|pre|sen|te |e |San|to E|le |é |"+
            "E |pro|me|teu |nos |le|var |ao |céu. |" ,

            "Se |ho|je ou|vir|mos |a |voz |do |Se|nhor, |"+
            "De|ve|mos |lo|go o|be|de|cer, |"+
            "Pois |o |re|pou|so |no |rei|no |de a|mor, |"+
            "De |Deus, |o |Pai, |va|mos |re|ce|ber." ,

        ],
        temposVersos: [
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4,

            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4,

            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4,

            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4
        ],
        notas: [
            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','A4','F#4','E4','D4',
            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','B4','A4','G4','F#4','G4',

            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','A4','F#4','E4','D4',
            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','B4','A4','G4','F#4','G4',

            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','A4','F#4','E4','D4',
            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','B4','A4','G4','F#4','G4',

            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','A4','F#4','E4','D4',
            'D4','B4','B4','B4','C5','B4','A4','G4','A4','B4',
            'D4','E4','F#4','G4','B4','A4','G4','F#4','G4'

        ],
        temposNotas: [
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4,

            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4,

            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4,

            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,4,4,4,4,
            4,4,4,4,2,2,4,2,2,4,
            4,4,4,4,2,2,4,4,4

        ]
    },
    "102": { 
        nome: "Sinto a voz divina do meu fiel Pastor",
        compasso: "6/8",
        velMin: 116,
        velMed: 130,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 75,
        velMedMeiaHora: 77,
        velMaxMeiaHora: 80,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sin|to |a |voz |tão |mei|ga |de |Cris|to, |o |Re|den|tor,"+
            "Que |sem|pre |me |con|so|la |com |Seu |su|bli|me |a|mor;"+
            "A |pas|tos |ver|de|jan|tes |sem|pre |me |gui|a|rá;"+
            "Com |Seu |ca|ja|do |san|to |me |a|pas|cen|ta|rá." ,

            "A|mi|go |Seu, |me |cha|ma, |Meu |Sal|va|dor |Je|sus;"+
            "O |Seu |fa|lar |su|bli|me |dá |com|pre|en|são |e |luz;"+
            "Que|ro, |aos |pés |do |Mes|tre, |con|ti|nu|a|men|te |es|tar;"+
            "Que|ro, |nos |Seus |con|se|lhos, |sem|pre |me |de|lei|tar." ,

            "O |meu |di|vi|no |Mes|tre |fa|la |com |man|si|dão;"+
            "E |traz |à |mi|nha |al|ma |gran|de |con|so|la|ção;"+
            "Em |to|das |as |an|gús|ti|as, |na |pro|va |ou |na |dor,"+
            "Den|tro |de |mim |eu |sin|to |a |voz |do |meu |Se|nhor." ,

            "Sin|to |a |voz |di|vi|na |do |meu |fi|el |Pas|tor,"+
            "Que |sem|pre |me |en|si|na |com |in|fi|ni|to |a|mor;"+
            "A |Su|a |fa|ce |um |di|a |na |gló|ria |eu |ve|rei;"+
            "Na |bem-|a|ven|tu|ran|ça |re|go|zi|jar|-me|-ei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "103": { 
        nome: "Bendize ó minha alma",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 45,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ben|di|ze, |ó |mi|nha |al|ma,"+
            "Ao |teu |a|ma|do |Se|nhor,"+
            "Ben|di|ze |o |No|me |do |e|ter|no |Deus;"+
            "É |gran|de |o |bem |que |te |faz;"+
            "Nun|ca |te |es|que|ças |do |a|mor"+
            "E |do |ce|les|ti|al |fa|vor;"+
            "É |E|le |Quem |per|do|a |os |er|ros |teus"+
            "E |te |dá |con|for|to |e |paz." ,

            "Ao |Pai |da |E|ter|ni|da|de,"+
            "Gran|de |em |be|ni|gni|da|de,"+
            "Gló|ria |e |ma|jes|ta|de,"+
            "Do|mí|nio, |hon|ra |e |lou|vor!" ,

            "To|do |o |meu |ser |ben|di|ga"+
            "Ao |Deus |que |dá |per|fei|ção;"+
            "O |bál|sa|mo |que |me |a|li|via |a |dor,"+
            "Do |Seu |san|to |tro|no |pro|vém;"+
            "E|le |a|fas|tou, |por |Seu |gran|de |a|mor,"+
            "De |mim |a |gran|de |mal|di|ção;"+
            "E, |aos |que |cum|prem |Su|a |e|ter|na |lei,"+
            "Re|ser|va |no |céu |su|mo |bem." ,

            "Oh! |Ben|di|zei|-O |sem|pre,"+
            "Vós |to|dos, |os |san|tos |Seus,"+
            "E |to|dos |vós |que |sem|pre |O |ser|vis,"+
            "O |Seu |No|me |en|gran|de|cei;"+
            "E|le |é |fi|el, |é |jus|to |e |bom,"+
            "E |pa|ra |to|do |o |sem|pre |é |Deus;"+
            "Vós |to|dos |que |sois |fi|lhos |do |Se|nhor,"+
            "A |E|le |so|men|te |te|mei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "104": { 
        nome: "Santo Santo és Senhor",
        compasso: "3/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 3,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |Ti, |ó |Se|nhor, |"+
            "Tri|bu|ta|mos |lou|vor, |"+
            "Hon|ra e |gló|ria |"+
            "Por |Teu |in|fi|ni|to |fa|vor. |" ,

            "San|to, |San|to |és, |Se|nhor; |"+
            "San|to, |San|to |és |Tu; |"+
            "Só |a |Ti |to|do o |lou|vor |per|ten|ce, |Se|nhor. |" ,

            "A|ma|do |Je|sus, |"+
            "Ce|les|tial |Rei |dos |reis, |"+
            "Bre|ve|men|te es|ta|rão, |"+
            "Jun|to a |Ti, |Teus |fi|éis. |" ,

            "San|to, |San|to |és, |Se|nhor; |"+
            "San|to, |San|to |és |Tu; |"+
            "Só |a |Ti |to|do o |lou|vor |per|ten|ce, |Se|nhor. |" ,

            "Em |bre|ve |no |céu, |"+
            "Teus |re|mi|dos, |Se|nhor, |"+
            "Vi|ve|rão |pa|ra |sem|pre |"+
            "No |rei|no |de a|mor. |" ,            

            "San|to, |San|to |és, |Se|nhor; |"+
            "San|to, |San|to |és |Tu; |"+
            "Só |a |Ti |to|do o |lou|vor |per|ten|ce, |Se|nhor." 
        ],
        temposVersos: [
            4,4,4,4,8,
            2,2,4,4,4,8,
            2,2,4,4,4,4,4,4,4,4,4,8,
            3,1,4,4,3,1,8,
            3,1,4,4,4,8,
            3,1,4,4,3,1,8,
            4,4,4,4,8,

            4,4,4,4,8,
            2,2,4,4,4,8,
            2,2,4,4,4,4,4,4,4,4,4,8,
            3,1,4,4,3,1,8,
            3,1,4,4,4,8,
            3,1,4,4,3,1,8,
            4,4,4,4,8,

            4,4,4,4,8,
            2,2,4,4,4,8,
            2,2,4,4,4,4,4,4,4,4,4,8,
            3,1,4,4,3,1,8,
            3,1,4,4,4,8,
            3,1,4,4,3,1,8,
            4,4,4,4,8
        ],
        notas: [
            'C4','F4','F4','F4','F4',
            'F4','G4','A4','A4','A4','A4',
            'F4','A4','C5','C5','C5','D5','C5','A4','A4','G4','G4','G4',
            'C5','C5','D5','C5','A4','G4','F4',
            'C5','C5','D5','C5','A4','G4',
            'C5','C5','D5','C5','A4','G4','F4',
            'A4','Bb4','A4','G4','F4',

            'C4','F4','F4','F4','F4',
            'F4','G4','A4','A4','A4','A4',
            'F4','A4','C5','C5','C5','D5','C5','A4','A4','G4','G4','G4',
            'C5','C5','D5','C5','A4','G4','F4',
            'C5','C5','D5','C5','A4','G4',
            'C5','C5','D5','C5','A4','G4','F4',
            'A4','Bb4','A4','G4','F4',

            'C4','F4','F4','F4','F4',
            'F4','G4','A4','A4','A4','A4',
            'F4','A4','C5','C5','C5','D5','C5','A4','A4','G4','G4','G4',
            'C5','C5','D5','C5','A4','G4','F4',
            'C5','C5','D5','C5','A4','G4',
            'C5','C5','D5','C5','A4','G4','F4',
            'A4','Bb4','A4','G4','F4'
        ],
        temposNotas: [
            4,4,4,4,8,
            2,2,4,4,4,8,
            2,2,4,4,4,4,4,4,4,4,4,8,
            3,1,4,4,3,1,8,
            3,1,4,4,4,8,
            3,1,4,4,3,1,8,
            4,4,4,4,8,

            4,4,4,4,8,
            2,2,4,4,4,8,
            2,2,4,4,4,4,4,4,4,4,4,8,
            3,1,4,4,3,1,8,
            3,1,4,4,4,8,
            3,1,4,4,3,1,8,
            4,4,4,4,8,

            4,4,4,4,8,
            2,2,4,4,4,8,
            2,2,4,4,4,4,4,4,4,4,4,8,
            3,1,4,4,3,1,8,
            3,1,4,4,4,8,
            3,1,4,4,3,1,8,
            4,4,4,4,8
        ]
    },
    "105": { 
        nome: "Volta ao teu lar Paternal!",
        compasso: "12/8",
        velMin: 44,
        velMed: 52,
        velMax: 60,
        inicio: 1,
        velMinMeiaHora: 28,
        velMedMeiaHora: 29,
        velMaxMeiaHora: 30,
        MeiaHora: "N",
        velX3: "S",
        versos: [
        "Ó |ir|mão |que |dei|xas|te |a |ca|sa |do |Se|nhor,"+
        "Não |mais |an|des |lon|ge |do |teu |Pai |ce|les|ti|al;"+
        "E|le |quer |per|do|ar|-te, |por |Seu |su|bli|me |a|mor;"+
        "Vol|ta |ao |teu |lar |Pa|ter|nal!" ,

        "Ao |lar |que |des|pre|zas|te, |oh! |vol|ta, |sem |tar|dar,"+
        "Pois |só |ne|le |en|con|tras |paz |e |con|so|la|ção;"+
        "Tu|as |cul|pas |con|fes|sa, |sem |na|da |o|cul|tar,"+
        "Gran|di|o|so |é |o |Deus |do |per|dão." ,

        "O |bom |Pai |te |es|pe|ra |e |quer |te |a|co|lher,"+
        "E, |nos |céus, |os |an|jos |se |re|go|zi|ja|rão;"+
        "De |vir|tu|de |e |luz |o |Se|nhor |te |quer |pro|ver,"+
        "E, |ao |fim, |te |dar |sal|va|ção." ,

        "Vai, |ó |pró|di|go, |vai"+
        "Do |pão |do |céu |te |sa|ci|ar;"+
        "Deus |te |quer |per|do|ar"+
        "E |teus |pe|ca|dos |la|var." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "106": { 
        nome: "Em nome do nosso Redentor",
        compasso: "3/4",
        velMin: 63,
        velMed: 67,
        velMax: 72,
        inicio: 3,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [ 
            "Em |no|me |do |nos|so |Re|den|tor |"+ 
            "O|ra|mos |a |Ti, |ó |Deus; |"+
            "Oh! |Vem |com |Teu |ca|lor, |"+
            "Com |Teu |di|vi|no a|mor; |"+ 
            "Vi|si|ta|-nos |des|de os |céus.", 
            
            "Ben|di|to |és |Tu, |ó |Cri|a|dor, |"+ 
            "Fi|el |e |po|ten|te |Deus; |"+ 
            "En|vi|a, |ó |Se|nhor, |"+ 
            "O |Teu |Con|so|la|dor; |"+ 
            "Con|for|ta |os |san|tos |Teus.", 
            
            "Com |fé |nos |pros|tra|mos, |ó |Se|nhor, |"+ 
            "Em |san|ta |a|do|ra|ção; |"+ 
            "A|cei|ta|-nos, |ó |Deus; |"+ 
            "Res|pon|de|-nos, |dos |céus; |"+ 
            "Oh! |Põe|-nos |em |co|mu|nhão." 
        ],
        temposVersos: [
            4, 8, 2, 2, 8, 4, 8, 4, 8,
            4, 8, 2, 2, 8, 4, 8,
            4, 6, 2, 2, 2, 8,
            4, 6, 2, 2, 2, 8,
            4, 8, 2, 2, 8, 4, 8
        ],
        notas: [
            'D4', 'G4', 'B4', 'G4', 'B4', 'A4', 'G4', 'E4', 'D4', 
            'D4', 'G4', 'B4', 'G4', 'B4', 'A4', 'D5',
            'B4', 'D5', 'B4', 'D5', 'B4', 'G4',
            'D4', 'E4', 'G4', 'G4', 'E4', 'D4',
            'D4', 'G4', 'B4', 'G4', 'B4', 'A4', 'G4'
        ],
        temposNotas: [
            4, 8, 2, 2, 8, 4, 8, 4, 8,
            4, 8, 2, 2, 8, 4, 8,
            4, 6, 2, 2, 2, 8,
            4, 6, 2, 2, 2, 8,
            4, 8, 2, 2, 8, 4, 8
        ]
    },
    "107": { 
        nome: "O fim de tudo chegará",
        compasso: "6/8",
        velMin: 40,
        velMed: 45,
        velMax: 50,
        inicio: 6,
        velMinMeiaHora: 26,
        velMedMeiaHora: 27,
        velMaxMeiaHora: 28,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "O |fim |de |tu|do |che|ga|rá, |ou|vi, |pe|ca|do|res,"+
            "Só |Cris|to |vos |per|do|a|rá |e |vi|da |vos |da|rá;"+
            "O |fim |es|tá |bem |per|to, |bem |per|to, |bem |per|to,"+
            "Fa|zei |en|tão |con|cer|to |com |Quem |vos |quer |sal|var;"+
            "Ó |vin|de , |con|tri|tos, |de|pres|sa, |sem |tar|dar,"+
            "A |Cris|to |pi|e|do|so, |que |a |gló|ria |vos |quer |dar." ,

            "Ar|ren|pen|dei|-vos |e |a|cei|tai |a |Cris|to, |o |Cor|dei|ro;"+
            "A |E|le |as |cul|pas |con|fes|sai |e |o |mun|do |rei|ei|tai;"+
            "Não |des|pre|zeis |a |sor|te, |pois |gran|de |é |es|sa |sor|te"+
            "Que |li|vra|rá |da |mor|te |e |do |e|ter|no |ar|dor;"+
            "Da |i|ra |vin|dou|ra |vos |li|vra |o |Re|den|tor;"+
            "Per|fei|to |re|fú|gio |é |Cris|to, |o |Sal|va|dor." ,

            "Ó |vin|de |já |vos |en|tre|gar, |Je|sus |vos |con|vi|da"+
            "E |quer |a |Deus |vos |a|do|tar, |tam|bém |he|ran|ça |dar;"+
            "É |gran|de |Seu |a|fe|to, |di|vi|no |a|fe|to,"+
            "É |o |Seu |a|mor, |per|fei|to, |po|ten|te |a |sal|var;"+
            "Ó |vin|de |de|pres|sa, |as |bên|ções |des|fru|tar,"+
            "Com |gló|ria |e|ter|na |i|reis |no |céu |rei|nar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "108": { 
        nome: "É Jesus a Fonte de riqueza",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "É |Je|sus |a |Fon|te |de |ri|que|za, |"+
            "Nos|so Es|cu|do, |nos|sa |For|ta|le|za; |"+
            "É |a |nos|sa |Luz, |nos|so |Pre|cur|sor, |"+
            "É o |ca|mi|nho e |bom |Pas|tor. |",

            "É |Je|sus |a |Ro|cha |pre|ci|o|sa, |"+
            "A |Ver|da|de e|ter|na e |glo|ri|o|sa; |"+
            "D'E|le |te|mos |fé |pa|ra |O |se|guir |"+
            "E |rei|nar|mos |no |por|vir. |",

            "É |Je|sus |a |nos|sa e|ter|na |Sor|te, |"+
            "Su|a |o|bra |a|bo|liu |a |mor|te; |"+
            "Der|ra|mou |na |cruz |san|gue ex|pi|a|dor; |"+
            "Res|ga|tou|-nos |o |Se|nhor. |",

            "É |Je|sus |o |Rei |vi|to|ri|o|so, |"+
            "O |Su|bli|me, |San|to e |Po|de|ro|so; |"+
            "É |o Au|tor |da |fé |e |Con|su|ma|dor; |"+
            "É, |de |tu|do, |o |Se|nhor."

        ],
        temposVersos: [
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12,

            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12,

            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12,

            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12
        ],
        notas: [
            'D4','G4','B4','B4','B4','A#4','B4','C5','B4','A4',
            'D4','F#4','A4','A4','A4','G#4','A4','B4','A4','G4',
            'G4','A4','G4','F#4','C5','E4','F#4','E4','D4','B4',
            'B4','E5','D5','B4','G4','A4','G4',

            'D4','G4','B4','B4','B4','A#4','B4','C5','B4','A4',
            'D4','F#4','A4','A4','A4','G#4','A4','B4','A4','G4',
            'G4','A4','G4','F#4','C5','E4','F#4','E4','D4','B4',
            'B4','E5','D5','B4','G4','A4','G4',

            'D4','G4','B4','B4','B4','A#4','B4','C5','B4','A4',
            'D4','F#4','A4','A4','A4','G#4','A4','B4','A4','G4',
            'G4','A4','G4','F#4','C5','E4','F#4','E4','D4','B4',
            'B4','E5','D5','B4','G4','A4','G4',

            'D4','G4','B4','B4','B4','A#4','B4','C5','B4','A4',
            'D4','F#4','A4','A4','A4','G#4','A4','B4','A4','G4',
            'G4','A4','G4','F#4','C5','E4','F#4','E4','D4','B4',
            'B4','E5','D5','B4','G4','A4','G4'
        ],
        temposNotas: [
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12,

            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12,

            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12,

            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,2,2,2,2,4,8,
            2,2,4,4,4,2,2,4,4,4,
            2,2,10,2,2,2,12
        ]
    },
    "109": { 
        nome: "Vem ó Senhor ajudar-me",
        compasso: "6/8",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 69,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Vem, |ó |Se|nhor, |a|ju|dar|-me"+
            "Nas |mi|nhas |tri|bu|la|ções;"+
            "Eu, |con|fi|an|te, |es|pe|ro"+
            "Tu|as |li|ber|ta|ções." ,

            "Vem |a|ju|dar|-me |sem|pre,"+
            "Ó |for|te |De|fen|sor,"+
            "Pa|ra |que |nes|ta |vi|da"+
            "Pos|sa |ser |ven|ce|dor." ,

            "Vem, |ó |Se|nhor, |a|ju|dar|-me"+
            "Nes|te |meu |pe|re|gri|nar;"+
            "Nas |pro|va|ções |e |lu|tas"+
            "Po|des |me |a|bri|gar." ,

            "Vem, |ó |Se|nhor, |a|ju|dar|-me"+
            "Pa|ra |po|der |ba|ta|lhar;"+
            "Re|ves|te|-me |de |for|ça,"+
            "Pa|ra |não |va|ci|lar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "110": { 
        nome: "Vigiai irmãos",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vi|gi|ai, |ir|mãos, |em |to|do |o |tem|po,"+
            "Co|mo |en|si|na |o |Se|nhor;"+
            "E, |o|ran|do, |a|cha|reis |sus|ten|to,"+
            "Sen|ti|reis |maior |vi|gor." ,

            "Oh! |Vi|gi|ai |em |to|do |o |tem|po"+
            "Pa|ra |que |o |co|ra|ção"+
            "Sin|ta |vi|gor, |tam|bém |a|len|to,"+
            "E |de |Deus |a |san|ta |un|ção." ,

            "Vi|gi|ai, |pois |não |sa|beis |a |ho|ra"+
            "Em |que |o |Se|nhor |vi|rá;"+
            "E|le |diz, |tam|bém |a |nós |a|go|ra,"+
            "Que |mui |bre|ve |vol|ta|rá." ,

            "Vi|gi|an|do, |a|ten|tos, |a|guar|de|mos"+
            "Nos|so |a|ma|do |Sal|va|dor;"+
            "Nos|sas |ves|tes |bran|cas |con|ser|ve|mos;"+
            "Vi|gie|mos |com |fer|vor."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "111": { 
        nome: "Do sepulcro ressurgiu triunfante",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 33,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Do |se|pul|cro, |eis |que |tri|un|fan|te,"+
            "Res|sur|giu |o |Fi|lho |do |e|ter|no |Deus"+
            "Pa|ra |dar|-nos |Su|a |fé |cons|tan|te"+
            "E |ao |fim |le|var|-nos |pa|ra |os |céus."+
            "Foi |Je|sus, |o |Mes|tre, |se|pul|ta|do,"+
            "Mas |a |mor|te |não |O |pô|de |mais |re|ter;"+
            "Quem |não |ti|nha |em |Si |ne|nhum |pe|ca|do,"+
            "Ve|io |pe|lo |pe|ca|dor |mor|rer." ,

            "Quan|do |as |dis|cí|pu|las |che|ga|ram"+
            "Com |a|ro|mas, |pa|ra |un|gi|rem |o |Se|nhor,"+
            "No |se|pul|cro |não |mais |O |a|cha|ram,"+
            "Pois |da |mor|te |fo|ra |ven|ce|dor."+
            "Vi|ram |an|jos |que |lhes |in|for|ma|ram"+
            "Que |en|tre |os |mor|tos |Cris|to |não |es|ta|va |mais;"+
            "Chei|as |de |a|le|gri|a |re|tor|na|ram,"+
            "Con|tem|plan|do |ma|ra|vi|lhas |tais." ,

            "Aos |a|pós|to|los |a|pre|sen|tou|-Se,"+
            "E |lhes |dis|se: |Se|ja |em |vós |a |Mi|nha |paz"," "+
            "A |tris|te|za |em |gló|ria |trans|for|mou|-se"+
            "Pe|la |su|a |a|pa|ri|ção |ve|raz."+
            "Em |Je|ru|sa|lém |per|ma|ne|ce|ram;"+
            "Re|ves|ti|dos |fo|ram |do |po|der |de |Deus;"+
            "As |vir|tu|des |e|les |re|ce|be|ram;"+
            "Ve|io |o |Dom |ben|di|to |des|de |os |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "112": { 
        nome: "Sigamos sempre ao Senhor",
        compasso: "6/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 6,
        velMinMeiaHora: 69,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ir|mãos, |a|van|te |com |nos|so |Rei,"+
            "O |san|to |Li|ber|ta|dor;"+
            "Per|ma|ne|ça|mos |na |Su|a |lei,"+
            "Si|ga|mos |sem|pre |ao |Se|nhor." ,

            "Je|sus |nos |con|du|zi|rá |aos |céus,"+
            "Si|ga|mos |sem|pre |ao |Se|nhor;"+
            "Ha|bi|ta|re|mos |com |nos|so |Deus"+
            "No |rei|no |de |es|plen|dor." ,

            "O |E|van|ge|lho |nos |con|du|ziu"+
            "A |Cris|to, |o |Re|den|tor,"+
            "Que, |nos|sas |al|mas, |do |mal |re|miu;"+
            "Ser|va|mos |sem|pre |ao |Se|nhor." ,

            "De|ve|mos |sem|pre |o|be|de|cer"+
            "Aos |Seus |pre|cei|tos |de |a|mor"+
            "E |Seus |con|se|lhos |em |nós |re|ter;"+
            "A|me|mos |sem|pre |ao |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "113": { 
        nome: "O Senhor seja louvado",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Se|nhor |se|ja |lou|va|do,"+
            "Pois |man|dou|-nos |Su|a |luz;"+
            "En|to|e|mos, |ó |re|mi|dos,"+
            "Hi|nos |ao |Se|nhor |Je|sus." ,

            "E|xal|ta|do, |a|cla|ma|do,"+
            "Se|ja |Cris|to, |o |Re|den|tor;"+
            "D'E|le |te|mos |a |vi|tó|ria"+
            "Por |seu |san|gue |jus|to |e |re|mi|dor." ,

            "O |Se|nhor |se|ja |lou|va|do"+
            "Pe|los |res|ga|ta|dos |Seus,"+
            "Que |de|se|jam, |an|si|o|sos,"+
            "Ver |a |gló|ria |do |bom |Deus." ,

            "O |Se|nhor |se|ja |lou|va|do,"+
            "Pois |nos |deu |o |Seu |Pe|nhor:"+
            "Seu |Es|pí|ri|to |e|ter|no,"+
            "Di|vi|nal |Con|so|la|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "114": { 
        nome: "Clama ao Mestre Cristo Jesus",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quan|do |te |sen|ti|res |a|ba|ti|do,"+
            "Cris|to |te |es|ten|de |a |Su|a |mão;"+
            "E|le |é |o |san|to |e |ver|da|dei|ro |A|mi|go,"+
            "E|le |é |a |tu|a |por|ção." ,

            "Cla|ma |ao |Mes|tre, |Cris|to |Je|sus;"+
            "D'E|le |o |po|der |sen|ti|rás;"+
            "E|le |dis|se: |Eis |que |es|tou |con|vos|co; "+
            "Cris|to |é |Quem |te |con|duz." ,

            "Quan|do |es|ti|ver|es |per|tur|ba|do,"+
            "Bus|ca |de |Cris|to |paz |e |vi|gor;"+
            "Não |te |dei|xará |de|sa|ni|ma|do"+
            "O |teu |fi|el |Sal|va|dor." ,

            "Vin|do |so|bre |ti |ar|den|te |pro|va,"+
            "Ba|te |à |por|ta |do |Cri|a|dor"+
            "Que, |por |Cris|to, |as |for|ças |te |re|no|va"+
            "E |te |fa|rá |ven|ce|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "115": { 
        nome: "Minha alma engrandece...",
        compasso: "3/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 1,
        velMinMeiaHora: 58,
        velMedMeiaHora: 61,
        velMaxMeiaHora: 64,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Mi|nha |al|ma |en|gran|de|ce |ao |meu |Sal|va|dor,"+
            "Que |pa|ra |mim |a|ten|tou;"+
            "Meu |es|pí|ri|to |sen|te |o |gran|de |a|mor |de |Deus"+
            "Que |me |per|do|ou."+
            "Re|di|mi|da |por |Seu |gran|de |fa|vor,"+
            "Mi|nha |al|ma |lou|va |a |Deus."+
            "Com |Seu |san|gue |pre|ci|o|so,"+
            "O |Re|den|tor |pa|gou |os |pe|ca|dos |meus." ,

            "Sor|te |en|tre |os |re|mi|dos |me |con|ce|deu |Je|sus,"+
            "O |meu |Sal|va|dor;"+
            "Deu|-me |a |li|ber|da|de |pa|ra |ser|vir"+
            "A |Deus |com |sin|ce|ro |a|mor;"+
            "Cris|to |con|ver|teu |o |meu |co|ra|ção"+
            "Com |o |Seu |e|ter|no |po|der"+
            "E |as |tre|vas |do |mal |tam|bém |dis|si|pou;"+
            "A|go|ra |eu |pos|so |ver." ,

            "Pe|la |luz |da |Pa|la|vra |sin|to |o |Se|nhor |que,"+
            "Com |a|mor, |me |con|duz;"+
            "For|ças |re|ce|be|rei, |vir|tu|de,"+
            "Sa|ber |e |fé |no |Se|nhor |Je|sus;"+
            "Fi|nal|men|te |en|tra|rei |lá |no |céu"+
            "Pa|ra |ver |a |fa|ce |de |Deus;"+
            "Oh! |Que |fe|li|ci|da|de |Cris|to |me |deu,"+
            "Pois |vou |ha|bi|tar |nos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "116": { 
        nome: "Amo ao Senhor",
        compasso: "6/8",
        velMin: 108,
        velMed: 123,
        velMax: 138,
        inicio: 6,
        velMinMeiaHora: 69,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|mo |ao |Se|nhor, |pois |ou|viu|-me |quan|do |cla|mei;"+
            "E|le |in|cli|nou |Seus |ou|vi|dos |quan|do |o|rei;"+
            "Ti|ve |tris|te|za, |ti|ve |a|fli|ção,"+
            "Mas |Deus |man|dou|-me |con|so|la|ção." ,

            "É |pi|e|do|so |e |su|bli|me, |o |jus|to |Deus;"+
            "E|le |tem |mi|se|ri|cór|di|a |dos |san|tos |Seus."+
            "Vol|ta, |mi|nh'al|ma, |a |des|can|sar,"+
            "Bên|ções |pre|ci|o|sas |Deus |vai |te |dar." ,

            "Meus |pés |li|vras|te |da |que|da, |ó |meu |Se|nhor,"+
            "E |pres|er|vas|te |do |pran|to |Teu |ser|vi|dor."+
            "Que |pos|so |dar|-Te |por |es|se |bem,"+
            "Que |tão |so|men|te |de |Ti |pro|vém?!" ,

            "E|le|va|rei |meus |lou|vo|res |a |Ti, |ó |Deus,"+
            "Di|an|te |de |to|do |o |Teu |po|vo, |nos |á|tri|os |Teus."+
            "Teu |san|to |No|me |in|vo|ca|rei;"+
            "Com |mi|nha |vi|da |Te |ser|vi|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "117": { 
        nome: "Jesus habita em meu coração",
        compasso: "6/8",
        velMin: 132,
        velMed: 142,
        velMax: 152,
        inicio: 6,
        velMinMeiaHora: 80,
        velMedMeiaHora: 82,
        velMaxMeiaHora: 85,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |Sal|va|dor |vi|ven|te |eu |ser|vo |com |a|mor,"+
            "Por |Su|a |vi|da |te|nho |re|al |con|so|la|ção;"+
            "Que |vi|ve, |é |bem |cer|to, |Je|sus, |o |Re|den|tor,"+
            "Pois |Su|a |voz |eu |sin|to |no |co|ra|ção." ,

            "Je|sus, |Je|sus |ha|bi|ta |em |meu |co|ra|ção;"+
            "An|dar |com |E|le |e |ou|vir|-Lhe"+
            "A |voz |é |pa|ra |mim,|um |pra|zer."+
            "Je|sus, |Je|sus, |Au|tor |da |sal|va|ção,"+
            "É |a |fon|te |e|ter|na |do |sa|ber, |é |a |Vi|da |do |meu |ser." ,

            "Em |mim |se |ma|ni|fes|ta |a |vi|da |de |Je|sus,"+
            "Por |fé |es|tou |u|ni|do |ao |Pai |ce|les|ti|al,"+
            "E |na|da |des|te |mun|do |a|go|ra |me |se|duz,"+
            "Pois |Cris|to |me |se|pa|ra |de |to|do |mal." ,

            "Ju|bi|la, |sim, |ju|bi|la |e |can|ta, |ó |cris|tão,"+
            "A|le|gre|men|te |e|xal|ta |a |Cris|to |ex|cel|so |Rei;"+
            "Bem |per|to |já |se |en|con|tra |a |tu|a |re|den|ção,"+
            "Con|ser|va|-te |u|ni|do |à |Su|a |grei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "118": { 
        nome: "Fiel Salvador é Jesus",
        compasso: "6/8",
        velMin: 100,
        velMed: 110,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 62,
        velMedMeiaHora: 65,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Fi|el |Sal|va|dor |é |Je|sus, |o |meu |Rei,"+
            "O |meu |po|de|ro|so |Se|nhor;"+
            "Es|tan|do |em |pe|ri|go, |re|fú|gio |te|rei"+
            "À |som|bra |do |meu |Re|den|tor." ,

            "Es|tou |a|bri|ga|do |em |meu |Sal|va|dor,"+
            "Ne|nhum |mal |me |pode |a|tin|gir."+
            "Je|sus |tem |por |mim |en|tra|nhá|vel |a|mor,"+
            "A|mor |que |não |pos|so |ex|pri|mir!"+
            "A|mor |que |não |pos|so |ex|pri|mir!" ,

            "Por |no|me, |Je|sus, |o |Se|nhor, |me |cha|mou,"+
            "Mi|nh'al|ma |pre|ci|o|sa |Lhe |é;"+
            "Com |Seu |gran|de |a|mor |E|le |me |cir|cun|dou,"+
            "Fir|mou|-me |na |gra|ça |e |na |fé." ,

            "A |fú|ria |das |á|guas |ja|mais |te|me|rei,"+
            "Je|sus |me |da|rá |Su|a |mão;"+
            "Pas|san|do |no |fo|go, |não |me |quei|ma|rei,"+
            "Com |Su|a |fi|el |pro|te|ção." ,
            
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "119": { 
        nome: "Luz aos meus pés é a Tua Palavra",
        compasso: "4/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 1,
        velMinMeiaHora: 60,
        velMedMeiaHora: 62,
        velMaxMeiaHora: 65,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Luz |aos |meus |pés |é |Tu|a |sã |Pa|la|vra, |"+
            "Luz |pa|ra o |meu |ca|mi|nho, |ó |Se|nhor; |"+
            "E|la |sus|tém |mi|nh'al|ma |e |me |sal|va |"+
            "De |to|do o |mal, |no |mun|do |se|du|tor." ,

            "A |ser |per|fei|to, |Tu|a |lei |me en|si|na; |"+
            "É o |que |de|se|jo, |ó |Se|nhor, |meu |Deus; |"+
            "A |mi|nha |men|te |e|la |i|lu|mi|na |"+
            "E |me |con|ser|va |nos |ca|mi|nhos |Teus." ,

            "Me|di|ta|rei |no |sá|bio |Teu |con|se|lho; |"+
            "Ne|le |cons|tan|te|men|te |pen|sa|rei, |"+
            "Pois |e|le |é |ce|les|ti|al |es|pe|lho; |"+
            "Em |Teus |pre|cei|tos |me |a|le|gra|rei." ,

            "Guar|do |em |mim |os |Teus |en|si|na|men|tos |"+
            "Que |por |a|mor |en|vi|as, |ó |Se|nhor; |"+
            "E |cum|pri|rei |Teus |san|tos |man|da|men|tos |"+
            "Por |Je|sus |Cris|to, |jus|to |Re|den|tor." ,

        ],
        temposVersos: [
            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16,

            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16,

            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16,

            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16
        ],
        notas: [
            'G4','Bb4','Ab4','G4','G4','G4','F4','G4','Ab4','Eb4','D4',
            'F4','Eb4','D4','Eb4','G4','D5','C5','Bb4','Ab4','G4',
            'G4','Bb4','Ab4','G4','G4','Ab4','Eb5','D5','C5','C5','B4',
            'B4','C5','D5','Eb5','Bb4','F4','E4','F4','G4','Eb4',

            'G4','Bb4','Ab4','G4','G4','G4','F4','G4','Ab4','Eb4','D4',
            'F4','Eb4','D4','Eb4','G4','D5','C5','Bb4','Ab4','G4',
            'G4','Bb4','Ab4','G4','G4','Ab4','Eb5','D5','C5','C5','B4',
            'B4','C5','D5','Eb5','Bb4','F4','E4','F4','G4','Eb4',

            'G4','Bb4','Ab4','G4','G4','G4','F4','G4','Ab4','Eb4','D4',
            'F4','Eb4','D4','Eb4','G4','D5','C5','Bb4','Ab4','G4',
            'G4','Bb4','Ab4','G4','G4','Ab4','Eb5','D5','C5','C5','B4',
            'B4','C5','D5','Eb5','Bb4','F4','E4','F4','G4','Eb4',

            'G4','Bb4','Ab4','G4','G4','G4','F4','G4','Ab4','Eb4','D4',
            'F4','Eb4','D4','Eb4','G4','D5','C5','Bb4','Ab4','G4',
            'G4','Bb4','Ab4','G4','G4','Ab4','Eb5','D5','C5','C5','B4',
            'B4','C5','D5','Eb5','Bb4','F4','E4','F4','G4','Eb4'
        ],
        temposNotas: [
            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16,

            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16,

            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16,

            8,4,4,12,4,4,4,4,4,8,8,
            8,4,4,4,4,4,4,12,4,16,
            8,4,4,12,4,4,4,4,4,8,6,
            2,8,8,8,8,6,2,4,4,16

        ]
    },
    "120": { 
        nome: "Nossa cruz tomemos",
        compasso: "4/4",
        velMin: 86,
        velMed: 89,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 50,
        velMedMeiaHora: 52,
        velMaxMeiaHora: 55,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |ir|mãos, |de|ve|mos |nos |re|nun|ci|ar"+
            "E, |em |ca|da |di|a, |nos|sa |cruz |to|mar;"+
            "Pe|la |fé |si|ga|mos |ao |Se|nhor |Je|sus,"+
            "Ao |ce|les|te |e |e|ter|no |rei|no |E|le |nos |con|duz." ,

            "Nos|sa |cruz |to|me|mos, |a|ma|dos,"+
            "Ca|mi|nhe|mos |na |luz,"+
            "Fir|mes |nas |pi|sa|das"+
            "Do |Se|nhor |Je|sus." ,

            "Deus |da|rá |vir|tu|de |pa|ra |su|por|tar"+
            "To|do |o |vi|tu|pé|rio |que |se |a|pre|sen|tar;"+
            "A |ter|re|na |vi|da |bre|ve |fin|da|rá,"+
            "Mas |a |vi|da |sem|pi|ter|na |re|ser|va|da |es|tá." ,

            "Bem-|a|ven|tu|ra|dos |so|mos, |ó |ir|mãos,"+
            "Pois |já |fo|mos |fei|tos |dos |céus, |ci|da|dãos;"+
            "Se|ja |a |nos|sa |vi|da |con|sa|gra|da |a |Deus,"+
            "Que |da|rá |re|al |te|sou|ro |aos |re|mi|dos |Seus."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "121": { 
        nome: "O meu socorro vem do Senhor",
        compasso: "9/8",
        velMin: 120,
        velMed: 132,
        velMax: 144,
        inicio: 7,
        velMinMeiaHora: 75,
        velMedMeiaHora: 77,
        velMaxMeiaHora: 80,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "O |meu |so|cor|ro |vem |do |Se|nhor,"+
            "Que |é, |do |u|ni|ver|so, |o |Cri|a|dor;"+
            "Tu|do |se |mo|ve |por |Seu |po|der,"+
            "Sem|pre, |por |E|le, |hei |de |ven|cer." ,

            "É |Deus |Quem |guar|da |a |Su|a |i|gre|ja,"+
            "Não |a|dor|me|ce, |nem |tos|que|ne|ja;"+
            "Não |dei|xará |teu |pé |va|ci|lar"+
            "Nas |lu|tas |que |tens |de |en|fren|tar." ,

            "Em |to|do |o |tem|po |an|do |com |Deus,"+
            "Que |me |pro|me|te |vi|da |nos |céus;"+
            "Se |eu |for |hu|mil|de, |me |guar|da|rá,"+
            "Pa|ra |a |gló|ria |me |le|va|rá." ,

            "Eu |glo|ri|fi|co |ao |Cri|a|dor,"+
            "Por |ter |man|da|do |o |Sal|va|dor"+
            "Pa|ra |me |dar |fé, |vi|da |e |per|dão,"+
            "E, |no |Seu |rei|no, |o |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "122": { 
        nome: "Alegrei-me quando me disseram...",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eu |a|le|grei|-me |quan|do |me |dis|se|ram:"+
            "Oh! |va|mos |pa|ra |a |ca|sa |do |Se|nhor"," "+
            "Pois |ne|la |os |san|tos |sem|pre |re|ce|be|ram"+
            "As |bên|ções |do |e|ter|no |Cri|a|dor." ,

            "So|mos |a |na|ção |a|ben|ço|a|da,"+
            "Na|ção |de |Deus, |u|ni|da |em |Seu |a|mor,"+
            "So|mos |su|a |ge|ra|ção |a|ma|da;"+
            "Por |nós |é |Deus, |o |Cri|a|dor." ,

            "A |san|ta, |glo|ri|o|sa |lei |e|ter|na,"+
            "Na |Su|a |ca|sa |en|si|na |o |Se|nhor;"+
            "Ou|vi|mos |ne|la |sem|pre |a |voz |Pa|ter|na"+
            "E |os |ju|í|zos |de |Deus, |For|ma|dor." ,

            "Paz |ha|ja |en|tre |nós |con|ti|nu|a|men|te,"+
            "Pros|pe|ri|da|de |e |ce|les|ti|al |a|mor;"+
            "Por |es|sa |paz |di|vi|na,|ex|ce|len|te,"+
            "A |Deus |o|re|mos |sem|pre |com |fer|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "123": { 
        nome: "Ó Jesus és meu Guardião",
        compasso: "3/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 45,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 50,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Je|sus, |és |meu |Guar|di|ão, |"+ 
            "Tu |me |li|vras |de |to|do o |mal; |"+ 
            "Mes|mo em |pro|va e |tri|bu|la|ção, |"+ 
            "És |meu |Re|fú|gio |ce|les|ti|al.", 
            
            "Meu |te|sou|ro |és |Tu, |Je|sus, |"+ 
            "Mi|nha |Vi|da, |meu |Ga|lar|dão. |"+ 
            "Nes|te |mun|do |és |mi|nha |Luz |"+ 
            "E |me |con|du|zes |com |Tu|a |mão.",
            
            "Pe|la |fé |e |por |Teu |a|mor, |"+
            "Vou |se|guin|do |a |Ti, |Je|sus, |"+ 
            "Pe|la |sen|da |do |Cri|a|dor; |"+ 
            "Bre|ve es|ta|rei |no |Teu |lar |de |luz."
        ],
        temposVersos: [
            8, 4, 4, 4, 4, 8, 4, 12,
            8, 4, 4, 4, 4, 8, 4, 12,
            8, 4, 4, 4, 4, 8, 4, 12,
            4, 4, 4, 4, 4, 4, 8, 4, 12
        ],
        notas: [
            'F4', 'G4', 'F4', 'Bb4', 'D5', 'D5', 'C5', 'Bb4',
            'Bb4', 'Bb4', 'Bb4', 'A4', 'Bb4', 'C5', 'D5', 'C5',
            'F4', 'G4', 'F4', 'Bb4', 'D5', 'D5', 'Eb5', 'D5',
            'Bb4', 'A4', 'G4', 'F4', 'Eb5', 'D5', 'D5', 'C5', 'Bb4'            
        ],
        temposNotas: [
            8, 4, 4, 4, 4, 8, 4, 12,
            8, 4, 4, 4, 4, 8, 4, 12,
            8, 4, 4, 4, 4, 8, 4, 12,
            4, 4, 4, 4, 4, 4, 8, 4, 12
        ]
    },
    "124": { 
        nome: "Vivo na graça",
        compasso: "6/4",
        velMin: 80,
        velMed: 88,
        velMax: 96,
        inicio: 1,
        velMinMeiaHora: 46,
        velMedMeiaHora: 49,
        velMaxMeiaHora: 52,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vi|vo |na |gra|ça |do |Fi|lho |de |Deus,"+
            "Re|ge|ne|ra|do |por |E|le |es|tou;"+
            "Pa|ra |Seu |rei|no |de |gló|ria |nos |céus,"+
            "Cris|to |Je|sus |já |me |pre|des|ti|nou." ,

            "Vi|vo |na |gra|ça |do |meu |Sal|va|dor,"+
            "Vi|vo |con|ten|te, |em |paz |e |a|mor;"+
            "Vi|vo |e|xal|tan|do |ao |meu |Cri|a|dor;"+
            "Sin|to |em |mi|nh'al|ma |di|vi|no |fer|vor." ,

            "Pu|ri|fi|ca|do |por |Cris|to |Je|sus,"+
            "Sin|to |em |mim |Seu |su|bli|me |a|mor;"+
            "An|do |na |Su|a |jus|ti|ça |e |luz,"+
            "E |nes|te |mun|do |se|rei |ven|ce|dor." ,

            "Es|te |é |o |de|se|jo |do |meu |co|ra|ção:"+
            "Ser |re|ves|ti|do |da |vi|da |e|ter|nal;"+
            "Ser |co|mo |é |Cris|to, |o |per|fei|to |Va|rão,"+
            "E |ter |en|tra|da |no |lar |di|vi|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "125": { 
        nome: "Mais grato a Ti",
        compasso: "6/8",
        velMin: 104,
        velMed: 112,
        velMax: 120,
        inicio: 4,
        velMinMeiaHora: 59,
        velMedMeiaHora: 61,
        velMaxMeiaHora: 64,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Mais |gra|to |a |Ti, |ó |bon|do|so |Se|nhor,"+
            "Faz|-me, |por |Teu |in|fi|ni|to |po|der;"+
            "O |que |fi|zes|te |em |mim, |por |a|mor,"+
            "Ho|mem |ne|nhum |po|de|ria |fa|zer." ,

            "Mais |gra|to |a |Ti, |mais |gra|to |a |Ti,"+
            "De |co|ra|ção, |ó |Se|nhor, |que|ro |ser;"+
            "Ce|les|te |dá|di|va |eu |re|ce|bi,"+
            "Que|ro |o |Teu |No|me, |ó |Deus, |en|gran|de|cer." ,

            "Tu |con|fir|mas|te |o |meu |co|ra|ção"+
            "Com |a |Pa|la|vra |da |fé |e |da |paz,"+
            "E |en|vi|as|te |ve|raz |sal|va|ção"+
            "Que |a |cer|te|za |da |gló|ria |me |traz." ,

            "Teu |fi|lho |sou, |por |Je|sus, |ó |bom |Deus,"+
            "Pe|lo |Es|pí|ri|to |de |a|do|ção;"+
            "Um |ci|da|dão |me |fi|zes|te, |dos |céus,"+
            "Pa|ra |her|dar |di|vi|nal |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "126": { 
        nome: "Levemos a mensagem de amor",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Le|ve|mos |a |men|sa|gem |de |a|mor"+
            "Aos |que |não |têm |a |gra|ça |do |Se|nhor;"+
            "A|nun|ci|an|do |o |per|dão |e |a |di|vi|na |sal|va|ção"+
            "De |Je|sus, |o |re|den|tor." ,

            "De |Je|sus, |Su|a |luz"+
            "Le|va|re|mos |aos |que"+
            "Es|tão |na |es|cu|ri|dão;"+
            "A|nun|ci|e|mos, |ir|mãos,"+
            "Que |em |Cris|to, |o |Sal|va|dor,"+
            "Tem |per|dão |o |pe|ca|dor." ,

            "Por |ter|ra, |pe|lo |ar |e |pe|lo |mar,"+
            "O |E|van|ge|lho |va|mos |pro|cla|mar;"+
            "Fa|la|re|mos |do |a|mor |de |Je|sus, |o |Sal|va|dor,"+
            "Que |re|di|me |o |pe|ca|dor." ,

            "Ain|da |mui|tos |no |pe|ca|do |es|tão,"+
            "Sem |co|nhe|cer |tão |gran|de |sal|va|ção;"+
            "A|nun|ci|e|mos|-lhes |a |luz"+
            "Que |se |en|con|tra |em |Je|sus,"+
            "Luz |que |sal|va |o |pe|ca|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "127": { 
        nome: "Meu bom Jesus Contigo almejo estar",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Meu |bom |Je|sus, |Con|ti|go |al|me|jo |es|tar"+
            "E, |só |por |Ti, |vi|ver |e |ca|mi|nhar,"+
            "Pa|ra |po|der |me |pro|te|ger |do |mal"+
            "E |ao |fi|nal, |vi|ver |na |pá|tria |e|ter|nal." ,

            "Vem, |Je|sus, |Re|den|tor,"+
            "Nas |lu|tas |me |a|ju|dar,"+
            "Em |Ti |de|se|jo |in|tei|ra|men|te |con|fi|ar." ,

            "Meu |bom |Je|sus, |ó |Fon|te |de |a|mor,"+
            "Al|me|jo |ou|vir |a |Tu|a |voz, |Se|nhor;"+
            "Faz|-me |vi|ver |cum|prin|do |o |Teu |que|rer,"+
            "E |rei|ei|tan|do |o |mun|do |e |to|do |o |seu |pra|zer." ,

            "Meu |bom |Je|sus, |sus|tém |meu |co|ra|ção,"+
            "Lon|ge |de |Ti |não |há |con|so|la|ção;"+
            "Ó |Sal|va|dor, |Con|ti|go |al|me|jo |es|tar;"+
            "Com |to|da |a |al|ma |que|ro |a |Ti |me |con|sa|grar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "128": { 
        nome: "Teu filho sou ó Criador",
        compasso: "6/8",
        velMin: 108,
        velMed: 120,
        velMax: 132,
        inicio: 4,
        velMinMeiaHora: 66,
        velMedMeiaHora: 69,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Deus, |meu |Pai, |gra|ças |Te |dou"+
            "Por |des|fru|tar |da |Tu|a |luz;"+
            "Pros|pe|ra|rei |em |Ti, |Se|nhor,"+
            "Tu|a |Pa|la|vra |me |con|duz." ,

            "Teu |fi|lho |sou, |ó |Cri|a|dor,"+
            "Me |a|do|tas|te, |em |Je|sus;"+
            "San|to |e |su|bli|me |é |Teu |a|mor;"+
            "Vi|vo |fe|liz |em |Tu|a |luz." ,

            "Faz|-me, |Se|nhor, |um |va|so |Teu,"+
            "Chei|o |de |fé |e |de |a|mor,"+
            "Pa|ra |po|der |sem|pre |hon|rar"+
            "Teu |san|to |No|me, |ó |Se|nhor." ,

            "A |Ti, |Se|nhor, |re|cor|re|rei,"+
            "Pa|ra |po|der |me |a|bri|gar"+
            "De |to|do |o |mal |e |ten|ta|ção,"+
            "En|quan|to |a|qui |pe|re|gri|nar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "129": { 
        nome: "Salvo estou por Jesus",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cer|to |es|tou |de |que |Cris|to |Je|sus |é |meu |Rei,"+
            "De |mi|nh'al|ma |é |o |Pro|te|tor;"+
            "Vou |a|van|te |com |fé, |jun|to |à |Su|a |grei,"+
            "Com |a |for|ça |do |meu |Sal|va|dor." ,

            "Sal|vo |es|tou |por |Je|sus,"+
            "O |meu |bom |Sal|va|dor,"+
            "Sin|to |em |mim |Su|a |paz,"+
            "Seu |a|mor;"+
            "Vou |a|van|te |por |gra|ça,"+
            "Com |fé |no |Se|nhor,"+
            "Meu |a|ma|do |e |di|vi|no |Pas|tor." ,

            "Cer|to |es|tou |de |que |Cris|to, |o |fi|el |Sal|va|dor,"+
            "Cum|pri|rá |Su|a |o|bra |de |a|mor,"+
            "O|bra |e|ter|na, |per|fei|ta, |de |gran|de |va|lor,"+
            "Or|de|na|da |por |Deus, |Cri|a|dor." ,

            "Cer|to |es|tou |de |que |meu |po|de|ro|so |Je|sus"+
            "Dar|-me-á |sem|pre |for|ça |e |va|lor,"+
            "E |tam|bém |mais |vir|tu|de, |mais |gra|ça |e |mais |luz;"+
            "A |Je|sus |ser|vi|rei |com |fer|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "130": { 
        nome: "A minha alma",
        compasso: "6/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 74,
        velMedMeiaHora: 76,
        velMaxMeiaHora: 78,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |mi|nha |al|ma |de|se|ja, |ó |Se|nhor,"+
            "Sem|pre |vi|ver |por |fé, |u|ni|da |ao |Teu |a|mor;"+
            "Com |Tu|a |for|ça |vou |ca|mi|nhar,"+
            "Por |Tu|a |gra|ça |Te |vou |lou|var"+
            "E |sem|pre |de |Ti |fa|lar." ,

            "A |mi|nha |al|ma, |ó |meu |Re|den|tor,"+
            "Quer |es|tar |u|ni|da |ao |Teu |gran|de |a|mor." ,

            "A |mi|nha |al|ma |de|se|ja, |ó |Se|nhor,"+
            "Ser |con|sa|gra|da |a |Ti, |a|mar|-Te |com |mais |fer|vor;"+
            "A |mi|nha |men|te, |Oh! |vem |a|brir;"+
            "Al|me|jo |em |mim, |Tu|a |voz |sen|tir;"+
            "De|se|jo |a |Ti |ser|vir." ,

            "A |mi|nha |al|ma |ju|bi|la, |ó |Se|nhor,"+
            "Nas |bên|ções |di|vi|nais |do |Teu |bom |Con|so|la|dor;"+
            "Tu |és |a |mi|nha |re|al |Por|ção,"+
            "De |Ti |es|pe|ro |con|so|la|ção"+
            "Na |pro|va |ou |tri|bu|la|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "131": { 
        nome: "Ó Senhor glorioso Deus da perfeição",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ó |Se|nhor |glo|ri|o|so, |Deus |da |per|fei|ção,"+
            "Tu |nos |li|ber|tas|te |da |es|cra|vi|dão;"+
            "Ca|mi|nhan|do |es|ta|mos |ao |Teu |lar |de |a|mor,"+
            "En|to|an|do,|sem|pre,|hi|nos |de |lou|vor." ,

            "Na |jor|na|da |es|ta|mos |pa|ra |o |céu, |Se|nhor,"+
            "Ne|la |en|con|tra|mos |pro|va|ções |e |dor,"+
            "Mas |ja|mais |vi|re|mos |a |des|fa|le|cer,"+
            "Pe|la |es|pe|ran|ça |de |Teu |ros|to |ver." ,

            "Va|les |e |mon|ta|nhas |nos |fa|rás |trans|por,"+
            "E |o |mar |re|vol|to, |ó |Deus |Cri|a|dor;"+
            "Na|da |nes|ta |ter|ra |po|de |nos |pa|rar,"+
            "Na|da |nos |im|pe|de |de |Te |e|xal|tar." ,

            "Já |bem |lon|ge |es|ta|mos,|na |jor|na|da,|ó |Deus,"+
            "E |já |con|tem|pla|mos, |pe|la |fé, |os |céus,"+
            "E |a |no|va |ter|ra |que |Tu |nos |da|rás,"+
            "On|de, |com |os |san|tos,|Tu |ha|bi|ta|rás." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "132": { 
        nome: "Eis-me Senhor aos Teus pés",
        compasso: "6/8",
        velMin: 108,
        velMed: 120,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 69,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Eis|-me, |Se|nhor, |aos |Teus |pés"+
            "Pa|ra |Te |a|do|rar;"+
            "De |co|ra|ção |sin|ce|ro"+
            "Que|ro |me |con|sa|grar." ,

            "Eis |que |es|tou |dis|pos|to"+
            "A |Te |o|be|de|cer,"+
            "Mas |só |com |Teu |au|xí|lio"+
            "Eu |po|de|rei |ven|cer." ,

            "Com |Teu |po|der |so|men|te,"+
            "Teu |ser|vi|dor |se|rei;"+
            "A |paz |que |Tu |me |des|te,"+
            "Ao |mun|do |a|nun|ci|a|rei." ,

            "Hu|mil|de|men|te |a|guar|do"+
            "Teu |san|to |o|pe|rar;"+
            "Em |Tu|a |sã |Pa|la|vra"+
            "Vou |sem|pre |con|fi|ar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "133": { 
        nome: "Quão bom e quão suave é...",
        compasso: "4/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 4,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quão |bom |e |quão |su|a|ve |é, |pe|ran|te |Deus,"+
            "Que |vi|vam |os |ir|mãos |em |do|ce |u|nião;"+
            "É |co|mo |o |or|va|lho |san|to |que |des|ce |lá |dos |céus,"+
            "Tra|zen|do |re|go|zi|jo |e |con|so|la|ção." ,

            "É |o |ce|les|te |or|va|lho |que |as |bên|ções |traz"+
            "E |vi|vi|fi|ca |sem|pre |o |nos|so |co|ra|ção,"+
            "Por|que |o |Se|nhor |or|de|na |a |vi|da |e |a |paz."+
            "O |san|to |a|mor |de |Deus |con|duz |à |per|fei|ção." ,

            "Fun|da|dos |es|te|ja|mos |no |di|vi|no |a|mor"+
            "A |fim |de |com|pre|en|der|mos |quão |pro|fun|do |é"+
            "O |a|mor |do |nos|so |Mes|tre, |Je|sus |o |Re|den|tor,"+
            "Que |trou|xe |às |nos|sas |al|mas |pre|ci|o|sa |fé." ,

            "Nós |so|mos |a |he|ran|ça |do |e|ter|no |Deus;"+
            "Je|sus, |o |Ver|da|dei|ro, |é |a |nos|sa |Paz;"+
            "'A|mai|-vos |uns |aos |ou|tros', |en|si|na |pa|ra |os |Seus;"+
            "O |Seu |a|mor |su|bli|me |re|go|zi|jo |traz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "134": { 
        nome: "Teu amor ó Cordeiro divinal",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Que |o|bra |po|de |se |i|gua|lar"+
            "À|que|la |so|bre |a |cruz?"+
            "Que |mor|te |po|de |res|ga|tar"+
            "Se|não |a |de |Je|sus?" ,

            "Teu |a|mor, |Teu |a|mor,"+
            "Ó |Cor|dei|ro |di|vi|nal,"+
            "Só |a|go|ra |é |que |pos|so |en|ten|der:"+
            "Tu |pa|gas|te |a |Deus"+
            "Meu |pe|ca|do, |meu |mal,"+
            "E |fi|zes|te |fe|liz |o |meu |vi|ver." ,

            "Por |to|da |a |mi|nha |trans|gres|são"+
            "Mor|reu |Je|sus, |o |Rei;"+
            "A |Su|a |i|men|sa |com|pai|xão"+
            "Ja|mais |es|que|ce|rei." ,

            "Ó |meu |Je|sus, |que |Te |da|rei"+
            "Por |to|do |es|se |a|mor?"+
            "Meu |ser |a |Ti |en|tre|ga|rei,"+
            "Se|rei |Teu |ser|vi|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "135": { 
        nome: "Bendito o Rei que veio dos céu!",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ben|di|to |o |Rei |que |ve|io |em |no|me |do |E|ter|no!"+
            "'Ho|sa|na |nas |al|tu|ras!', |cla|ma|va |a |mul|ti|dão;"+
            "Ben|di|to |o |Rei |di|vi|no, |man|so, |fi|el, |fra|ter|no,"+
            "Dó|cil |e |glo|ri|o|so, |Au|tor |da |sal|va|ção!" ,

            "Ben|di|to |o |Rei |que |ve|io |pa|ra |ven|cer |a |mor|te"+
            "E |dar|-nos |li|ber|da|de |pa|ra |em |jus|ti|ça |an|dar."+
            "Ben|di|to |se|ja |sem|pre, |dos |for|tes |o |mais |For|te!"+
            "To|dos |se |a|le|gra|vam |ao |ver |Je|sus |pas|sar." ,

            "A |mul|ti|dão |lou|va|va |a |Cris|to, |o |Rei |e|ter|no,"+
            "E |se |re|go|zi|ja|va |de |to|do |o |co|ra|ção;"+
            "Dis|se |o |di|vi|no |Mes|tre, |chei|o |do |a|mor |su|per|no:"+
            "Se |es|tes |se |ca|la|rem, |as |pe|dras |cla|ma|rão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "136": { 
        nome: "Benignidade eterna é a de Deus",
        compasso: "6/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 69,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Be|ni|gni|da|de |e|ter|na |é |a |de |Deus, |Cri|a|dor,"+
            "Que |es|cre|veu |nos|sos |no|mes |no |céu, |a |pá|tria |de |a|mor;"+
            "Re|go|zi|je|mo|-nos |de |co|ra|ção, |can|te|mos|-Lhe |gló|ria;"+
            "E|le, |por |Seu |gran|de |a|mor, |nos |da|rá |com|ple|ta |vi|tó|ria." ,

            "Que |gran|de |fe|li|ci|da|de |nos |pre|pa|rou |o |bom |Deus!"+
            "Pois |mo|ra|re|mos |com |E|le |e|ter|na|men|te |nos |céus."+
            "A |Su|a |fa|ce |ve|re|mos, |en|tão. |Que |gran|de |ven|tu|ra!"+
            "To|dos |os |san|tos |se |de|lei|ta|rão |com |tal |for|mo|su|ra." ,

            "Na |es|pe|ran|ça |vi|ve|mos, |sem|pre |pen|san|do |em |Deus,"+
            "O|be|de|cen|do |a |tu|do |o |que |nos |fa|la |dos |céus;"+
            "Su|as |pro|mes|sas |se |hão |de |cum|prir; |Deus |é |ver|da|dei|ro;"+
            "No |tem|po |cer|to, |dos |céus |vol|ta|rá |Je|sus, |o |Cor|dei|ro." ,

            "Por |Su|a |gran|de |bon|da|de, |Deus, |nos|so |Pai, |nos |cha|mou;"+
            "Pa|ra |a |vi|da |e|ter|na |E|le |nos |pre|des|ti|nou;"+
            "Se|ja |ben|di|to |o |No|me |de |Deus, |o |O|ni|po|ten|te;"+
            "No|me |que |é, |pa|ra |to|do |o |fi|el, |so|cor|ro |pre|sen|te." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "137": { 
        nome: "Senhor vem selar-nos",
        compasso: "6/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 69,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Do |teu |Es|pí|ri|to |San|to,"+
            "Der|ra|ma, |ó |Se|nhor;"+
            "So|bre |os |que |O |es|pe|ram"+
            "Com |fé |e |com |fer|vor." ,

            "Se|nhor, |vem |se|lar|-nos"+
            "Com |o |Es|pí|ri|to |San|to;"+
            "Sim, |vem |a|le|grar|-nos"+
            "Com |Teu |bom |Con|so|la|dor." ,

            "É, |pa|ra |nós, |pre|ci|o|so,"+
            "Ó |san|to |Re|den|tor,"+
            "Teu |Dom |di|vi|no, |al|me|ja|do,"+
            "Ben|di|to |e |de |va|lor." ,

            "Dá|-nos, |por |Tu|a |bon|da|de,"+
            "Da |he|ran|ça |o |Pe|nhor;"+
            "An|si|o|sa|men|te |es|pe|ra|mos,"+
            "Bon|do|so |Sal|va|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "138": { 
        nome: "Louvemos ao bom Jesus",
        compasso: "6/8",
        velMin: 104,
        velMed: 124,
        velMax: 144,
        inicio: 6,
        velMinMeiaHora: 68,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Dos |céus, |com |gló|ria, |sur|gi|rá |a |ce|les|ti|al |ci|da|de;"+
            "Ci|da|de |san|ta |on|de |Deus |co|nos|co |es|ta|rá."+
            "Na|que|le |rei|no |e|ter|no |há |paz |e |a|mor |su|per|no;"+
            "Lou|vor |e |gló|ria |ao |Se|nhor |da|re|mos |com |fer|vor." ,

            "Ja|mais |de|ve|mos |va|ci|lar |nas |ten|ta|ções |e |pro|vas;"+
            "Não |nos |can|se|mos |de |lu|tar, |o|ran|do |sem |ces|sar;"+
            "Por |Cris|to, |nos|sa |Gló|ria, |te|re|mos |a |vi|tó|ria,"+
            "En|tão |ve|re|mos |o |es|plen|dor |do |rei|no |do |Se|nhor." ,

            "Je|sus |mui |bre|ve |vol|ta|rá, |Glo|ri|o|so |e |O|ni|po|ten|te,"+
            "Nas |nu|vens |nos |a|co|lhe|rá |e |a |Si |nos |u|ni|rá;"+
            "Com |E|le |su|bi|re|mos |e, |en|tão, |con|tem|pla|re|mos"+
            "O |nos|so |e|ter|no |Cri|a|dor |no |rei|no |de |es|plen|dor." ,

            "Lou|ve|mos |ao |bom |Je|sus, |Rei |da |paz, |Rei |da |luz;"+
            "Lou|ve|mos |ao |bom |Je|sus, |que |pa|ra |o |céu |con|duz;"+
            "A |i|gre|ja |re|u|ni|da |com |Cris|to, |e|ter|na |Vi|da,"+
            "En|to|a|rá, |ao |Cri|a|dor, |um |hi|no |de |lou|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "139": { 
        nome: "Ó Senhor Tu me conheces",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Se|nhor, |Tu |me |co|nhe|ces, |Tu |co|nhe|ces |meu |vi|ver,"+
            "E |tam|bém |meu |pen|sa|men|to |não |Te |pos|so |es|con|der;"+
            "On|de |quer |que |eu |es|te|ja, |Teu |Es|pí|ri|to |es|tá;"+
            "Tu|a |mão, |em |to|da |a |par|te, |sem|pre |me |a|can|ça|rá." ,

            "Com |meus |o|lhos |não |Te |ve|jo, |mas |eu |sin|to |Teu |a|mor;"+
            "Tu |me |cer|cas |de |con|tí|nuo, |ó |e|ter|no |Cri|a|dor."+
            "Nem |as |tre|vas |me |o|cul|tam |dos |su|bli|mes |o|lhos |Teus,"+
            "Pois |a |noi|te |é |co|mo |o |di|a |pa|ra |Ti, |ó |gran|de |Deus." ,

            "Pu|ri|fi|ca |o |meu |ca|mi|nho |pe|lo |Teu |po|der, |Se|nhor;"+
            "Eu |de|se|jo |ser |sin|ce|ro |e |an|dar |em |Teu |te|mor."+
            "On|de |quer |que |eu |es|te|ja, |Teu |Es|pí|ri|to |es|tá;"+
            "Ó |Se|nhor, |Tu |me |co|nhe|ces; |Deus |a|lém |de |Ti |não |há." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "140": { 
        nome: "Sou feliz",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vou |mar|chan|do |pa|ra |a |gló|ria,"+
            "Pa|ra |o |pa|ís |ce|les|ti|al;"+
            "Em |Je|sus |te|rei |vi|tó|ria"+
            "E |a |vi|da |e|ter|nal." ,

            "Sou |fe|liz, |sou |fe|liz,"+
            "Pois |a|chei |Quem |me |con|duz |ao |meu |pa|ís;"+
            "Mais |fe|liz, |mais |fe|liz"+
            "Eu |se|rei |quan|do |es|ti|ver |no |meu |pa|ís." ,

            "É |glo|ri|o|so |e |i|ne|fá|vel"+
            "O |meu |pa|ís |ce|les|ti|al,"+
            "De |ri|que|za |i|ni|gua|lá|vel"+
            "E |de |gló|ria |pe|re|nal" ,

            "To|dos |nós |se|pa|ra|re|mos,"+
            "A|qui |no |mun|do |de |la|bor,"+
            "Mas |ao |fim |nos |u|ni|re|mos"+
            "No |pa|ís |de |es|plen|dor" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "141": { 
        nome: "Cristo o Verbo",
        compasso: "6/8",
        velMin: 100,
        velMed: 110,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 62,
        velMedMeiaHora: 64,
        velMaxMeiaHora: 66,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Ver|bo |es|ta|va |com |Deus, |Cri|a|dor,"+
            "O |Ver|bo |tam|bém |e|ra |Deus;"+
            "Das |al|tu|ras |des|ceu |pa|ra |ser |Re|den|tor"+
            "Tra|zen|do |a |jus|ti|ça |dos |céus." ,

            "Cris|to, |o |Ver|bo, |dos |céus |des|ceu,"+
            "Foi |fei|to |car|ne |e |vi|da |nos |deu;"+
            "Ve|io |ao |mun|do |a |fim |de |ven|cer,"+
            "Chei|o |de |gra|ça, |ver|da|de |e |po|der." ,

            "O |Ver|bo |de |Deus |en|tre |nós |ha|bi|tou;"+
            "A|qui |Su|a |gló|ria |se |viu;"+
            "O |u|ni|gê|ni|to |Fi|lho |de |Deus |se |mos|trou;"+
            "De|pois, |pa|ra |a |gló|ria |su|biu." ,

            "Aos |que |re|ce|be|ram |Je|sus, |o |Se|nhor,"+
            "Es|tão |re|ser|va|dos |os |céus;"+
            "São |her|dei|ros |da |gló|ria |com |seu |Re|den|tor,"+
            "São |to|dos |nas|ci|dos |de |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "142": { 
        nome: "Ó Pai celestial",
        compasso: "6/8",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 6,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Pai |ce|les|ti|al |de |a|mor |e|ter|nal,"+
            "Im|plo|ro |com |to|do |o |meu |ser:"+
            "Vem |me |for|ti|fi|car |e |tam|bém |con|so|lar,"+
            "Com |o |Teu |glo|ri|o|so |po|der." ,

            "Eu |im|plo|ro |com |to|do |o |meu |ser:"+
            "Pai, |vem |sem|pre |me |so|cor|rer;"+
            "Com |Teu |san|to |vi|gor,"+
            "Eu |se|rei |ven|ce|dor"+
            "E |ve|rei |Tu|a |gló|ria, |Se|nhor." ,

            "Fi|el |e |bom |Deus, |dá|-me |gra|ça |dos |céus"+
            "De |re|sis|tir |ao |ten|ta|dor,"+
            "Que |fu|ri|o|so |es|tá |e |tor|men|to |me |dá"+
            "Nes|te |mun|do |de |lu|tas |e |dor." ,

            "Ó |Pai, |vem |me |dar |for|ças |pa|ra |lu|tar"+
            "A |fim |de |em |tu|do |ven|cer;"+
            "A|cres|cen|ta|-me |a |fé |e |sus|tém|-me |de |pé,"+
            "Re|ves|tin|do|-me |do |Teu |po|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "143": { 
        nome: "Porfiemos irmãos por entrar nos céus",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |Cris|to |no |céu |pre|pa|rou"+
            "Um |lu|gar |de |re|pou|so |e |es|plen|dor;"+
            "Bre|ve |nos |fa|rá |en|trar |on|de |E|le |já |en|trou:"+
            "Nas |mo|ra|das |do |e|ter|no |Cri|a|dor." ,

            "Por|fie|mos, |ir|mãos,"+
            "Por |en|trar |lá |nos |céus;"+
            "Se |ven|cer|mos |o |mal,"+
            "Vi|ve|re|mos |jun|tos |ao |gran|de |Deus." ,

            "Nes|ta |ter|ra |te|sou|ros |não |há,"+
            "Que |nos |pos|sam |a|qui |se|gu|rar;"+
            "De|se|ja|mos |ir |ao |céu |on|de |Cris|to |nos |da|rá"+
            "Um |te|sou|ro |que |nun|ca |vai |fin|dar." ,

            "Bre|ve|men|te |i|re|mos |en|trar"+
            "E |rei|nar |com |os |san|tos |no |céu;"+
            "No|vo |hi|no |de |lou|vor |jun|tos |va|mos |en|to|ar"+
            "A |Je|sus, |que |a |sal|va|ção |nos |deu." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "144": { 
        nome: "A vida eterna",
        compasso: "3/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |vi|da e|ter|na |só |Deus |con|ce|de |"+
            "Aos |san|tos |que |se|guem |o |Re|den|tor. |"+
            "Cris|to |nos |gui|a |e |in|ter|ce|de |"+
            "Jun|to |ao |Pai, |nos|so |Deus |Cri|a|dor." ,

            "A |sã |Pa|la|vra, |fi|el, |e|ter|na, |"+
            "É |que |dá |vi|da |e |faz |mui |fe|liz; |"+
            "É |nos|sa |For|ça, |Paz |sem|pi|ter|na, |"+
            "Que |nos |con|duz |ao |ce|les|te |pa|ís." ,

            "O |po|vo |san|to |tem |luz |di|vi|na, |"+
            "Sá|bios |con|se|lhos |que |vêm |lá |dos |céus, |"+
            "Pois |a |Pa|la|vra |o |i|lu|mi|na |"+
            "E o |faz |ser|vir |ao |Al|tís|si|mo |Deus." ,

        ],
        temposVersos: [
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,

            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,

            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12        
        ],
        notas: [
            'Bb3','Eb4','F4','G4','Bb4','C5','Eb5','C5','Bb4','G4',
            'Bb4','F4','Bb4','Bb4','G4','Eb4','C4','D4','Eb4','F4',
            'Bb3','Eb4','F4','G4','Bb4','C5','Eb5','C5','Bb4','G4',
            'G4','F4','C5','Bb4','G4','Eb4','Bb3','C4','D4','Eb4',

            'Bb3','Eb4','F4','G4','Bb4','C5','Eb5','C5','Bb4','G4',
            'Bb4','F4','Bb4','Bb4','G4','Eb4','C4','D4','Eb4','F4',
            'Bb3','Eb4','F4','G4','Bb4','C5','Eb5','C5','Bb4','G4',
            'G4','F4','C5','Bb4','G4','Eb4','Bb3','C4','D4','Eb4',

            'Bb3','Eb4','F4','G4','Bb4','C5','Eb5','C5','Bb4','G4',
            'Bb4','F4','Bb4','Bb4','G4','Eb4','C4','D4','Eb4','F4',
            'Bb3','Eb4','F4','G4','Bb4','C5','Eb5','C5','Bb4','G4',
            'G4','F4','C5','Bb4','G4','Eb4','Bb3','C4','D4','Eb4'
        ],
        temposNotas: [
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,

            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,

            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12,
            4,4,4,4,8,4,4,4,4,8,
            4,4,4,4,4,4,4,4,4,12
        ]
    },
    "145": { 
        nome: "Pródigo filho vai!",
        compasso: "6/8",
        velMin: 108,
        velMed: 123,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus, |no |Seu |lar, |es|pe|ra,"+
            "O |fi|lho |que |per|de|ra"+
            "E |que |a|ma|do |e|ra;"+
            "Pró|di|go |fi|lho, |vai!" ,

            "Oh! |vai |a |Deus |e |cla|ma;"+
            "O |Cri|a|dor |te |a|ma;"+
            "O |Seu |per|dão |im|plo|ra;"+
            "Pró|di|go |fi|lho, |vai |a |Deus!"+
            "E|le |mer|cê |con|ce|de,"+
            "Cris|to |por |ti |in|ter|ce|de;"+
            "Se |te |ar|ren|pen|de|res,"+
            "Bens |te |da|rá, |dos |céus." ,

            "Seu |fi|lho, |Deus |per|do|a,"+
            "Mui|to |o |a|ben|ço|a,"+
            "De |bên|ções |o |co|ro|a;"+
            "Pró|di|go |fi|lho, |vai!" ,

            "Dei|xa |a |in|cer|te|za"+
            "E |to|da |a |tris|te|za;"+
            "Com |Deus |te|rás |ri|que|za;"+
            "Pró|di|go |fi|lho,|vai!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "146": { 
        nome: "De Deus veio a Luz",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 42,
        velMedMeiaHora: 45,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "De |Deus |ve|io a |Luz: |é |Cris|to |Je|sus, |"+
            "O |Gui|a |que |aos |céus |nos |con|duz; |"+
            "Je|sus, |Re|den|tor |ce|les|ti|al, |"+
            "Dis|si|pa as |tre|vas |do |mal." ,

            "Em |Deus |há |sa|ber, |pro|fun|do |sa|ber, |"+
            "Fa|vor |e |in|fi|ni|to |po|der; |"+
            "Pro|veu, |em |Je|sus, |a |sal|va|ção; |"+
            "Pro|veu, |aos |ho|mens, |per|dão." ,

            "A |Deus, |Cri|a|dor, |e a |Cris|to, o |Se|nhor, |"+
            "E|ter|na |gra|ti|dão |e |lou|vor |"+
            "Da|rão |sem |ces|sar |os |san|tos |Seus, |"+
            "Na |ter|ra e, em |bre|ve |nos |céus." ,
            
        ],
        temposVersos: [
            4,8,2,1,8,4,6,2,4,8,
            4,6,2,2,2,6,2,4,8,
            4,8,3,1,8,4,8,4,8,
            4,8,4,6,2,4,8,

            4,8,2,1,8,4,6,2,4,8,
            4,6,2,2,2,6,2,4,8,
            4,8,3,1,8,4,8,4,8,
            4,8,4,6,2,4,8,

            4,8,2,1,8,4,6,2,4,8,
            4,6,2,2,2,6,2,4,8,
            4,8,3,1,8,4,8,4,8,
            4,8,4,6,2,4,8
        ],
        notas: [
            'A4','D5','F#4','E4','D4','B4','G4','F#4','G4','F#4',
            'A4','D5','E5','C#5','B4','A4','B4','G#4','A4',
            'A4','D5','F#4','E4','D4','B4','G4','F#4','E4',
            'A4','D4','G4','F#4','G4','E4','D4',

            'A4','D5','F#4','E4','D4','B4','G4','F#4','G4','F#4',
            'A4','D5','E5','C#5','B4','A4','B4','G#4','A4',
            'A4','D5','F#4','E4','D4','B4','G4','F#4','E4',
            'A4','D4','G4','F#4','G4','E4','D4',

            'A4','D5','F#4','E4','D4','B4','G4','F#4','G4','F#4',
            'A4','D5','E5','C#5','B4','A4','B4','G#4','A4',
            'A4','D5','F#4','E4','D4','B4','G4','F#4','E4',
            'A4','D4','G4','F#4','G4','E4','D4'
        ],
        temposNotas: [
            4,8,2,1,8,4,6,2,4,8,
            4,6,2,2,2,6,2,4,8,
            4,8,3,1,8,4,8,4,8,
            4,8,4,6,2,4,8,

            4,8,2,1,8,4,6,2,4,8,
            4,6,2,2,2,6,2,4,8,
            4,8,3,1,8,4,8,4,8,
            4,8,4,6,2,4,8,

            4,8,2,1,8,4,6,2,4,8,
            4,6,2,2,2,6,2,4,8,
            4,8,3,1,8,4,8,4,8,
            4,8,4,6,2,4,8            
        ]
    },
    "147": { 
        nome: "É bom louvar ao Criador",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 45,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 49,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "É |bom |lou|var |ao |Cri|a|dor, |al|çar |a |voz |em |lou|vor,"+
            "Con|tar |as |Su|as |o|bras |e |lem|brar |Seu |gran|de |a|mor,"+
            "Ren|der|-Lhe |san|to |cul|to, |sin|ce|ra |a|do|ra|ção;"+
            "É |bom, |pe|ran|te |E|le, |an|dar |em |re|ti|dão." ,

            "Fi|éis |a|do|ra|do|res,"+
            "Lou|vai |ao |Deus |vi|ven|te;"+
            "Por |Seus |i|men|sos |fa|vo|res,"+
            "Lou|vai |ao |Cri|a|dor!" ,

            "Sin|ce|ra|men|te |e|xal|tai |o |san|to |No|me |de |Deus,"+
            "Can|tai |a|le|gre|men|te |ao |Se|nhor |que |ha|bi|ta |nos |céus;"+
            "O |co|ra|ção |e |a |men|te |ao |gran|de |Deus |e|le|vai;"+
            "Ó |fi|lhos |do |E|ter|no, |ao |Pai |glo|ri|fi|cai." ,

            "Com |hu|mil|da|de, |ó |ir|mãos, |a|pre|sen|tai|-vos |a |Deus,"+
            "An|dai |na |san|ti|da|de |que |con|vém |a |to|dos |os |Seus;"+
            "Com |to|da |a |vos|sa |vi|da |ho|prai |a |Quem |vos |a|mou,"+
            "À|que|le |que, |do |al|to, |a |sal|va|ção |man|dou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "148": { 
        nome: "Louvor a Deus o Criador",
        compasso: "3/4",
        velMin: 56,
        velMed: 64,
        velMax: 72,
        inicio: 2.5,
        velMinMeiaHora: 36,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Lou|vor |a |Deus, |o |Cri|a|dor,"+
            "Do |u|ni|ver|so, |Re|ge|dor;"+
            "É |in|fi|ni|to |Seu |po|der,"+
            "É |d'E|le |a |for|ça |e |o |sa|ber."+
            "Deus |é |per|fei|to, |é |A|mor,"+
            "Es|tá |cer|ca|do |de |es|plen|dor;"+
            "Os |céus |nos |fa|lam |do |Seu |Ser,"+
            "Tu|do |o|be|de|ce |ao |Seu |que|rer." ,

            "Lou|vor |a |Deus, |o |Cri|a|dor,"+
            "Por |ter |man|da|do |o |Re|den|tor;"+
            "O |Seu |fa|vor |su|bli|me |é"+
            "Em |Je|sus |Cris|to, |Au|tor |da |fé;"+
            "Quem |nes|te |mun|do |en|ga|na|dor,"+
            "O|be|de|cer |ao |Sal|va|dor,"+
            "Re|ce|be|rá, |de |Deus, |per|dão, |vir|tu|de"+
            "E |paz |no |co|ra|ção." ,

            "Lou|vor |a |Deus, |o |Cri|a|dor,"+
            "Das |sãs |pro|mes|sas, |Cum|pri|dor;"+
            "Por |to|dos |nós |ho|na|do |é"+
            "E |em |nós |ha|bi|ta, |pe|la |fé;"+
            "Nin|guém |im|pe|de |o |Cri|a|dor, |com |Cris|to"+
            "E |o |bom |Con|so|la|dor,"+
            "De |o|pe|rar |a |Seu |pra|zer,"+
            "Pois |in|fi|ni|to |é |o |Seu |po|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "149": { 
        nome: "Ó irmãos por fé louvemos a Jesus",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |ir|mãos , |por |fé |lou|ve|mos |a |Je|sus, |o |Rei |da |gló|ria;"+
            "Pe|la |Su|a |gra|ça |te|mos, |nos |com|ba|tes, |a |vi|tó|ria;"+
            "O |Con|so|la|dor |di|vi|no |traz |ce|les|te |e |san|to |en|si|no;"+
            "Gló|ria |a |Deus |que, |des|de |os |céus, |man|dou |o |Sal|va|dor." ,

            "Ó |ir|mãos, |já |a|do|ta|dos, |en|to|e|mos |do|ce |can|to"+
            "A |Je|sus, |por |nós |a|ma|do, |e |a |Deus, |três |ve|zes |San|to;"+
            "O |Seu |No|me |e|xal|te|mos |e |Seus |fei|tos |pro|cla|me|mos;"+
            "Gló|ria |a |Quem |nos |li|ber|tou |e |nos |pu|ri|fi|cou." ,

            "Ó |ir|mãos, |por |Cris|to, |so|mos,"+
            "No |Seu |san|to |a|mor,|guar|da|dos;"+
            "Do |pe|ca|do |es|cra|vos |fo|mos, |mas, |por |gra|ça, |li|ber|ta|dos;"+
            "Con|so|la|dos, |ju|bi|la|mos, |paz |com |Deus |a|go|ra |te|mos;"+
            "San|to, |San|to |é |o |Se|nhor, |Au|tor |da |Sal|va|ção." ,

            "Meus |ir|mãos, |a |Deus |lou|ve|mos"+
            "E |a |Cris|to |e|xal|te|mos;"+
            "O |Es|pí|ri|to |da |gra|ça |nos |traz"+
            "O |Seu |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "150": { 
        nome: "Jesus Cristo meu Senhor",
        compasso: "4/4",
        velMin: 54,
        velMed: 61,
        velMax: 69,
        inicio: 4,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Je|sus |Cris|to, |meu |Se|nhor, |"+
            "Me |jus|ti|fi|cou |por |fé; |"+
            "Pe|la |gra|ça, |pe|lo |Seu |a|mor, |"+
            "Al|can|cei |de |Deus |mer|cê.",

            "Re|go|zi|jo, |paz |e a|mor, |"+
            "A|le|gri|a |sem |i|gual, |"+
            "Eu |des|fru|to |em |meu |Sal|va|dor, |"+
            "O |Cor|dei|ro |di|vi|nal.",

            "Vi|vo |no |Se|nhor |Je|sus; |"+
            "Su|a |vi|da |sin|to em |mim; |"+
            "E|le |é, |no |mun|do, |mi|nha |Luz |"+
            "Pa|ra |ir |a|té |o |fim."            
        ],
        temposVersos: [
            2, 2, 2, 2, 8, 4, 12,
            2, 2, 2, 2, 8, 4, 12,
            2, 2, 4, 4, 2, 2, 2, 2, 12,
            2, 2, 2, 2, 8, 4, 12            
        ],
        notas: [
            'Eb4', 'Ab4', 'C5', 'B4', 'C5', 'Bb4', 'Ab4',
            'Ab4', 'C5', 'Eb5', 'D5', 'Eb5', 'Db5', 'C5',
            'C5', 'C5', 'Db5', 'Db5', 'Ab4', 'Ab4', 'Bb4', 'B4', 'C5',
            'Db5', 'C5', 'C5', 'Bb4',  'F4', 'G4', 'Ab4'            
        ],
        temposNotas: [            
            2, 2, 2, 2, 8, 4, 12,
            2, 2, 2, 2, 8, 4, 12,
            2, 2, 4, 4, 2, 2, 2, 2, 12,
            2, 2, 2, 2, 8, 4, 12            
        ]
    },
    "151": { 
        nome: "Se de Cristo o Nome amares",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se, |de |Cris|to, |o |No|me |a|ma|res,"+
            "Não |te|rás, |do |mal, |pa|vor;"+
            "Se, |com |fé, |O |in|vo|ca|res"+
            "Ser|-te-á |a|ju|da|dor." ,

            "No|me |bom, |sem |i|gual,"+
            "É |o |No|me |de |Je|sus,"+
            "De|fen|sor |e|ter|nal"+
            "Que |à |gló|ria |te |con|duz." ,

            "Se, |de |Cris|to, |o |No|me |a|ma|do"+
            "Em |ti |bem |gra|va|do |for,"+
            "Se|rás |li|vre |do |pe|ca|do,"+
            "An|da|rás |em |Seu |te|mor." ,

            "Se, |de |Cris|to, |o |No|me |for|te"+
            "In|vo|ca|res |com |fer|vor,"+
            "Tu |não |te|me|rás |a |mor|te,"+
            "E|le |é |teu |Con|so|la|dor." ,
            "Se, |de |Cris|to, |o |No|me |a|ma|res,"+
            "Não |te|rás, |do |mal, |pa|vor;"+
            "Se, |com |fé, |O |in|vo|ca|res"+
            "Ser|-te-á |a|ju|da|dor." ,

            "No|me |bom, |sem |i|gual,"+
            "É |o |No|me |de |Je|sus,"+
            "De|fen|sor |e|ter|nal"+
            "Que |à |gló|ria |te |con|duz." ,

            "Se, |de |Cris|to, |o |No|me |a|ma|do"+
            "Em |ti |bem |gra|va|do |for,"+
            "Se|rás |li|vre |do |pe|ca|do,"+
            "An|da|rás |em |Seu |te|mor." ,

            "Se, |de |Cris|to, |o |No|me |for|te"+
            "In|vo|ca|res |com |fer|vor,"+
            "Tu |não |te|me|rás |a |mor|te,"+
            "E|le |é |teu |Con|so|la|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "152": { 
        nome: "Venho à casa do Senhor",
        compasso: "4/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |en|trar |na |ca|sa |do |bom |Cri|a|dor,"+
            "O |meu |ser |se |re|go|zi|ja;"+
            "Pa|ra |des|fru|tar |do |Seu |su|bli|me |a|mor,"+
            "Ven|ho |à |ca|sa |do |Se|nhor." ,

            "É |na |ca|sa |do |Se|nhor"+
            "Que |a|pren|do |a |ho|nrar,"+
            "Com |te|mor |e |re|ve|rên|cia,"+
            "Meu |a|ma|do |Cri|a|dor." ,

            "Quan|do |es|tou |na |ca|sa |do |bom |Cri|a|dor,"+
            "Mi|nha |al|ma |re|ju|bi|la;"+
            "Pa|ra |ou|vir |os |Seus |con|se|lhos |de |a|mor,"+
            "Ven|ho |à |ca|sa |do |Se|nhor." ,

            "Ter|mi|nan|do |o |san|to |cul|to |ao |Cri|a|dor,"+
            "Sin|to |paz |e |a|le|gri|a;"+
            "Me|di|tan|do |no |glo|ri|o|so |Seu |a|mor,"+
            "Dei|xo |a |ca|sa |do |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "153": { 
        nome: "O divinal Cordeiro",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |di|vi|nal |Cor|dei|ro, |pu|rís|si|mo, |i|no|cen|te,"+
            "To|mou |os |meus |pe|ca|dos |e |deu|-me |Su|a |fé;"+
            "Pros|trar|-me|-ei |hu|mil|de, |a |E|le |re|ve|ren|te,"+
            "Por |Seu |pre|ci|o|so |san|gue, |eu |al|can|cei |mer|cê." ,

            "Es|ta|va |no |pe|ca|do, |mas |gra|ça |te|nho |a|cha|do"+
            "Em |Cris|to, |mui |bon|do|so, |Au|tor |da |sal|va|ção;"+
            "A|má|vel |e |hu|mil|de, |ao |Pai |foi |con|sa|gra|do"+
            "A |fim |de |li|ber|tar|-me |da |e|ter|na |per|di|ção." ,

            "Ao |di|vi|nal |Cor|dei|ro, |Je|sus, |o |Rei |e|ter|no,"+
            "Com |to|da |a |mi|nha |al|ma |en|to|a|rei |lou|vor,"+
            "Pois |E|le |pre|pa|rou|-me |um |lar |de |a|mor |su|per|no"+
            "No |Seu |ce|les|te |rei|no |de |vi|da |e |es|plen|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "154": { 
        nome: "Terá que renascer",
        compasso: "6/8",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 6,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |ho|mem |que |bus|ca |a |Cris|to, |o |Se|nhor,"+
            "Que|ren|do |a |vi|da |e|ter|na |en|con|trar,"+
            "O |san|to |con|se|lho |do |bom |Re|den|tor"+
            "Não |de|ve |rei|ei|tar." ,

            "Te|rá |que |re|nas|cer,"+
            "Te|rá |que |re|nas|cer."+
            "Quem |quer |ha|bi|tar"+
            "Nas |mo|ra|das |de |Deus,"+
            "Te|rá |que |re|nas|cer." ,

            "Da |á|gua |e |do |Es|pí|ri|to |quem |não |nas|cer,"+
            "Ja|mais |po|de|rá |ver |o |rei|no |dos |céus,"+
            "E |nem |en|tra|rá |ne|le |pa|ra |vi|ver;"+
            "Ja|mais |ve|rá |a |Deus." ,

            "Só |Cris|to, |u|ni|gê|ni|to |Fi|lho |de |Deus,"+
            "Li|ber|ta |o |ho|mem |da |con|de|na|ção,"+
            "A |fim |de |le|vá|-lo |ao |rei|no |do |céus"+
            "E |dar|-lhe |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "155": { 
        nome: "Olha a Cristo o Redentor",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O|lha |a |Cris|to, |o |Re|den|tor,"+
            "E |não |des|pre|zes |o |Seu |a|mor;"+
            "Só |por |Seu |san|gue |Deus |dá |mer|cê"+
            "E |sal|va|ção, |que |vêm |pe|la |fé." ,

            "Por |Je|sus, |re|ce|be|rás"+
            "O |per|dão |e |a |paz |dos |céus;"+
            "O |Seu |san|gue |li|vra|rá"+
            "Tu|a |al|ma |da |i|ra |de |Deus." ,

            "Por |Su|a |gra|ça, |o |Sal|va|dor"+
            "Quer |con|ce|der|-te |gran|de |fa|vor;"+
            "E|le |te |cha|ma, |vem |sem |tar|dar,"+
            "Vem |no |Seu |san|gue |te |a|bri|gar." ,

            "Sem |o |Seu |san|gue |não |há |per|dão,"+
            "Não |há, |com |Deus, |re|con|ci|li|a|ção;"+
            "Das |o|bras |mor|tas |lim|po |se|rás;"+
            "Vi|da |com |gló|ria |e|ter|na |te|rás." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "156": { 
        nome: "Cristo entrou nos céus primeiro",
        compasso: "4/4",
        velMin: 68,
        velMed: 78,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |es|pe|ran|ça |de |en|trar |na |gló|ria"+
            "Nos |sus|tém |fi|éis |ao |nos|so |Deus;"+
            "É, |pa|ra |os |san|tos, |nes|te |ca|mi|nho,"+
            "Ân|co|ra |que |vem |dos |céus." ,

            "Cris|to |en|trou |nos |céus |pri|mei|ro,"+
            "E|le |é |o |nos|so |Pre|cur|sor;"+
            "É |o |Su|mo |Sa|cer|do|te |e|ter|no"+
            "Jun|to |a |Deus, |o |Cri|a|dor." ,

            "Na |es|pe|ran|ça |que |es|tá |pro|pos|ta,"+
            "Fir|me |es|tá |a |nos|sa |vo|ca|ção;"+
            "E|la |sus|ten|ta |a |nos|sa |al|ma"+
            "A|tra|vés |da |pro|va|ção." ,

            "No |san|tu|á|rio |dos |céus |en|tra|re|mos"+
            "Co|mo |en|trou |Je|sus, |o |nos|so |Rei,"+
            "Se |a|ten|der|mos |ao |Seus |pre|cei|tos"+
            "E |a|mar|mos |Su|a |lei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "157": { 
        nome: "Ouve a voz que te convida...",
        compasso: "3/4",
        velMin: 60,
        velMed: 66,
        velMax: 72,
        inicio: 3,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ven|do |Deus |que, |nes|te |mun|do, |o |pe|ca|do |i|pe|rou,"+
            "Por |a|mor |san|to |e |pro|fun|do, |a |Seu |fi|lho |en|vi|ou"+
            "Pa|ra |ven|cer |o |pe|ca|do |e |nos |li|ber|tar."+
            "Tu |tam|bém |po|des |ser |sal|vo, |por |Je|sus |po|des |ser |sal|vo;"+
            "Vai |a |E|le |sem |tar|dar, |vai |ao |Mes|tre |sem |tar|dar." ,

            "Da |pri|são |do |teu |pe|ca|do, |Cris|to |quer |te |li|ber|tar;"+
            "E|le |foi |cru|ci|fi|ca|do |pa|ra |te |re|ge|ne|rar."+
            "Crê |em |Je|sus, |o |Cor|dei|ro, |que |te |sal|va|rá."+
            "Ser|vo |és |do |teu |pe|ca|do, |mor|to |es|tás |no |teu |pe|ca|do;"+
            "Crê |so|men|te |e |vi|ve|rás, |pa|ra |Cris|to |vi|ve|rás." ,

            "Ou|ve |a |voz |que |te |con|vi|da, |dá |ou|vi|dos |ao |teu |Deus,"+
            "E |te|rás |a |no|va |vi|da |que, |por |gra|ça, |têm |os |Seus;"+
            "Quer|-te |re|mir |Je|sus |Cris|to |e |te |dar |a |paz;"+
            "E |ao |fim, |na |Su|a |gló|ria, |no |es|plen|dor |da |Su|a |gló|ria,"+
            "Vi|da |e|ter|na |al|can|ça|rás, |ga|lar|dão |al|can|ça|rás." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "158": { 
        nome: "Meu lar está no céu",
        compasso: "2/4",
        velMin: 60,
        velMed: 66,
        velMax: 72,
        inicio: 1,
        velMinMeiaHora: 34,
        velMedMeiaHora: 35,
        velMaxMeiaHora: 37,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Meu |lar |es|tá |no |céu, |pá|tria |de a|mor, |"+
            "On|de |com |o |Se|nhor, |ha|bi|ta|rei; |"+
            "Oh! |Quão |fe|liz |se|rei |ao |ver |o |Cri|a|dor! |"+
            "Seu |gran|de |es|plen|dor |con|tem|pla|rei." ,

            "Meu |lar |es|tá |no |céu, |pá|tria |de a|mor, |"+
            "On|de, |do |meu |la|bor, |des|ca|sa|rei; |"+
            "Cris|to |me |pro|me|te |dar, |pe|lo |Seu |fa|vor, |"+
            "He|ran|ça |que |no |céus |des|fru|ta|rei." ,

            "Meu |lar |es|tá |no |céu, |pá|tria |de a|mor, |"+
            "Em |gló|ria, |com |Je|sus, |lá |en|tra|rei; |"+
            "Quan|do, |en|fim, |che|gar |ao |rei|no |de es|plen|dor, |"+
            "Li|vre |de |to|da a |dor, |re|pou|sa|rei." ,

        ],
        temposVersos: [
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,2,2,4,
            4,2,2,2,2,4,4,2,2,8,

            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,2,2,4,
            4,2,2,2,2,4,4,2,2,8,

            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,2,2,4,
            4,2,2,2,2,4,4,2,2,8
        ],
        notas: [
            'G4','G4','G4','A4','G4','E4','D4','C4','D4','E4',
            'G4','G4','G4','A4','G4','E4','D4','C4','D4','E4',
            'C5','G4','G4','A4','A4','G4','C5','G4','G4','A4','A4','G4',
            'C5','D5','D5','E5','D5','C5','D5','C5','B4','C5',

            'G4','G4','G4','A4','G4','E4','D4','C4','D4','E4',
            'G4','G4','G4','A4','G4','E4','D4','C4','D4','E4',
            'C5','G4','G4','A4','A4','G4','C5','G4','G4','A4','A4','G4',
            'C5','D5','D5','E5','D5','C5','D5','C5','B4','C5',

            'G4','G4','G4','A4','G4','E4','D4','C4','D4','E4',
            'G4','G4','G4','A4','G4','E4','D4','C4','D4','E4',
            'C5','G4','G4','A4','A4','G4','C5','G4','G4','A4','A4','G4',
            'C5','D5','D5','E5','D5','C5','D5','C5','B4','C5'
        ],
        temposNotas: [
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,2,2,4,
            4,2,2,2,2,4,4,2,2,8,

            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,2,2,4,
            4,2,2,2,2,4,4,2,2,8,

            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,8,
            4,2,2,2,2,4,4,2,2,2,2,4,
            4,2,2,2,2,4,4,2,2,8

        ]
    },
    "159": { 
        nome: "Deus amou o mundo",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus |a|mou |o |mun|do |e |en|vi|ou |Je|sus,"+
            "O |Au|tor |da |gra|ça, |que |nos |res|ga|tou;"+
            "Gran|de |vi|tu|pé|rio |su|por|tou |na |cruz;"+
            "Pe|la |Su|a |mor|te, |ao |ho|mem |per|do|ou." ,

            "Que |glo|ri|o|so |a|mor, |que |su|bli|me |a|mor"+
            "Deus |ma|ni|fes|tou, |sal|van|do |o |pe|ca|dor!"+
            "Que |di|vi|no |a|mor, |que |i|men|so |a|mor"+
            "Deus |nos |re|ve|lou |em |Cris|to, |o |Sal|va|dor!" ,

            "O |de|cre|to |san|to |do |e|ter|no |Deus,"+
            "Foi |na |cruz, |cum|pri|do |pe|lo |Re|den|tor;"+
            "O |Seu |sa|cri|fi|ci|o |nos |a|briu |os |céus,"+
            "Trou|xe |luz |e |vi|da |pa|ra |o |pe|ca|dor." ,

            "Por |a|mor |pro|fun|do, |Deus |man|dou |Je|sus;"+
            "To|do |o |que |crer |n'E|le |não |pe|re|ce|rá,"+
            "Mas |a |vi|da |e|ter|na |em |Seu |lar |de |luz,"+
            "Com |su|per|na |gló|ria, |jun|to |a |Deus, |te|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "160": { 
        nome: "Sou o Caminho a Verdade e a Vida",
        compasso: "4/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 1,
        velMinMeiaHora: 58,
        velMedMeiaHora: 61,
        velMaxMeiaHora: 64,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "'So|u |o |Ca|mi|nho', |dis|se|-nos |Je|sus;"+
            "Nes|te |Ca|mi|nho |va|mos |nós |an|dar,"+
            "Fir|mes |na |fé, |pois |e|la |nos |con|duz"+
            "Na |es|pe|ran|ça |de, |no |céu, |mo|rar." ,

            "'So|u |a |Ver|da|de', |dis|se-o |Sal|va|dor;"+
            "Nes|sa |Ver|da|de |va|mos |nos |fir|mar;"+
            "E|la |nos |le|va ao |rei|no |de |a|mor,"+
            "On|de os |fi|éis |em |bre|ve i|rão |en|trar." ,

            "'Eu |sou |a |Vi|da', |dis|se o |Re|den|tor;"+
            "É |es|sa |Vi|da |que |su|plan|ta o |mal,"+
            "Vi|da |per|fei|ta, |Vi|da |de |a|mor,"+
            "Vi|da |su|bli|me |e |ce|les|ti|al." ,

            "Nin|guém |vi|rá |ao |Pai, |se|não |por |Mim, |"+
            "Dis|se |Je|sus, |Au|tor |da |Sal|va|ção;"+
            "Só |no |Se|nhor |há |dá|di|vas |sem |fim,"+
            "Só |n'E|le al|can|ça|re|mos |re|den|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "161": { 
        nome: "Cristo quer salvar",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |E|van|ge|lho |va|mos |a|nun|ci|ar,"+
            "Pois |Cris|to |quer |sal|var |e |quer |jus|ti|fi|car;"+
            "Ver|teu |na |cruz |Seu |san|gue |ex|pi|a|dor"+
            "O |jus|to |Re|den|tor." ,

            "Em |Cris|to |há |per|dão, |e|ter|na |sal|va|ção,"+
            "É |E|le |a |ce|les|te |Luz;"+
            "É, |do |mun|do, |e|ter|na |Re|den|ção;"+
            "Só |E|le |ao |céu |con|duz." ,

            "O |E|van|ge|lho |va|mos |pro|cla|mar,"+
            "Pois |Cris|to |quer |sal|var |e |quer |jus|ti|fi|car;"+
            "Mui |bre|ve, |em |nu|vens, |E|le |vol|ta|rá"+
            "E |o |prê|mio |nos |da|rá." ,

            "Do |E|van|ge|lho |te|mos |que |fa|lar,"+
            "Pois |Cris|to |quer |sal|var |e |quer |jus|ti|fi|car;"+
            "Por |es|sa |gra|ça, |da|mos |o |lou|vor"+
            "A |Deus, |o |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "162": { 
        nome: "Cristo salvou-me",
        compasso: "9/8",
        velMin: 40,
        velMed: 44,
        velMax: 48,
        inicio: 7,
        velMinMeiaHora: 26,
        velMedMeiaHora: 27,
        velMaxMeiaHora: 28,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Cris|to |sal|vou|-me, |te|nho |cer|te|za,"+
            "Por |Su|a |o|bra |de |re|den|ção;"+
            "Fui |per|do|a|do |por |Su|a |gra|ça,"+
            "Sin|to |a|go|ra |Su|a |un|ção." ,

            "Cris|to |sal|vou|-me; |que |a|le|gri|a"+
            "Sen|te |mi|nh'al|ma |em |Seu |a|mor;"+
            "Fui |res|ga|ta|do |e |li|ber|ta|do"+
            "Pa|ra |vi|ver |com |o |meu |Se|nhor." ,

            "Cris|to |sal|vou|-me; |si|go |por |tan|to,"+
            "Os |bons |con|se|lhos |do |Cri|a|dor;"+
            "An|do, |por |e|les, |no |bom |ca|mi|nho"+
            "Que |me |con|duz |ao |lar |de |es|plen|dor." ,

            "Oh! |Que |do|çu|ra, |sin|to |a |vir|tu|de"+
            "Que |tão |a|le|gre |me |faz |vi|ver;"+
            "Sei |que, |de |Cris|to, |a |ple|ni|tu|de"+
            "Da |Su|a |gra|ça |vou |re|ce|ber." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "163": { 
        nome: "Neste mundo de ilusão",
        compasso: "6/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nes|te |mun|do |de |i|lu|são |não |há |fe|li|ci|da|de;"+
            "Só |em |Cris|to |há |sal|va|ção, |pois |E|le |é |a |Ver|da|de;"+
            "Ei|-Lo |à |por|ta |a |ba|ter, |vi|da |quer |te |con|ce|der;"+
            "De |nin|guém |a |po|des |ter, |só |do |Cor|dei|ro |de |Deus." ,

            "Que|res |fe|li|ci|da|de?"+
            "Crê |no |Se|nhor |Je|sus,"+
            "Que, |por |ti, |des|ceu |dos |céus;"+
            "Crê |no |Cor|dei|ro |de |Deus!" ,

            "Por |ti, |Cris|to |pa|de|ceu |dan|do |a |pró|pria |vi|da;"+
            "Pe|la |mor|te |que |so|freu, |gra|ça |te |é |con|ce|di|da;"+
            "Por |ti, |E|le |a|go|ni|zou |e |Seu |san|gue |der|ra|mou;"+
            "Su|a |vi|da |não |pou|pou, |Cris|to, |o |Cor|dei|ro |de |Deus." ,

            "Sem |a |Luz |e |sem |a |Paz |an|das, |no |mun|do, |a|fli|to;"+
            "Cris|to |mui |fe|liz |te |faz, |oh! |vem |a |E|le, |con|tri|to;"+
            "Vem, |sim, |vem |ao |bom |Je|sus, |re|ce|ber |a |Su|a |luz,"+
            "Que |à |gló|ria |te |con|duz. |Vem |ao |Cor|dei|ro |de |Deus!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "164": { 
        nome: "Louvemos sempre alegres",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 45,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 50,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Lou|ve|mos |sem|pre |a|le|gres |a |Deus, |três |ve|zes |San|to,"+
            "Que, |por |a|mar|-nos |tan|to, |man|dou |o |Sal|va|dor."+
            "Je|sus, |por |Su|a |mor|te, |pa|gou |nos|sas |o|fen|sas;"+
            "So|fren|do |dor |i|men|sa, |mos|trou |o |Seu |a|mor." ,

            "Es|tão |os |nos|sos |no|mes, |por |Deus, |no |céu |es|cri|tos;"+
            "Che|gue|mo|-nos, |con|tri|tos, |ao |Pai |de |e|ter|no |a|mor."+
            "Em |paz, |na |Su|a |sen|da |ca|mi|nham |os |re|mi|dos,"+
            "Lu|tan|do |sem|pre |u|ni|dos, |com |for|ça |e |va|lor." ,

            "Je|sus |vi|rá, |com |gló|ria, |fa|zer |o |jul|ga|men|to"+
            "De |quem |Seu |man|da|men|to |não |quis |o|be|de|cer;"+
            "Por|ém, |os |Seus |re|mi|dos |já |têm |a |es|pe|ran|ça"+
            "E |a |fir|me |con|fi|an|ça |de |o |prê|mio |re|ce|ber." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "165": { 
        nome: "Foi o Senhor Jesus",
        compasso: "6/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Pa|ra |sal|var|-nos, |quem |ve|io |do |céu?"+
            "Nos|so |Se|nhor |Je|sus."+
            "E|le, |ao |po|der |do |pe|ca|do |ven|ceu,"+
            "Trou|xe|-nos |vi|da |e |luz." ,

            "Foi |o |Se|nhor |Je|sus"+
            "Que |nos |a|ben|ço|ou;"+
            "Da |es|cra|vi|dão |nos |li|ber|tou"+
            "Nos|so |Se|nhor |Je|sus." ,

            "Quem, |nes|ta |gra|ça, |nos |po|de |guar|dar?"+
            "Cris|to, |fi|el |Pas|tor."+
            "Su|as |pa|la|vras |nos |po|dem |gui|ar"+
            "Ao |lar |de |es|plen|dor." ,

            "Quem |po|de|rá |no|vas |for|ças |nos |dar?"+
            "Cris|to, |o |Rei |dos |reis."+
            "E|le |nos |faz |gló|ria |e|ter|na |al|can|çar;"+
            "É |Gui|a |dos |fi|éis." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "166": { 
        nome: "A graça inefável de Deus",
        compasso: "6/8",
        velMin: 96,
        velMed: 111,
        velMax: 126,
        inicio: 6,
        velMinMeiaHora: 62,
        velMedMeiaHora: 64,
        velMaxMeiaHora: 66,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se |mui|tos |sou|bes|sem |que |paz |sem |i|gual"+
            "Tem |quem |o |per|dão |al|can|çou;"+
            "Por |fé |bus|ca|ri|am |a |gra|ça |e|ter|nal;"+
            "I|ri|am |a |Deus, |que |os |a|mou." ,

            "A |gra|ça |i|ne|fá|vel |de |Deus,"+
            "Que |ve|io |por |Cris|to |Je|sus,"+
            "É |dom |ex|ce|len|te |que |le|va |aos |céus,"+
            "Ao |rei|no |de |gló|ria |e |luz." ,

            "Se |mui|tos |sou|bes|sem |que |gran|de |a|mor"+
            "Des|fru|tam |os |san|tos |de |Deus,"+
            "I|ri|am |a |Cris|to |Je|sus, |o |Se|nhor,"+
            "Te|ri|am |he|ran|ça |nos |céus." ,

            "Se |mui|tos |sou|bes|sem |a |gló|ria |que |há"+
            "No |rei|no |que |va|mos |her|dar,"+
            "Cre|ri|am |em |Cris|to, |que |vi|da |nos |dá,"+
            "I|ri|am |o |mal |rei|ei|tar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "167": { 
        nome: "Água viva",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Á|gua |vi|va |sai |do |Ma|an|ci|al"+
            "Que |é |Cris|to, |o |Re|den|tor;"+
            "E|la |traz, |dos |céus, |vi|da |e|ter|nal"+
            "E |con|ver|te |o |pe|ca|dor." ,

            "Des|sa |á|gua |quem |que|ser |be|ber,"+
            "Só |a |Cris|to |de|ve |re|cor|rer;"+
            "Ou|tra |á|gua |nos |fa|rá |pe|re|cer,"+
            "Mas |a |de |Je|sus |nos |faz |vi|ver." ,

            "Á|gua |vi|va |da |Fon|te |de |a|mor"+
            "Só |Je|sus |nos |po|de |dar;"+
            "D'E|le |vem |per|dão |pa|ra |o |pe|ca|dor"+
            "Que |de|se|ja |se |sal|var." ,

            "Á|gua |vi|va |do |tro|no |ce|les|ti|al,"+
            "Re|fri|gé|rio |a |to|dos |traz;"+
            "Ou|tras |á|guas |há, |mas |ne|nhuma |i|gual"+
            "À |do |Prín|ci|pe |da |paz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "168": { 
        nome: "A Palavra do Senhor",
        compasso: "4/4",
        velMin: 69,
        velMed: 74,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Na |Pa|la|vra |do |Se|nhor, |bons |con|se|lhos |po|de |a|char,"+
            "Nes|te |mun|do, |o |pe|ca|dor |que |na |gló|ria |quer |en|trar;"+
            "Tem |vir|tu|de, |tem |vi|gor |a |Pa|la|vra |do |Se|nhor,"+
            "É |a |Gui|a |do |fi|el |pa|ra |ir |ao |Cri|a|dor." ,

            "A |Pa|la|vra |do |Se|nhor"+
            "Mos|tra |a |to|do |o |pe|ca|dor"+
            "Que |Deus, |por |Seu |gran|de |a|mor,"+
            "En|vi|ou |o |Sal|va|dor." ,

            "Quem |pro|cu|ra |o |Sal|va|dor, |cer|ta|men|te |O |a|cha|rá"+
            "No |E|van|ge|lho |do |a|mor, |que |ri|que|za |a |to|dos |dá;"+
            "Quem |qui|ser |de |gra|ça |ter |o |per|dão |e |a |sal|va|ção,"+
            "De|ve |a |Cris|to |re|cor|rer, |com |sin|ce|ro |co|ra|ção." ,

            "Quem |a |Cris|to |en|con|trar |e |vir|tu|de |su|pli|car,"+
            "Trans|for|ma|do |fi|ca|rá |pa|ra, |a |Deus, |glo|ri|fi|car;"+
            "Pro|va|rá |o |pu|ro |a|mor |de |Je|sus, |o |Sal|va|dor,"+
            "Sus|ten|ta|do |pe|la |fé |no |po|der |do |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "169": { 
        nome: "Aos pés de Deus estamos",
        compasso: "6/8",
        velMin: 100,
        velMed: 113,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 66,
        velMedMeiaHora: 68,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Aos |pés |de |Deus |es|ta|mos,"+
            "Pe|ran|te |Quem |nos |pros|tra|mos;"+
            "Por |fé |O |a|do|ra|mos"+
            "Com |de|vo|ção |e |fer|vor;"+
            "Em |no|me |do |Seu |Fi|lho,"+
            "Nós |nos |a|pre|sen|ta|mos;"+
            "Hu|mil|de|men|te |o|ra|mos,"+
            "Ro|gan|do |Seu |fa|vor." ,

            "Tu|do |o |que |pa|de|ce|mos,"+
            "Já |pa|de|ceu |nos|so |Mes|tre,"+
            "Mas |foi |vi|to|ri|o|so;"+
            "Nos |con|ce|deu |sal|va|ção;"+
            "E|le |in|ter|ce|de |a|go|ra |jun|to"+
            "Ao |Pai |ce|les|te"+
            "Pa|ra |ser |a|ten|di|da"+
            "A |nos|sa |o|ra|ção." ,

            "Nun|ca |de|sa|ni|me|mos |mas,"+
            "Con|fi|an|tes, |o|re|mos,"+
            "Cer|tos |de |que |Deus |ou|ve |a |voz"+
            "Do |nos|so |cla|mor;"+
            "E|le |é |o |O|ni|po|ten|te,"+
            "Só |n'E|le |con|fie|mos;"+
            "To|do |o |lou|vor |da|re|mos"+
            "A |Deus, |o |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "170": { 
        nome: "Pai eternal envia dos céus...",
        compasso: "9/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 7,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gló|ria! |A|le|lu|ia! |Ó |bom |Pai |dos |céus,"+
            "O |E|van|ge|lho |nos |fez |fi|lhos |Teus;"+
            "Por |E|le |te|mos |a |fé |em |Je|sus,"+
            "Te|mos |con|for|to, |jus|ti|ça |e |luz." ,

            "Pai |e|ter|nal, |en|vi|a |dos |céus"+
            "Tu|a |fi|el |Pa|la|vra |de |a|mor;"+
            "N'E|la |cons|is|te |a |vi|da |dos |Teus;"+
            "Gló|ria |ao |Teu |No|me, |a|ma|do |Se|nhor!" ,

            "A |Ti |per|ten|cem, |ó |Pai |de |a|mor,"+
            "Gló|ria |e |hon|ra, |e |to|do |o |lou|vor;"+
            "Pe|lo |E|van|ge|lho |nós |te|mos |a |paz,"+
            "For|ças |do |al|to |e |gra|ça |e|fi|caz." ,

            "É |o |E|van|ge|lho |que |nos |faz |cres|cer"+
            "Na |san|ti|da|de, |vir|tu|de |e |po|der;"+
            "N'E|le |en|ten|de|mos |Teu |gran|de |fa|vor;"+
            "Da|mos|-Te |gló|ria, |ó |Pai |de |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "171": { 
        nome: "Vida eterna Vida eterna!",
        compasso: "4/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 36,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "As |mo|ra|das |pre|pa|ra|das |pa|ra |os |san|tos |do |Se|nhor"+
            "São |or|na|das |de |be|le|za |sem |i|gual;"+
            "Ne|las |nós |ha|bi|ta|re|mos |com |Je|sus, |o |Re|den|tor,"+
            "E |com |Deus, |o |nos|so |Pai |ce|les|ti|al." ,

            "Vi|da |e|ter|na, |vi|da |e|ter|na"+
            "Nós |te|re|mos |jun|to |ao |nos|so |Deus;"+
            "Re|go|zi|jo, |a|le|gri|a |sem|pi|ter|na,"+
            "É |o |prê|mio |dos |e|lei|tos |Seus." ,

            "É |de |ou|ro |a |ci|da|de |glo|ri|o|sa |do |Se|nhor,"+
            "Res|plan|de|ce |pa|ra |sem|pre |sua |luz;"+
            "Não |há |ne|la |sol |nem |lu|a, |pois |tem |luz |do |Cri|a|dor"+
            "E |tam|bém |a |sua |Lâm|pa|da |é |Je|sus." ,

            "Com |as |ves|tes |bran|cas |e |en|to|an|do |hi|nos |de |lou|vor,"+
            "Tri|un|fan|tes, |en|tra|re|mos |lá |nos |céus;"+
            "Lá |ve|re|mos |to|dos |quan|tos |já |dor|mi|ram |no |Se|nhor,"+
            "Lá |ve|re|mos, |fa|ce |a |fa|ce, |nos|so |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "172": { 
        nome: "Um culto santo ao Senhor",
        compasso: "3/4",
        velMin: 54,
        velMed: 58,
        velMax: 63,
        inicio: 2.5,
        velMinMeiaHora: 34,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Um |cul|to |san|to |ao |Se|nhor |"+
            "Foi |ce|le|bra|do |com |a|mor; |"+
            "Foi |re|ce|bi|do |lá |nos |céus |"+
            "Por |nos|so |po|de|ro|so |Deus.",  

            "Um |no|vo a|len|to |há |em |nós, |"+
            "Pois |Deus |ou|viu |a |nos|sa |voz; |"+
            "A |sã |Pa|la|vra |nos |man|dou |"+
            "E |nos|sas |for|ças |re|no|vou. ",

            "Com |o |con|se|lho |di|vi|nal |"+
            "Su|plan|ta|re|mos |to|do o |mal; |"+
            "E, |fa|ce a |fa|ce, |lá |nos |céus, |"+
            "Ve|re|mos |nos|so |gran|de |Deus."
        ],
        temposVersos: [
            2, 2, 2, 4, 4, 2, 2, 6,
            2, 2, 2, 4, 4, 2, 2, 6,
            2, 2, 2, 4, 4, 2, 2, 6,
            2, 2, 2, 2, 2, 4, 4, 6
        ],
        notas: [
            'G4', 'G4', 'G4', 'C5', 'G4', 'G4', 'E4', 'D4',
            'F4', 'F4', 'F4', 'D5', 'B4', 'A4', 'B4', 'C5',
            'G4', 'G4', 'G4', 'G4', 'E4', 'F4', 'G4', 'A4',
            'A4', 'C5', 'A4', 'G4', 'E4', 'D4', 'F4', 'E4'            
        ],
        temposNotas: [
            2, 2, 2, 4, 4, 2, 2, 6,
            2, 2, 2, 4, 4, 2, 2, 6,
            2, 2, 2, 4, 4, 2, 2, 6,
            2, 2, 2, 2, 2, 4, 4, 6
        ]
    },
    "173": { 
        nome: "Para ouvir aqui estamos",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pa|ra |ou|vir |a|qui |es|ta|mos"+
            "A |Pa|la|vra |do |Se|nhor;"+
            "Só |por |E|la |te|mos |vi|da"+
            "E |a |luz |do |Sal|va|dor." ,

            "Tem|plos |san|tos |fo|mos |fei|tos"+
            "Pa|ra |ha|bi|ta|ção |de |Deus;"+
            "O |Se|nhor |nos |quer |per|fei|tos;"+
            "So|mos |os |e|lei|tos |Seus." ,

            "E|xal|tan|do |a|qui |es|ta|mos"+
            "A |Je|sus, |que |nos |sal|vou;"+
            "To|do |o |lou|vor |Lhe |da|mos;"+
            "E|le |já |nos |res|ga|tou." ,

            "Nós |de|ve|mos |ser|-Lhe |gra|tos"+
            "Pe|lo |Seu |i|men|so |a|mor;"+
            "Nes|ta |ca|sa, |e |em |to|da |a |par|te,"+
            "E|xal|ta|mos |ao |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "174": { 
        nome: "Vem atender ao Seu chamado",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |a|ma|do |Je|sus |Cris|to |dá |ou|vi|dos,"+
            "E|le |diz |Vem |a |Mim; "+
            "E |se|rão |os |teus |pe|ca|dos |es|que|ci|dos;"+
            "Cris|to |diz |Vem |a |Mim. ",

            "Vem |a|ten|der |ao |Seu |cha|ma|do;"+
            "Se|rás, |por |Cris|to, |per|do|a|do"+
            "E |fa|rá |de |ti |um |bem-|a|ven|tu|ra|do."+
            "Diz |Je|sus: |Vem |a |Mim. ",

            "Só |Je|sus |tem |for|ça |pa|ra |li|ber|tar|-te;"+
            "Crê |no |teu |Re|den|tor;"+
            "E|le |quer, |com |Deus, |o |Pai, |re|con|ci|li|ar|-te;"+
            "Crê |no |teu |Sal|va|dor." ,

            "So|bre |a |a|mar|ga |cruz, |por |ti, |pro|vou |a |mor|te;"+
            "Ou|ve |a |voz |do |Se|nhor;"+
            "Não |rei|ei|tes |tão |pre|ci|o|sa |e |gran|de |sor|te;"+
            "Vem |pro|var |Seu |a|mor." ,            
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "175": { 
        nome: "O Senhor Jesus te chama",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Se|nhor |Je|sus |te |cha|ma,"+
            "Com |su|bli|me |e |gran|de |a|mor;"+
            "Não |des|pre|zes |Quem |te |a|ma"+
            "E |quer |ser |teu |Sal|va|dor." ,

            "Dei|xa |Cris|to, |o |Rei |da |gló|ria,"+
            "Pos|suir |teu |co|ra|ção,"+
            "Se |de|se|jas |ter |vi|tó|ria"+
            "E |e|ter|na |sal|va|ção." ,

            "O |pra|zer |bem |ce|do |fin|da"+
            "Nes|te |mun|do |se|du|tor;"+
            "Cris|to |quer, |em |Su|a |vin|da,"+
            "Dar|-te |o |rei|no |de |es|plen|dor." ,

            "Ho|je |é |di|a |a|cei|tá|vel,"+
            "Ho|je |é |di|a |de |per|dão;"+
            "Com |a|mor |i|ni|gua|lá|vel,"+
            "Cris|to |dá |a |sal|va|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "176": { 
        nome: "Por Ti vivo ó Deus potente",
        compasso: "4/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vi|ver |de|se|jo |só |por |Ti, |Se|nhor,"+
            "Cum|prin|do |sem|pre |Teu |que|rer,"+
            "Mos|tran|do |a |luz |ao |mun|do |en|ga|na|dor"+
            "E |con|sa|gran|do |a |Ti |meu |ser." ,

            "Por |Ti |vi|vo, |ó |Deus |po|ten|te;"+
            "Por |Ti, |Se|nhor, |sem|pre |vi|ve|rei;"+
            "Com |mi|nh'al|ma, |mui |re|ve|ren|te,"+
            "O |Teu |No|me |ben|di|rei." ,

            "Vi|ver |por |Ti, |Se|nhor, |hon|ro|so |é,"+
            "Oh! |Faz|-me |an|dar |em |Teu |a|mor;"+
            "Em |paz |pros|se|gui|rei |de |fé |em |fé"+
            "E |ven|ce|rei |o |ten|ta|dor." ,

            "Vi|ver |de|se|jo, |ó |Deus, |em |re|ti|dão,"+
            "Com |as |vir|tu|des |ce|les|ti|ais;"+
            "De |Ti |re|ce|be|rei |o |ga|lar|dão"+
            "E |as |ri|que|zas |e|ter|nais." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "177": { 
        nome: "Eu necessito achegar-me",
        compasso: "9/8",
        velMin: 40,
        velMed: 45,
        velMax: 50,
        inicio: 1,
        velMinMeiaHora: 26,
        velMedMeiaHora: 27,
        velMaxMeiaHora: 28,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Eu |ne|ces|si|to |a|che|gar|-me"+
            "Ao |meu |fi|el |e |bon|do|so |Se|nhor,"+
            "Pa|ra |po|der |con|so|lar|-me"+
            "Sem|pre |no |Seu |in|fi|ni|to |a|mor." ,

            "Sim, |eu |ne|ces|si|to |en|tre|gar|-me"+
            "Nós |bra|ços |do |meu |Re|den|tor;"+
            "Só |em |Je|sus |po|de|rei |a|bri|gar|-me,"+
            "Pois |é |fi|el |De|fen|sor." ,

            "Eu |ne|ces|si|to |a|ter|-me"+
            "Ao |meu |Se|nhor, |o |ve|raz |Re|den|tor;"+
            "Não |pos|so, |eu |só, |de|fen|der|-me,"+
            "Mas |com |Je|sus |eu |se|rei |ven|ce|dor." ,

            "Eu |ne|ces|si|to |pros|trar|-me"+
            "Aos |san|tos |pés |do |meu |bom |Re|den|tor;"+
            "E|le |ao |céu |quer |le|var|-me"+
            "Por |Seu |e|ter|no |e |su|bli|me |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "178": { 
        nome: "A Palavra preciosa",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |Pa|la|vra |da |ver|da|de,"+
            "De |Deus |Pai, |o |Cri|a|dor,"+
            "Traz |dos |céus |a |san|ti|da|de"+
            "Aos |re|mi|dos |do |Se|nhor." ,

            "A |Pa|la|vra |pre|ci|o|sa"+
            "Do |fi|el, |vi|ven|te |Deus,"+
            "É |Es|pa|da |po|de|ro|sa,"+
            "Que |de|fen|de |os |san|tos |Seus." ,

            "A |Pa|la|vra |cri|a|do|ra |trou|xe"+
            "Ao |mun|do |gran|de |luz"+
            "Pe|la |o|bra |re|den|to|ra"+
            "Con|su|ma|da |por |Je|sus." ,

            "Pa|ra |sem|pre |per|ma|ne|ce"+
            "A |Pa|la|vra |di|vi|nal;"+
            "Nos|sas |al|mas |for|ta|le|ce"+
            "E |pro|te|ge|-nos |do |mal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "179": { 
        nome: "Trabalhai Trabalhai!",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tra|ba|lhe|mos, |ir|mãos, |so|mos |ser|vos |de |Deus,"+
            "As |se|a|ras |de |Cris|to |já |bran|cas |es|tão;"+
            "Re|ce|ben|do |as |for|ças |que |vêm |lá |dos |céus,"+
            "Cum|pri|re|mos, |a|le|gres, |a |nos|sa |mis|são." ,

            "Tra|ba|lhai, |tra|ba|lhai,"+
            "Vi|gi|ai, |vi|gi|ai"+
            "E |o|rai |sem |ces|sar,"+
            "Pois |bre|ve |o |Mes|tre |vai |vol|tar." ,

            "Tra|ba|lhe|mos, |ir|mãos, |com |a|fin|co |e |a|mor,"+
            "A|nun|ci|an|do |aos |fa|min|tos |que |o |pão |ce|les|ti|al"+
            "É |Je|sus, |a |Pa|la|vra |de |vi|da |e |vi|gor;"+
            "E|la |nos |a|li|men|ta |e |nos |li|vra |do |mal." ,

            "Tra|ba|lhe|mos, |ir|mãos, |pois |un|giu|-nos |o |Pai"+
            "Pa|ra |a |gra|ça |de |Cris|to, |por |fé |pro|pa|gar;"+
            "Os |ta|len|tos, |o |Mes|tre |nos |diz: |'Gran|je|ai'. "+
            "So|bre |o |mui|to, |no |céu, |nos |i|rá |co|lo|car." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "180": { 
        nome: "Jesus é a Luz que veio ao mundo...",
        compasso: "4/4",
        velMin: 76,
        velMed: 82,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |é |a |Luz |que |ve|io"+
            "Ao |mun|do |pa|ra |me |res|ga|tar;"+
            "Em |tre|vas |eu |ja|mais |an|da|rei,"+
            "Pois |E|le |me |faz |bri|lhar." ,

            "Se |eu |an|dar |nes|sa |Luz,"+
            "Um |di|a |eu |ve|rei |o |fi|el, |bom |Je|sus;"+
            "Na |ca|sa |de |Deus |Pai,"+
            "Eu |con|tem|pla|rei |to|do |o |es|plen|dor"+
            "Do |meu |Re|den|tor. |Que |a|le|gri|a!"+
            "Lá |não |há |tris|te|za |e |nem |mal,"+
            "Só |o |a|mor |pe|re|nal." ,

            "Je|sus, |com |Su|a |luz |di|vi|na,"+
            "Mos|trou|-me |a |sal|va|ção;"+
            "A |mi|nha |men|te |es|cla|re|ceu;"+
            "Li|vrou|-me |da |per|di|ção." ,

            "Je|sus, |vem |com |a |Tu|a |glo|ri|o|sa |luz"+
            "Pa|ra |me |gui|ar"+
            "No |E|van|ge|lho |san|to,"+
            "A|té |fin|dar |meu |pe|re|gri|nar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "181": { 
        nome: "Só em Cristo só em Cristo",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vós, |que |pro|cu|rais |a |á|gua |que |dá |vi|da,"+
            "Vin|de |a |Cris|to, |Fon|te |do |per|dão;"+
            "To|da |a |al|ma |con|tris|ta|da |e |a|ba|ti|da,"+
            "Em |Je|sus |en|con|tra|rá |a |sal|va|ção." ,

            "Só |em |Cris|to, |só |em |Cris|to,"+
            "Á|gua |vi|va |to|dos |po|dem |en|con|trar;"+
            "Só |em |Cris|to, |só |em |Cris|to,"+
            "Vós, |se|den|tes, |po|de|reis |vos |sa|ci|ar." ,

            "Nes|ta |fon|te |tão |pre|ci|o|sa, |i|nes|go|tá|vel,"+
            "Re|fri|gé|rio |to|dos |a|cha|rão;"+
            "Re|cor|ren|do |a |Je|sus, |Pas|tor |a|má|vel,"+
            "Os |se|den|tes |não |mais |se|de |sen|ti|rão." ,

            "Cris|to |é |o |Ma|an|ci|al |que |pu|ri|fi|ca"+
            "E |en|no|bre|ce |to|do |o |co|ra|ção;"+
            "Seu |Es|pí|ri|to |en|co|ra|ja, |san|ti|fi|ca"+
            "E |en|si|na |a |vi|ver |em |re|ti|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "182": { 
        nome: "Brevemente retornará Jesus Cristo",
        compasso: "3/4",
        velMin: 56,
        velMed: 61,
        velMax: 66,
        inicio: 3,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bre|ve|men|te |re|tor|na|rá"+
            "E a |pro|mes|sa |cum|pri|rá,"+
            "Je|sus |Cris|to, o |Rei |dos |reis,"+
            "Que |ao |céu |nos |le|va|rá;"+
            "Pois |só |E|le |po|de |nos |dar"+
            "O |e|ter|no |ga|lar|dão." ,

            "Va|mos |to|dos |nos |con|sa|grar"+
            "E |ser|vir |ao |Re|den|tor;"+
            "É |glo|ri|o|so |o |por|vir"+
            "No |Seu |rei|no |de es|plen|dor;"+
            "Nos|sa |al|ma |des|fru|ta|rá |paz"+
            "Que |nun|ca |fin|da|rá." ,

            "A |po|ten|te |voz |de |Je|sus,"+
            "Ou|vi|rão |os |san|tos |Seus,"+
            "Con|vi|dan|do |os |fi|éis"+
            "A |en|tra|rem |lá |nos |céus;"+
            "Bre|ve|men|te |re|tor|na|rá"+
            "Cris|to, e|ter|no |Rei |dos |reis." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "183": { 
        nome: "Cristo Jesus é a Porta dos céus",
        compasso: "6/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus |é |a |Por|ta |dos |céus,"+
            "N'E|le |há |paz, |n'E|le |há |luz;"+
            "Re|con|ci|lia |o |ho|mem |com |Deus;"+
            "Só |E|le |à |gló|ria |con|duz." ,

            "Por |es|sa |Por|ta |de|ve|mos |en|trar"+
            "E |ca|mi|nhar, |sem |he|si|tar;"+
            "Sal|var|-se-á |quem |por |E|la |pas|sar,"+
            "N'E|la |tam|bém |con|fi|ar;"+
            "Não |mais |du|vi|des, |não |de|ves |tar|dar"+
            "Pa|ra |en|trar, |sem |va|ci|lar;"+
            "Bre|ve, |Je|sus |vol|ta|rá |pa|ra |os |Seus"+
            "E |vai |le|vá|-los |a |Deus." ,

            "Cris|to |é |a |Por|ta, |e |ou|tro |não |há,"+
            "Que |traz |o |bem |ce|les|ti|al;"+
            "Vi|da |com |gló|ria |aos |jus|tos |da|rá,"+
            "Paz |e |re|pou|so |e|ter|nal." ,

            "Cris|to, |Au|tor |de |e|ter|nal |re|den|ção,"+
            "Ve|io |de |Deus, |le|va |a |Deus;"+
            "Por |es|sa |Por|ta, |os |san|tos |se|rão"+
            "Glo|ri|fi|ca|dos |nos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "184": { 
        nome: "Nós Te louvamos por fé grande Deus",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nós |Te |lou|va|mos, |por |fé, |gran|de |Deus,"+
            "E |im|plo|ra|mos |Teu |san|to |fa|vor;"+
            "An|jos |Te |lou|vam |lá |nos |céus"+
            "E |nós |tam|bém |Te |da|mos |lou|vor." ,

            "Sal|va |Teu |po|vo,|ó |Deus, |Cri|a|dor,"+
            "Pe|lo |Teu |gran|de, in|fi|ni|to |po|der;"+
            "Dá|-nos |mais |fé, |maior |vi|gor,"+
            "Pa|ra |que, o |mal, |pos|sa|mos |ven|cer." ,

            "Ven|ha |Teu |rei|no |e|ter|no |de |paz"+
            "So|bre |Teus |san|tos |fi|éis |do|mi|nar;"+
            "Pe|la |pa|la|vra |e|fi|caz"+
            "Tu |nos |fa|rás, |na |gló|ria, |en|trar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "185": { 
        nome: "Deus mandou Sua Luz",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus |man|dou |ao |mun|do |Su|a |Luz |bri|lhar"+
            "E |as |tre|vas |do |pe|ca|do |dis|si|par,"+
            "A|nun|ci|an|do |a |e|ter|na |sal|va|ção,"+
            "Paz |di|vi|na |e |per|dão." ,

            "O |Sol |da |jus|ti|ça |Su|a |luz |rai|ou,"+
            "E |o |er|mo |em |ter|ra |fér|til |trans|for|mou;"+
            "To|do |a|que|le |que |a|cei|tar |a |Luz |dos |céus,"+
            "O |per|dão |te|rá |de |Deus." ,

            "Te|mos |em |Je|sus |a |luz |que |não |tem |par,"+
            "Luz |que |bri|lha |sem |ja|mais |se |a|pa|gar,"+
            "Sol |que |nun|ca |ces|sa |de |res|plan|de|cer"+
            "So|bre |quem |em |Cris|to |crer." ,

            "Bri|lha |es|sa |Luz |em |mim,"+
            "Des|de |que |a|cei|tei |Je|sus;"+
            "Es|sa |Luz |i|lu|mi|nou |o |meu |vi|ver"+
            "E |me |faz |res|plan|de|cer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "186": { 
        nome: "Cristo Luz do mundo",
        compasso: "3/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "On|de |ha|via |pran|to, |jú|bi|lo |se |ou|viu;"+
            "Em |lu|gar |de |dor, |e|ter|na |paz |sur|giu;"+
            "On|de |do|mi|nou |com|ple|ta |se|qui|dão,"+
            "Á|guas |bro|ta|ram |e |trou|xeram |sal|va|ção." ,

            "Cris|to, |Luz |do |mun|do,"+
            "É |o |Au|tor |de |tão |pre|ci|o|sa |re|den|ção." ,

            "Cris|to, |Es|tre|la |d'Al|va, |Luz |ce|les|ti|al,"+
            "Que |res|plan|de|ceu |a |to|do |o |mor|tal,"+
            "Ve|io |a|nun|ci|ar |que |a |noi|te |já |pas|sou"+
            "E |que |o |di|a |da |jus|ti|ça |já |che|gou." ,

            "Cris|to, |Con|se|lhei|ro, |Prín|ci|pe |da |paz,"+
            "Pão |que |vem |do |céu |e |vi|da |a |to|dos |traz,"+
            "Rei|no |di|vi|nal |que |so|bre |nós |des|ceu,"+
            "É |o |Sal|va|dor |que |Deus |ao |ho|mem |pro|me|teu." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "187": { 
        nome: "Jesus Cristo habita em nós",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |que |ho|je |é |mis|té|rio |pa|ra |os |san|tos |do |Se|nhor,"+
            "Re|ve|la|do |lhes |se|rá |por |Seu |Es|pí|ri|to |de |a|mor,"+
            "Pois |es|tá |em |Je|sus |Cris|to |a |ple|ni|tu|de |di|vi|nal"+
            "E |os |jus|tos |par|ti|ci|pam |do |se|gre|do |ce|les|ti|al." ,

            "Je|sus |Cris|to |ha|bi|ta |em |nós,"+
            "Su|a |luz |ha|bi|ta |em |nós;"+
            "Nes|ta |gra|ça |pre|ci|o|sa"+
            "Não |nos |sen|ti|re|mos |sós;"+
            "Gló|ria! |gló|ria! |a|le|lu|ia!"+
            "Je|sus |Cris|to |ha|bi|ta |em |nós!" ,

            "Nós |nem |tu|do |en|ten|de|mos, |pois |o |Pai |o |quer |as|sim,"+
            "Mas, |de |luz |em |luz, |i|re|mos |sem|pre |a|van|te |a|té |o |fim;"+
            "Nos|sos |o|lhos, |des|ven|da|dos |por |Je|sus, |con|tem|pla|rão"+
            "Os |mis|té|rios |e|ter|nais, |que |re|ve|la|dos |nos |se|rão." ,

            "Ho|je |fa|la |pe|lo |Es|pí|ri|to |da |gra|ça, |o |Se|nhor,"+
            "E |nos |mos|tra |o |ca|mi|nho |pa|ra |o |rei|no |de |es|plen|dor,"+
            "Mas, |em |bre|ve, |fa|ce |a |fa|ce, |ou|vi|re|mos |Su|a |voz."+
            "Gló|ria |e|ter|na |al|can|ça|re|mos, |Je|sus |Cris|to |ha|bi|ta |em |nós!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "188": { 
        nome: "O Mestre habita em mim",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Con|ver|são |glo|ri|o|sa |o|pe|rou|-se |em |meu |ser,"+
            "Pois |Cris|to |ha|bi|ta |em |mim;"+
            "Sin|to |paz |que |ou|to|ra |não |pude |ha|ver;"+
            "O |Mes|tre |ha|bi|ta |em |mim." ,

            "Com |Cris|to |em |meu |co|ra|ção"+
            "Eu |sin|to |re|al |sal|va|ção."+
            "Ven|tu|ro|so, |a|guar|do |a |gló|ria |de |Deus,"+
            "Pois |Cris|to |me |le|va |aos |céus." ,

            "Se|pa|ra|do |da |sen|da |do |mal |eu |es|tou,"+
            "Pois |Cris|to |ha|bi|ta |em |mim;"+
            "Los |pe|ca|dos |pas|sa|dos |Deus |me |per|do|ou;"+
            "O |Mes|tre |ha|bi|ta |em |mim." ,

            "Fin|da|rei |os |meus |di|as |na |gra|ça |de |Deus,"+
            "Pois |Cris|to |ha|bi|ta |em |mim;"+
            "Sen|ti|rei |Su|a |paz, |pois |i|rei |pa|ra |os |céus;"+
            "O |Mes|tre |ha|bi|ta |em |mim." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "189": { 
        nome: "Oh! Que preciosa paz",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Oh! |que |pre|ci|o|sa |paz |pro|vém"+
            "De |Je|sus, |o |Sal|va|dor!"+
            "Os |fi|éis |des|fru|tam |des|se |bem:"+
            "Paz |de |Deus, |ó |Cri|a|dor." ,

            "Oh! |Que |pre|ci|o|sa"+
            "É |a |paz |de |Deus!"+
            "Bên|ção |glo|ri|o|sa"+
            "Que |so|men|te |vem |dos |céus!" ,

            "Pa|ra |es|sa |paz |Deus |nos |cha|mou,"+
            "Por |Je|sus, |o |E|ma|nu|el;"+
            "A|bun|dan|te|men|te |a |der|ra|mou"+
            "So|bre |o |jus|to |e |fi|el." ,

            "Só |a |paz |de |Deus |pro|te|ge|rá"+
            "Nos|sa |men|te |e |co|ra|ção;"+
            "E, |de |trans|gre|dir, |nos |li|vra|rá,"+
            "Vin|do |a |nós |a |ten|ta|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "190": { 
        nome: "Amados não temamos",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Man|ten|do |nos|sa |vi|da |con|sa|gra|da |ao |Se|nhor,"+
            "Do |céu |vi|rão |as |bên|ções, |pois |fi|el |é |o |Cri|a|dor;"+
            "A |gra|ça |te|nha|mos, |sem |ja|mais |es|mo|re|cer;"+
            "Je|sus |ven|ceu |o |mun|do |e |nos |fa|rá |pre|va|le|cer." ,

            "A|ma|dos, |não |te|ma|mos"+
            "Na |mar|cha |pa|ra |os |céus;"+
            "A |Cris|to |o|be|de|ça|mos,"+
            "Pois |nos |le|va |pa|ra |Deus." ,

            "Na |fé |for|ta|le|ci|dos, |re|ves|ti|dos |de |po|der"+
            "Se|re|mos |pe|lo |Mes|tre, |que |nos |dá |o |Seu |sa|ber;"+
            "A|van|te, |es|for|ce|mo|-nos |em |o|bras |di|vi|nais;"+
            "O |prê|mio |é |vi|da |e|ter|na |nas |mo|ra|das |ce|les|ti|ais." ,

            "Lem|bre|mo|-nos |de |to|dos |os |con|se|lhos |que |nos |deu"+
            "Je|sus, |o |Ver|da|dei|ro, |que |a |gló|ria |pro|me|teu;"+
            "A|van|te, |com |pro|pó|si|to |em |nos|so |co|ra|ção"+
            "De |sem|pre |a |Deus |ser|vir |e |as|sim |che|gar |à |per|fei|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "191": { 
        nome: "Vem vem consolar-me",
        compasso: "6/8",
        velMin: 100,
        velMed: 113,
        velMax: 126,
        inicio: 6,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Em |Ti, |Se|nhor, |a|bri|ga|do,"+
            "Te|rei |for|ça |na |pro|va|ção;"+
            "Tam|bém |se|rei |con|so|la|do"+
            "Na |ho|ra |da |a|fli|ção." ,

            "Vem, |vem |con|so|lar|-me,"+
            "Pai |ce|les|ti|al, |com |Teu |a|mor;"+
            "Con|fi|o |em |Ti, |ó |Deus |Cri|a|dor,"+
            "Po|de|ro|so |e |fi|el |Se|nhor." ,

            "Ó |Deus |e|ter|no, |en|vi|as|te,"+
            "Por |Cris|to, |ve|raz |sal|va|ção;"+
            "Mi|nh'al|ma |jus|ti|fi|cas|te,"+
            "Me |con|ce|des|te |per|dão." ,

            "Por |Ti |ó |Deus, |eu |e|xis|to,"+
            "Ca|mi|nho |Con|ti|go |por |fé;"+
            "A |paz |que |sin|to |em |Cris|to,"+
            "Do |Teu |a|mor, |fru|to |é." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "192": { 
        nome: "Quão fiel promessa Jesus nos fez",
        compasso: "6/8",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 6,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus, |o |Se|nhor, |pre|pa|rou"+
            "O |lu|gar |aos |fi|lhos |de |Deus;"+
            "No |e|ter|no |lar |on|de |E|le |en|trou"+
            "Fa|rá |en|trar |os |san|tos |Seus." ,

            "Quão |fi|el |pro|mes|sa |Je|sus |nos |fez:"+
            "'Con|vos|co |sem|pre |es|ta|rei!'; "+
            "Bre|ve|men|te |em |nu|vens |re|tor|na|rá"+
            "O |nos|so |gran|de |Rei." ,

            "Je|sus, |ór|fãos |não |nos |dei|xou;"+
            "En|vi|ou |o |Con|so|la|dor;"+
            "Por |i|men|so |a|mor, |nos |a|ben|ço|ou"+
            "Com |vi|da |e|ter|na |e |es|plen|dor." ,

            "Quão |do|ce |é |sa|ber |que |Je|sus"+
            "Nos |deu |fé |a|fim |de |an|dar"+
            "Pe|la |sua |sen|da |de |paz |e |luz,"+
            "A|té |o |bre|ve |Seu |vol|tar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "193": { 
        nome: "Nada jamais me faltará",
        compasso: "9/8",
        velMin: 120,
        velMed: 132,
        velMax: 144,
        inicio: 4,
        velMinMeiaHora: 75,
        velMedMeiaHora: 77,
        velMaxMeiaHora: 80,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "A|pas|cen|ta|do |por |Je|sus |Cris|to"+
            "Na|da |ja|mais |me |fal|ta|rá;"+
            "De |con|fi|an|ça |eu |me |re|vis|to,"+
            "O |meu |Pas|tor |não |fa|lha|rá." ,

            "Si|go |de |per|to |meu |gran|de |Mes|tre,"+
            "Na|da |ja|mais |me |fal|ta|rá;"+
            "No |seu |a|pris|co |san|to |e |ce|les|te"+
            "To|do |o |fi|el |pro|te|gi|do |es|tá." ,

            "Pas|so |a |pas|so, |por |fé |pros|si|go"+
            "Ru|mo |à |pá|tria |ce|les|ti|al;"+
            "Na |tem|pes|ta|de |te|nho |a|bri|go;"+
            "Te|nho |so|cor|ro |di|vi|nal." ,

            "Eu |vou |ven|cen|do |de |di|a |em |di|a"+
            "As |mi|nhas |pro|vas, |pe|la |fé;"+
            "Cris|to |me |un|ge |com |a|le|gri|a;"+
            "Sem|pre |pre|sen|te |E|le |é." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "194": { 
        nome: "Vós chorareis e vos lamentareis",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Vós, |na |ver|da|de |cho|ra|reis |e |vos |la|men|ta|reis; |"+
            "'O |mun|do |se |a|le|gra|rá', |dis|se |o |Rei |dos |reis;"+
            "Mas |eis |que, |mui|to |em |bre|ve, |Cris|to |re|tor|na|rá"+
            "E |nos|sa |a|le|gri|a |nun|ca |ter|mi|na|rá." ,

            "O|ran|do |em |no|me |de |Je|sus, |Deus |nos |a|ten|de|rá;"+
            "Por |Seus |fi|éis, |o |Re|den|tor |in|ter|ce|den|do |es|tá;"+
            "Por |gran|de |a|mor |pa|ter|no, |Deus |ou|ve |as |o|ra|ções"+
            "E |for|ças |nos |con|ce|de |nas |nos|sas |pro|va|ções." ,

            "Nós |so|fre|re|mos |a|fli|ções |co|mo |Je|sus |so|freu;"+
            "Bom |â|ni|mo |de|ve|mos |ter, |pois |Cris|to |já |ven|ceu;"+
            "O |rei|no |Lhe |per|ten|ce |na |ter|ra |e |nos |céus;"+
            "Com |E|le |rei|na|re|mos |jun|to |aos |san|tos |Seus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "195": { 
        nome: "Senhor estou disposto",
        compasso: "3/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 3,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor, |es|tou |dis|pos|to |a |sem|pre |Te |se|guir;"+
            "No |Teu |ca|mi|nho |san|to, |te|rei |fe|liz |por|vir;"+
            "Quão |be|la |é |a |he|ran|ça |que |me |da|rás |nos |céus,"+
            "De|se|jo |re|ce|bê|-la, |ó |glo|ri|o|so |Deus." ,

            "Se|nhor, |os |Teus |pre|cei|tos |dis|po|nho|-me |a |cum|prir"+
            "E |si|go |os |Teus |con|se|lhos; |ao |céu |de|se|jo |ir."+
            "U|ni|do |aos |san|tos |an|jos, |em |gló|ria |vi|ve|rei"+
            "No |Teu |ce|les|te |rei|no |com |Cris|to, |o |gran|de |Rei." ,

            "Se|nhor, |a |Tu|a |fa|ce |de|se|jo |con|tem|plar"+
            "Na |gló|ria |in|com|pa|rá|vel |do |Teu |e|ter|no |lar."+
            "Eu |sin|to |a |Tu|a |gra|ça, |tam|bém |o |Teu |vi|gor,"+
            "E |na|da |me |im|pe|de |de |hon|rar|-Te |com |fer|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "196": { 
        nome: "Sem Deus Pai",
        compasso: "6/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 1,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sem |Deus |Pai |so|mos |frá|geis |hu|ma|nos,"+
            "Sem |Deus, |não |há |em |nós |es|pe|ran|ça;"+
            "Nes|te |mun|do |em |que |pe|re|gri|na|mos,"+
            "Só |por |E|le |nos |vem |se|gu|ran|ça." ,

            "É |Je|sus |Cris|to |Quem |nos |con|vi|da"+
            "Ao |Seu |rei|no |de |gló|ria |nos |céus;"+
            "E|le |nos |dá |po|der, |gra|ça |e |vi|da,"+
            "E |as |san|tas |pro|mes|sas |de |Deus." ,

            "Sem |Je|sus |Cris|to |não |te|mos |vi|da,"+
            "Sem |Je|sus, |san|to |a|mor |não |pro|va|mos;"+
            "E|le, |por |gra|ça, |nos |dá |guar|ri|da"+
            "Nós |pe|ri|gos |que |a|qui |en|con|tra|mos." ,

            "Sem |o |Es|pí|ri|to |San|to |não |ve|mos,"+
            "Sem |o |Es|pí|ri|to, |an|da|mos |er|ran|tes;"+
            "Só |por |E|le |a |Pa|la|vra |en|ten|de|mos"+
            "E |se|re|mos, |en|tão, |tri|un|fan|tes." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "197": { 
        nome: "Senhor por Teu poder",
        compasso: "6/4",
        velMin: 84,
        velMed: 94,
        velMax: 104,
        inicio: 6,
        velMinMeiaHora: 52,
        velMedMeiaHora: 53,
        velMaxMeiaHora: 55,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor, |por |Teu |po|der, |vem |nos |con|ce|der"+
            "Ce|les|ti|al |ciên|cia, |ó |Cri|a|dor;"+
            "A|qui |nos |en|con|tra|mos |pa|ra |a|pren|der"+
            "A |Tu|a |sã |dou|tri|na, |chei|a |de |a|mor." ,

            "A |Tu|a |i|gre|ja |Te |ro|ga, |ó |Deus:"+
            "En|vi|a, |do |al|to, |Teu |Con|so|la|dor;"+
            "Em |nos|sos |co|ra|ções |des|per|ta |o |fer|vor,"+
            "As|sim |ca|mi|nha|re|mos |ru|mo |aos |céus." ,

            "Os |nos|sos |co|ra|ções |co|nhe|ces, |ó |Deus;"+
            "Em |co|mu|nhão |Con|ti|go |es|ta|mos, |Se|nhor;"+
            "Tu |pro|me|tes|te, |pa|ra |to|dos |os |Teus,"+
            "O |Teu |di|vi|no |e |san|to |Con|so|la|dor." ,

            "Com |Teus |con|se|lhos |san|tos |vem |en|si|nar"+
            "Teus |fi|lhos |mui|to |a|ma|dos, |ó |Cri|a|dor;"+
            "O |nos|so |en|ten|di|men|to |vem |re|no|var"+
            "E |faz|-nos |me|di|tar |no |Teu |gran|de |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "198": { 
        nome: "Nosso Pai celeste sabe e provê",
        compasso: "4/4",
        velMin: 76,
        velMed: 88,
        velMax: 100,
        inicio: 4,
        velMinMeiaHora: 46,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nos|so |Pai |ce|les|te |sa|be |e |pro|vê"+
            "O |que |te|mos |de |mis|ter;"+
            "Na|da |dei|xará |fal|tar |ao |que |crê,"+
            "Pois |gran|de |é |Seu |po|der." ,

            "Sem|pre, |com |fé,"+
            "Pro|cu|re|mos |a|gra|dar |a |Deus;"+
            "Sem|pre, |por |fé, |a|cei|te|mos"+
            "O |que |vem |dos |céus;"+
            "Deus |tem, |por |nós,"+
            "O |cu|da|do |san|to |e |pa|ter|nal;"+
            "Gló|ria, |sem|pi|ter|na |gló|ria |ao |Deus |vi|vo,"+
            "Nos|so |Pai |ce|les|ti|al!" ,

            "Du|vi|do|sos |não |de|ve|mos |es|tar"+
            "Pois |Deus |tu|do |pro|ve|rá;"+
            "Ca|mi|nhe|mos |fir|mes, |sem |va|ci|lar,"+
            "A|ju|da |dos |céus |vi|rá." ,

            "Que |cu|da|do |tem |das |a|ves |dos |céus"+
            "Nos|so |Pai |ce|les|ti|al!"+
            "Mui|to |mais |te|rá |cu|da|do |dos |Seus,"+
            "Com |Seu |ze|lo |pa|ter|nal." ,            
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "199": { 
        nome: "Senhor Tu és a minha porção",
        compasso: "6/4",
        velMin: 88,
        velMed: 104,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 60,
        velMedMeiaHora: 63,
        velMaxMeiaHora: 66,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Se|nhor, |Tu |és |a |mi|nha |Por|ção,"+
            "Em |Ti |me |a|le|gra|rei;"+
            "Em |Ti |es|tá |mi|nha |sal|va|ção,"+
            "Se|nhor, |meu |gran|de |Rei." ,

            "És |mi|nha |Por|ção,"+
            "És |meu |Ga|lar|dão;"+
            "Bem- |a|ven|tu|ra|do |sou,"+
            "Tu |és |mi|nha |Por|ção." ,

            "I|men|so |e |pu|ro |é |Teu |a|mor,"+
            "Meu |Sal|va|dor, |Je|sus;"+
            "Es|tás |em |meu |co|ra|ção, |Se|nhor;"+
            "Por |Ti |vi|vo |na |luz." ,

            "Su|bli|me |sor|te |cou|be |a |mim,"+
            "Por |Ti, |ó |meu |Se|nhor,"+
            "Pois |vi|da |e|ter|na |te|rei, |ao |fim,"+
            "No |Teu |rei|no |de |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "200": { 
        nome: "Não se turbe o vosso coração",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "'Não |se |tur|be |o |vos|so |co|ra|ção', |as|sim |fa|lou |Je|sus,"+
            "Nos|so |Mes|tre, |que |à |gló|ria |nos |con|duz."+
            "Pe|la |fé |no |Pai |ce|les|te |ca|mi|nhe|mos |pa|ra |os |céus,"+
            "Lar |su|bli|me, |in|des|cri|tí|vel, |do |bom |Deus." ,

            "Mui |bre|ve |Je|sus |re|tor|na|rá,"+
            "Com |gló|ria, |em |nu|vens |vol|ta|rá;"+
            "Ma|jes|to|so |sur|gi|rá,"+
            "Pa|ra |o |céu |con|du|zi|rá |os |Seus |fi|éis"+
            "E |a |co|ro|a |lhes |da|rá." ,

            "Não |te|ma|mos, |ó |e|lei|tos, |pois |o |Pai |se |a|gra|dou"+
            "Em |nos |dar |o |rei|no |que |E|le |pre|pa|rou;"+
            "Por |bon|da|de |in|fi|ni|ta, |por |a|fe|to |pa|ter|nal,"+
            "Nos |con|ce|de|rá |o |prê|mio |e|ter|nal." ,

            "A|guar|de|mos, |ó |a|ma|dos, |com |re|al |con|sa|gra|ção,"+
            "De |Je|sus, |a |glo|ri|o|sa |a|pa|ri|ção;"+
            "Com |a |lâm|pa|da |a|ce|sa, |E|le |quer |nos |en|con|trar"+
            "Pa|ra, |ao |rei|no |e|ter|no, |em |gló|ria, |nos |le|var."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "201": { 
        nome: "Deus nos guarde...",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus |nos |guar|de |em |Seu |san|to |a|mor."+
            "O |Seu |No|me |lou|va|re|mos"+
            "On|de |quer |que |nos |a|che|mos."+
            "Deus |nos |guar|de |em |Seu |san|to |a|mor." ,

            "Ao |vol|tar |Je|sus, |es|ta|re|mos"+
            "Li|vres |de |qual|quer |con|de|na|ção;"+
            "Jun|to |aos |san|tos |nós |rei|na|re|mos;"+
            "Que |per|fei|ta |e |san|ta |u|ni|ão!" ,

            "Deus |nos |guar|de |em |san|ti|fi|ca|ção,"+
            "Nós |pe|ri|gos |da |jor|na|da,"+
            "Den|tro |em |bre|ve |ter|mi|na|da;"+
            "Deus |nos |guar|de |em |san|ti|fi|ca|ção." ,

            "Deus |nos |guar|de |com |a |Su|a |a |paz"+
            "Pa|ra, |em |co|mu|nhão, |vi|ver|mos"+
            "E |ao |fim |per|fei|tos |ser|mos;"+
            "Deus |nos |guar|de |com |a |Su|a |paz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "202": { 
        nome: "Em Ti me alegro Senhor",
        compasso: "6/4",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eu |sin|to, |por |fé, |em |meu |co|ra|ção"+
            "A |Tu|a |pre|sen|ça, |Se|nhor |Je|sus;"+
            "Por |e|la |eu |vi|vo |em |co|mu|nhão,"+
            "Gui|a|do |por |Tu|a |di|vi|na |luz." ,

            "Em |Ti |me |a|le|gro, |Se|nhor,"+
            "Tu |és |o |fi|el |Sal|va|dor;"+
            "Rei|nar |lá |no |céu, |on|de |tu|do |é |luz,"+
            "Con|ti|go |i|rei, |meu |Je|sus." ,

            "A |Tu|as |pro|mes|sas, |ó |Sal|va|dor,"+
            "Em |meu |co|ra|ção |que|ro |con|ser|var;"+
            "Por |e|las |des|fru|to |do |Teu |a|mor,"+
            "En|quan|to |na |ter|ra |pe|re|gri|nar." ,

            "Trans|bor|da |de |bên|ções |meu |co|ra|ção,"+
            "A|le|gre |me |sin|to |em |Te |lou|var;"+
            "Em |pro|va, |an|gús|tia |ou |a|fli|ção,"+
            "A |Tu|a |pre|sen|ça |vem |me |a|le|grar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "203": { 
        nome: "O meu vero Amigo é Jesus",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |é |meu |ve|ro |A|mi|go"+
            "E |ja|mais |me |dei|xa|rá,"+
            "Pois, |quan|do |es|ti|ver |em |pe|ri|go,"+
            "Su|a |mão |me |li|vra|rá." ,

            "O |meu |ve|ro |A|mi|go |é |Je|sus,"+
            "Na |sen|da |de |paz |já |me |con|duz;"+
            "Nun|ca |ou|tro |ha|ve|rá"+
            "Que |o|fe|re|ça |gra|ça |tal,"+
            "Pre|ci|o|sa, |di|vi|nal." ,

            "A|mi|go |fi|el |e |bon|do|so,"+
            "Em |Je|sus |eu |en|con|trei;"+
            "Em |Seu |do|ce |a|mor, |glo|ri|o|so,"+
            "Sem|pre |me |de|lei|ta|rei." ,

            "Por |Cris|to |es|tou |pro|te|gi|do"+
            "Na |an|gús|tia |ou |na |dor;"+
            "E, |quan|do |me |sin|to |a|ba|ti|do,"+
            "É |ve|raz |Con|so|la|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "204": { 
        nome: "Só Jesus é Amigo verdadeiro",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Con|ta|rei |a |to|dos |a |re|al |gran|de|za,"+
            "A |vir|tu|de |re|ce|bi|da |do |Se|nhor;"+
            "Trans|for|mou |a |mi|nha |vi|da |de |tris|te|za"+
            "Em |a|le|gre |vi|da, |chei|a |de |a|mor." ,

            "Só |Je|sus |é |A|mi|go |ver|da|dei|ro,"+
            "Con|ser|var |de|se|jo |Seu |a|mor;"+
            "Por |mi|nh'al|ma |deu |a |vi|da |no |ma|dei|ro;"+
            "Gló|ria, |gló|ria |ao |Sal|va|dor!" ,

            "Eu |ja|mais |me |es|que|ce|rei |do |a|mor |sin|ce|ro"+
            "Que |o |Se|nhor |ma|ni|fes|tou |por |mim, |na |cruz;"+
            "No |meu |co|ra|ção, |sen|ti|-lo |sem|pre |que|ro,"+
            "Pois |é |es|se |o |a|mor |que |ao |céu |con|duz." ,

            "Não |e|xis|te |a|mor |maior |que |o |de |Cris|to,"+
            "Não |e|xis|te |ou|tro |a|mi|go |tão |fi|el;"+
            "Um |su|bli|me |a|mor |as|sim |ja|mais |foi |vis|to,"+
            "A |não |ser |em |Je|sus |Cris|to, |E|ma|nu|el." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "205": { 
        nome: "Salvo por Seu poder",
        compasso: "12/8",
        velMin: 42,
        velMed: 49,
        velMax: 56,
        inicio: 12,
        velMinMeiaHora: 28,
        velMedMeiaHora: 29,
        velMaxMeiaHora: 30,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Fi|el |A|mi|go |eu |en|con|trei"+
            "Em |Cris|to, |o |Sal|va|dor;"+
            "A|le|gre|men|te |eu |can|ta|rei"+
            "O |Seu |su|bli|me |e |gran|de |a|mor!" ,

            "Sal|vo |por |Seu |po|der,"+
            "Sal|vo |por |Seu |a|mor,"+
            "Sin|to |em |meu |co|ra|ção"+
            "A |vir|tu|de |do |Sal|va|dor." ,

            "Re|ti|do |es|ta|va |em |to|do |o |mal"+
            "Que |me |es|cra|vi|zou;"+
            "Mas |Cris|to, |A|mi|go |ce|les|ti|al,"+
            "Com |Seu |po|der |me |li|ber|tou." ,

            "Bem |lon|ge |es|ta|va |do |meu |Se|nhor,"+
            "Sem |paz, |sem |sal|va|ção,"+
            "Mas |sin|to |a|go|ra |o |do|ce |a|mor"+
            "De |Cris|to, |em |meu |co|ra|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "206": { 
        nome: "Tu és o Amigo",
        compasso: "6/8",
        velMin: 100,
        velMed: 119,
        velMax: 138,
        inicio: 6,
        velMinMeiaHora: 62,
        velMedMeiaHora: 64,
        velMaxMeiaHora: 66,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tu |és |o |A|mi|go |sin|ce|ro |e |le|al"+
            "Dos |que |Te |a|do|ram, |Se|nhor;"+
            "Tu |sem|pre |os |pro|te|ges |e |os |li|vras |do |mal,"+
            "Por |Tu|a |Pa|la|vra |de |a|mor." ,

            "Com |Teu |po|der, |Se|nhor,"+
            "Sem|pre |guar|das"+
            "As |nos|sas |al|mas"+
            "No |Teu |gran|de |a|mor,"+
            "Ó |Je|sus, |Re|den|tor." ,

            "És |sem|pre |fi|el, |ó |Je|sus |Sal|va|dor,"+
            "Do |céu |nos |trou|xes|te |a |luz;"+
            "So|fres|te, |por |nós, |a|ma|gu|ra |e |dor,"+
            "No |du|ro |ma|dei|ro |da |cruz." ,

            "Por |Ti, |ó |Je|sus, |te|mos |vi|da |e|ter|nal,"+
            "Tam|bém |as |ri|que|zas |re|ais,"+
            "As |quais |nos |da|rás |no |Teu |lar |ce|les|ti|al,"+
            "Se |for|mos, |em |tu|do, |le|ais." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "207": { 
        nome: "Cristo é fiel",
        compasso: "4/4",
        velMin: 69,
        velMed: 80,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 46,
        velMedMeiaHora: 48,
        velMaxMeiaHora: 50,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "For|tes |ven|tos |so|pra|rão"+
            "Con|tra |o |cren|te |em |Deus;"+
            "Tem|po|rais |so|bre|vi|rão"+
            "Aos |a|ma|dos |Seus." ,

            "Cris|to |é |fi|el,"+
            "Nun|ca |fa|lha|rá;"+
            "Ao |Seu |ser|vo |a|ju|da|rá"+
            "E |for|ças |lhe |da|rá." ,

            "In|cer|te|zas |sur|gi|rão"+
            "Pa|ra |te |a|ba|ter,"+
            "Mas |não |pre|va|le|ce|rão,"+
            "Vais |vi|tó|ria |ter." ,

            "Ho|ras |de |a|mar|gor |cru|el"+
            "Os |re|mi|dos |têm,"+
            "Mas |o |Guar|di|ão |fi|el"+
            "So|cor|rê|-los |vem." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "208": { 
        nome: "Conserva a paz ó minha alma",
        compasso: "2/2",
        velMin: 44,
        velMed: 49,
        velMax: 54,
        inicio: 1.5,
        velMinMeiaHora: 29,
        velMedMeiaHora: 30,
        velMaxMeiaHora: 32,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Con|ser|va |a |paz, |tem |fé, |ó |mi|nha |al|ma,"+
            "Su|por|ta |a |cruz |com |pa|ci|ên|cia |e |fé;"+
            "Deus |te |pro|vê |de |con|fi|an|ça |e |cal|ma,"+
            "O |Teu |Se|nhor |con|ti|go |sem|pre |é;"+
            "Oh! |Fi|ca |em |paz, |pois |Deus |te |guar|da|rá;"+
            "O |Seu |fa|vor |ja|mais |te |fal|ta|rá." ,

            "Con|ser|va |a |paz, |fe|liz |é |teu |fu|tu|ro"+
            "Jun|to |a |Je|sus, |a|ma|do |Sal|va|dor;"+
            "Teu |ga|lar|dão |no |céu |es|tá |se|gu|ro,"+
            "Bre|ve |o |te|rás |das |mãos |do |Re|den|tor;"+
            "Oh! |Fi|ca |em |paz, |pois |tens |a |sal|va|ção,"+
            "Ao |teu |re|dor |es|tá |o |Guar|di|ão." ,

            "Con|ser|va |a |paz, |des|can|sa |bem |tran|qui|la,"+
            "O |teu |Se|nhor |de |ti |cui|dan|do |es|tá;"+
            "Am|pa|ro |tens |se |o |teu |pé |va|ci|la,"+
            "Das |mãos |de |Deus |nin|guém |te |ti|ra|rá;"+
            "Oh! |Fi|ca |em |paz |e |os |re|cei|os |teus"+
            "Dis|si|pa|rá |O |que |for|mou |os |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "209": { 
        nome: "Oh! Marchai soldados",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Mar|chai, |sol|da|dos, |sois |de |Cris|to!"+
            "Vós |de|veis |com |fé |a|qui |mar|char;"+
            "Em |jus|ti|ça |vós |de|veis |an|dar"+
            "A|té |en|trar|des |no |e|ter|no |lar." ,

            "Oh! |Mar|chai |com |va|lor,"+
            "O|lhai |a |Cris|to, |o |Se|nhor,"+
            "Pois |só |d'E|le |vos |vi|rá |co|ra|gem"+
            "Pa|ra |a|van|çar|des |com |o |Re|den|tor." ,

            "Oh! |Mar|chai, |sol|da|dos, |sois |de |Cris|to!"+
            "A |tor|men|ta |ten|des |que |en|fren|tar,"+
            "Mas, |bem |fir|mes |e |sem |du|vi|dar,"+
            "Re|sis|ti|reis |sem |nun|ca |va|ci|lar." ,

            "Oh! |Mar|chai, |sol|da|dos, |sois |de |Cris|to!"+
            "A |vi|tó|ria |vós |i|reis |can|tar;"+
            "As |pri|mí|ci|as |do |e|ter|no |lar,"+
            "Je|sus, |o |Sal|va|dor, |vos |faz |pro|var." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "210": { 
        nome: "Grandes promessas",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quão |gran|des |pro|mes|sas |fez |Cris|to, |nos|so |Re|den|tor;"+
            "Cre|do, |par|ti|ci|pa|rei |com |os |san|tos |no |rei|no |de |a|mor;"+
            "Te|mos |em |Je|sus, |o |Rei, |san|to |e |e|ter|nal |po|der"+
            "Pa|ra |que |os |Seus |fi|éis |pos|sam |to|do |o |mal |ven|cer." ,

            "Cris|to |nos |pro|me|te |dar |a |vi|da |e|ter|nal |nos |céus"+
            "E |ga|lar|do|ar, |ao |fim, |to|dos |os |fi|éis |ser|vos |de |Deus."+
            "Cre|io |no |meu |Sal|va|dor, |jus|to |e |fi|el |ju|iz."+
            "E|le |me |fa|rá, |no |céu, |mui |di|to|so, |mui |fe|liz." ,

            "Mo|de|lo |per|fei|to |é, |o |san|to |e |fi|el |Je|sus;"+
            "Vi|da |que |i|mi|ta|rei, |ca|mi|nhan|do |na |sen|da |de |luz;"+
            "Te|nho, |por |Je|sus, |no |céu, |par|te |com |o |Cri|a|dor"+
            "E, |em |san|ta |a|do|ra|ção, |es|ta|rei |com |meu |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "211": { 
        nome: "O Senhor Jesus passava...",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Se|nhor |Je|sus |pas|sa|va"+
            "E |com |E|le |i|a |a |mul|ti|dão;"+
            "Eis |que |um |ce|go, |jun|to |ao |ca|mi|nho,"+
            "Es|pe|ra|va |por |com|pai|xão;"+
            "E |ou|vin|do |que |se |fa|la|va"+
            "So|bre |o |No|me |de |Je|sus,"+
            "Le|van|tou|-se |e |foi |ao |bom |Mes|tre"+
            "Pa|ra |re|ce|ber |a |luz." ,

            "A |Pa|la|vra |vir|tu|o|sa,"+
            "Tão |es|pe|ra|da, |es|cu|tou;"+
            "A |vi|são |lhe |foi |res|tau|ra|da"+
            "E, |por |fé, |tam|bém |se |sal|vou;"+
            "Li|ber|ta|do |por |Je|sus |Cris|to,"+
            "Da|va |gló|ria |ao |gran|de |Deus;"+
            "E|xal|tou |o |Mes|tre |di|vi|no"+
            "E |se|guiu |os |pas|sos |Seus." ,

            "Je|sus |Cris|to |é |o |mes|mo,"+
            "En|tre |os |fi|éis |tam|bém |es|tá,"+
            "E, |quem |crer, |ve|rá |Su|a |gló|ria;"+
            "Seu |fa|vor, |por |cer|to, |te|rá."+
            "E|le |é |a |Luz |pre|ci|o|sa |que, |dos |céus,"+
            "Deus |en|vi|ou;"+
            "Quem |em |tre|vas |se |en|con|tra|va,"+
            "Es|sa |Luz |i|lu|mi|nou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "212": { 
        nome: "Testemunhas verazes nós somos",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tes|te|mu|nhas |ve|ra|zes |nós |so|mos"+
            "Do |que |Cris|to |em |nós |o|pe|rou;"+
            "Seus |pas|sos |a|go|ra |se|gui|mos,"+
            "Pois |Cris|to |Je|sus |nos |trans|for|mou,"+
            "Sim, |E|le |nos |trans|for|mou." ,

            "Eis |que |as |tre|vas |já |são |pas|sa|das,"+
            "Ve|io |o |di|a |com |es|plen|dor;"+
            "Che|ga|do |é |o |rei|no |de |Deus |a |nós,"+
            "O |rei|no |de |luz |e |a|mor." ,

            "Es|con|der |não |de|ve|mos, |do |mun|do,"+
            "Nos|sa |fé |em |Cris|to |Je|sus;"+
            "A|mor |ce|les|ti|al |e |pro|fun|do"+
            "O |Jus|to |mos|trou |por |nós |na |cruz,"+
            "Sim, |Cris|to |mos|trou |na |cruz." ,

            "O |E|van|ge|lho |da |gra|ça |di|vi|na"+
            "So|bre |a |ter|ra |ou|vi|do |se|rá;"+
            "Por |Su|a |ce|les|te |dou|tri|na,"+
            "Os |ho|mens, |Je|sus |con|ver|te|rá,"+
            "Sim, |E|le |os |con|ver|te|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "213": { 
        nome: "Quando vier do céu",
        compasso: "6/8",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quan|do |vi|er |do |céu |Cris|to |Je|sus, |o |Rei,"+
            "O |mun|do |de |i|lu|são, |ven|ci|do |eu |te|rei;"+
            "Re|pou|so |ce|les|ti|al |e |vi|da |e|ter|nal"+
            "Re|ce|be|rei |de |Deus, |a |Quem |me |con|sa|grei." ,

            "Cons|is|te |o |meu |vi|ver |em |a|gra|dar |a |Deus,"+
            "Em |re|ves|tir|-me |a|qui |da |vi|da |lá |dos |céus;"+
            "U|ni|do |eu |es|tou |a |Cris|to, |que |me |a|mou;"+
            "Com |san|gue |re|mi|dor |pa|gou |os |er|ros |meus." ,

            "Ben|di|to |é |o |Se|nhor, |meu |Re|den|tor, |Je|sus,"+
            "Que, |pe|lo |Seu |a|mor, |à |gló|ria |me |con|duz;"+
            "O |san|to |Seu |po|der |a|qui |me |faz |ven|cer."+
            "Ben|di|to |é |o |Se|nhor, |que |é |a |mi|nha |Luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "214": { 
        nome: "Como foi para os céus assim virá",
        compasso: "4/4",
        velMin: 66,
        velMed: 71,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |su|bir |Je|sus |a |Deus, |vie|ram |an|jos |lá |dos |céus"+
            "De|cla|ran|do |que |o |Mes|tre |vol|ta|ria |pa|ra |os |Seus;"+
            "A |res|plan|de|cen|te |Es|tre|la |da |Ma|nhã |res|sur|gi|rá,"+
            "Que |a|le|gri|a |o |po|vo |san|to |sen|ti|rá!" ,

            "Cris|to |vol|ta|rá |em |nu|vens |quan|do |o |tem|po |se |cum|prir,"+
            "Pa|ra, |a |gló|ria |pro|me|ti|da, |Seus |re|mi|dos |con|du|zir;"+
            "Bem-|a|ven|tu|ra|dos |to|dos |que |O |ser|vem |com |a|mor,"+
            "A |co|ro|a |lhes |da|rá |o |Cri|a|dor." ,

            "A |Pa|la|vra |do |Se|nhor |no |mun|do |se |cum|prin|do |es|tá,"+
            "Os |si|nais |dos |tem|pos |mos|tram |que |E|le, |em |bre|ve, |vol|ta|rá;"+
            "Oh! |que |glo|ri|o|so |vin|de |Seus |e|lei|tos |ou|vi|rão"+
            "De |Je|sus, |na |glo|ri|o|sa |a|pa|ri|ção." ,

            "Co|mo |foi |pa|ra |os |céus, |as|sim |vi|rá,"+
            "O |Se|nhor, |com |ce|les|te |es|plen|dor;"+
            "A |pro|mes|sa |pre|ci|o|sa |que |Deus |fez |se |cum|pri|rá:"+
            "Bre|ve |vol|ta|rá |Je|sus, |o |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "215": { 
        nome: "Em breve ao céu irei",
        compasso: "12/8",
        velMin: 44,
        velMed: 52,
        velMax: 60,
        inicio: 10,
        velMinMeiaHora: 28,
        velMedMeiaHora: 29,
        velMaxMeiaHora: 30,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Em |bre|ve |ao |céu |i|rei |e |lá |con|tem|pla|rei"+
            "A |gló|ria |do |bom |Pai |e |a |fa|ce |do |meu |Rei;"+
            "Oh! |Quão |fe|liz |se|rei |na |pá|tria |di|vi|nal,"+
            "Ao |re|ce|ber, |de |Deus, |vi|da |e|ter|nal." ,

            "So|men|te |ao |meu |Je|sus |sem|pre |per|ten|ce|rei,"+
            "No |san|gue |ex|pi|a|dor |re|fu|gi|ar|-me|-ei;"+
            "Gló|ria |su|bli|me, |Deus, |por |Cris|to, |pro|me|teu,"+
            "E |vi|da |pe|re|nal |ao |po|vo |Seu." ,

            "Com |to|dos |os |fi|éis |ju|bi|la|rei |nos |céus,"+
            "On|de |te|rei |lu|gar |jun|to |do |gran|de |Deus;"+
            "Hi|nos |ce|les|ti|ais |a |E|le |en|to|a|rei,"+
            "In|com|pa|rá|vel |paz |des|fru|ta|rei." ,

            "Com |meu |Se|nhor |lo|go |es|ta|rei;"+
            "Seu |es|plen|dor |con|tem|pla|rei;"+
            "Cor|po |e|ter|nal |re|ce|be|rei"+
            "Pa|ra |vi|ver |com |Deus, |ex|cel|so |Rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "216": { 
        nome: "Irmãos amemos ao Senhor",
        compasso: "6/8",
        velMin: 100,
        velMed: 116,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ir|mãos, |a|me|mos |ao |Se|nhor,"+
            "Pois |gran|de |é |Seu |a|mor;"+
            "Seu |pre|ci|o|so |san|gue |der|ra|mou"+
            "E |nos|sas |al|mas |la|vou." ,

            "Com |to|da |a |nos|sa |de|vo|ção,"+
            "Com |to|da |a |for|ça |e |fer|vor,"+
            "Com |to|da |a |al|ma |e |en|ten|di|men|to,"+
            "A|me|mos |ao |Se|nhor." ,

            "Ir|mãos, |a|me|mos |ao |Se|nhor,"+
            "Di|vi|no |En|si|na|dor,"+
            "A |per|fei|ta |Fon|te |do |sa|ber,"+
            "Que |faz |na |gra|ça |cres|cer." ,

            "Ir|mãos, |a|me|mos |ao |Se|nhor,"+
            "Au|tor |e |Con|su|ma|dor"+
            "Des|ta |fé, |que |dá |a |sal|va|ção"+
            "E |ce|les|ti|al |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "217": { 
        nome: "Vamos unidos a Deus louvar",
        compasso: "6/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Va|mos, |u|ni|dos, |a |Deus |lou|var"+
            "E |a |Je|sus, |nos|so |Rei, |can|tar,"+
            "Pe|lo |E|van|ge|lho |as|se|gu|rar"+
            "Que |Cris|to |vai |vol|tar." ,

            "Vem, |Je|sus,"+
            "Os |Teus |fi|éis |bus|car,"+
            "Pois |de|se|ja|mos,"+
            "Um |di|a, |nos |céus |ha|bi|tar." ,

            "Va|mos |a |to|dos |tes|te|mi|fi|car"+
            "Que |Deus |man|dou |Cris|to |a |sal|var;"+
            "E |quem |a |E|le |se |en|tre|gar,"+
            "No |céu |i|rá |rei|nar." ,

            "Va|mos, |ir|mãos, |a |Deus |ce|le|brar,"+
            "E |não |ces|se|mos |de |a|fir|mar"+
            "Que, |só |por |Cris|to, |se |po|de |en|trar"+
            "No |céu, |e|ter|no |lar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "218": { 
        nome: "Oh Jubilemos devotos de Cristo",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Ju|bi|le|mos, |de|vo|tos |de |Cris|to,"+
            "E |en|to|e|mos |a |E|le |lou|vor;"+
            "Res|sus|ci|ta|do, |por |mui|tos |foi |vis|to;"+
            "So|bre |o |mal |foi, |na |cruz, |Ven|ce|dor;"+
            "Deus |e|xal|tou |o |Seu |Fi|lho |ben|quis|to,"+
            "Que |lá |no |céu |é |fi|el |Me|di|a|dor." ,

            "Oh! |Ju|bi|le|mos |em |Cris|to, |o |Vi|ven|te,"+
            "Que, |so|bre |a |cruz, |por |a|mor |pa|de|ceu."+
            "E|le, |o |For|te |e |O|ni|po|ten|te,"+
            "To|das |as |for|ças |do |mal |a|ba|teu"+
            "Pa|ra |po|der|mos |di|zer |li|vre|men|te:"+
            "Nós |fo|mos |fei|tos |her|dei|ros |do |céu." ,

            "Oh! |Ju|bi|le|mos, |re|mi|dos |do |San|to,"+
            "Que |pro|me|teu |Su|a |gló|ria |nos |dar;"+
            "Lá |no |Seu |rei|no, |com |um |no|vo |can|to,"+
            "Nós |po|de|re|mos |a |Deus |e|xal|tar;"+
            "O |re|go|zi|jo |se|rá, |no |céu, |tan|to,"+
            "Que |não |se |po|de |a|qui |i|ma|gi|nar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "219": { 
        nome: "Novos céus nós aguardamos",
        compasso: "6/8",
        velMin: 40,
        velMed: 45,
        velMax: 50,
        inicio: 1,
        velMinMeiaHora: 25,
        velMedMeiaHora: 26,
        velMaxMeiaHora: 27,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "No|vos |céus |nós |a|guar|da|mos"+
            "E |no|va |ter|ra |tam|bém;"+
            "Ne|les |nós |sem|pre |pen|sa|mos,"+
            "Ne|les |es|tá |nos|so |bem;"+
            "Por |is|so |es|ta|mos |ser|vin|do"+
            "A |Deus, |o |Cri|a|dor;"+
            "Su|a |von|ta|de |cum|prin|do,"+
            "Ve|re|mos |Seu |es|plen|dor." ,

            "No|vos |céus |Deus,"+
            "Aos |Seus |fi|éis, |da|rá;"+
            "No|va |ter|ra, |on|de |a |jus|ti|ça |es|tá;"+
            "Em |bre|ve |vol|ta |o |Rei,"+
            "Cris|to |Je|sus, |Se|nhor;"+
            "Fir|me |na |gra|ça |se|ja|mos,"+
            "Fir|mes |na |fé |e |no |a|mor." ,

            "Pe|lo |Es|pí|ri|to |an|de|mos"+
            "Den|tro |da |lei |do |bom |Deus;"+
            "O |co|ra|ção |in|cli|ne|mos"+
            "Pa|ra |as |coi|sas |dos |céus;"+
            "Do |mun|do |to|da |a |vai|da|de"+
            "De|ve|mos |rei|ei|tar;"+
            "Te|mos |de |Deus |u|ma |her|da|de:"+
            "A |ter|ra |que |nos |vai |dar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "220": { 
        nome: "Cristo voltará",
        compasso: "4/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com |po|der |e |gló|ria |e |to|tal |vi|tó|ria,"+
            "Cris|to, |so|bre |as |nu|vens, |bre|ve |vol|ta|rá;"+
            "Oh! |Que |gran|de |di|a! |Oh! |Que |a|le|gri|a!"+
            "Pa|ra |os |fi|éis |o |pran|to |fin|da|rá." ,

            "Cris|to |vol|ta|rá, |Cris|to |vol|ta|rá,"+
            "E |a |Su|a |i|gre|ja |ar|re|ba|ta|rá,"+
            "E, |en|tão, |no |céu |a |co|ro|a|rá"+
            "Com |a |gló|ria |e|ter|na |que |E|le |lhe |da|rá." ,

            "Eis |que |se |a|pres|sa |a |fi|el |pro|mes|sa"+
            "Do |Se|nhor |Je|sus, |que |bre|ve |há |de |vol|tar;"+
            "Que|ro |nes|se |di|a, |chei|o |de |a|le|gri|a,"+
            "Jun|ta|men|te |aos |sal|vos, |Cris|to |en|con|trar." ,

            "Sem|pre |vi|gi|an|do, |con|tra |o |mal |lu|tan|do,"+
            "Va|mos |a|guar|dar |a |vol|ta |do |Se|nhor;"+
            "O |que |for |a|cha|do |ser|vin|do |ao |pe|ca|do,"+
            "Não |te|rá |lu|gar |nas |bo|das |de |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "221": { 
        nome: "A descida do Espírito Santo",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Re|u|ni|dos |se |en|con|tra|vam"+
            "Os |dis|cí|pu|los |do |Se|nhor;"+
            "Com |fer|vor |e|les |es|pe|ra|vam,"+
            "De |Deus, |o |Con|so|la|dor."+
            "Eis |que |um |som, |mui |de |re|pen|te,"+
            "E|co|ar |ou|viu|-se |lá |dos |céus,"+
            "Qual |um |ven|to |ve|e|men|te:"+
            "E|ra |o |Es|pí|ri|to |de |Deus." ,

            "Lín|guas, |co|mo |de |fo|go,"+
            "Vi|ram |em |si |mes|mos |en|tão |pou|sar;"+
            "So|bre |e|les |se |re|par|ti|ram,"+
            "Fa|zen|do|-os |a |Deus |lou|var."+
            "Em |lin|gua|gens |di|fe|ren|tes,"+
            "Co|me|ça|ram |a |ma|ni|fes|tar"+
            "As |gran|de|zas |ex|ce|len|tes"+
            "Que |Deus |Pai |lhes |fez |pro|var." ,

            "A |Pro|mes|sa |é |fei|ta |a |tan|tos"+
            "Quan|tos |Deus, |nos|so |Pai, |cha|mar;"+
            "Com |fer|vor, |to|dos |os |Seus |san|tos"+
            "De|vem |os |Seus |dons |bus|car."+
            "Se |os |ho|mens, |aos |seus |fi|lhos,"+
            "Bo|as |cou|sas |sa|bem |o|fer|tar,"+
            "Mui|to |mais |o |Pai |ben|di|to,"+
            "Aos |que |pe|dem, |po|de |dar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "222": { 
        nome: "Brevemente virá o Senhor Jesus",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bre|ve |vol|ta|rá |Je|sus |Cris|to,"+
            "Glo|ri|o|so, |com |gran|de |es|plen|dor;"+
            "Que |a|le|gri|a |se|rá |pa|ra |os |fi|éis"+
            "Que |a|guar|dam |o |seu |Re|den|tor!" ,

            "Bre|ve|men|te |vi|rá |o |Se|nhor |Je|sus"+
            "Pre|mi|ar, |com |o |Seu |ga|lar|dão,"+
            "Os |que |fi|el|men|te |a|guar|dam"+
            "Su|a |glo|ri|o|sa |a|pa|ri|ção." ,

            "Bre|ve |vol|ta|rá |Je|sus |Cris|to,"+
            "Tri|un|fan|te, |com |ri|jo |cla|mor;"+
            "Le|va|rá |os |re|mi|dos, |por |Seu |po|der,"+
            "Pa|ra |o |rei|no |de |paz |e |de |a|mor." ,

            "Bre|ve |vol|ta|rá |Je|sus |Cris|to,"+
            "Quan|do, |en|tão, |pa|ra |nós |sur|gi|rá"+
            "No|va |au|ro|ra |no |rei|no |de |e|ter|na |luz,"+
            "On|de |o |jus|to |res|plan|de|ce|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "223": { 
        nome: "Muitos por fé aceitaram Jesus",
        compasso: "6/8",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 66,
        velMedMeiaHora: 68,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Mui|tos, |por |fé, |a|cei|ta|ram |Je|sus"+
            "E |al|can|ça|ram |sal|va|ção;"+
            "O |pe|ca|dor |que |re|ce|be |a |Luz"+
            "Tem |per|dão." ,

            "Mui|tos |já |sen|tem |o |gran|de |a|mor"+
            "De |Je|sus |Cris|to, |A|mi|go |sem |par;"+
            "Oh! |Não |rei|ei|tes |o |bom |Re|den|tor"+
            "Que |te |quer |sal|var." ,

            "Mui|tos |já |tri|lham |a |sen|da |do |bem;"+
            "So|bre |o |mal |vão |tri|un|far;"+
            "De|ves |jun|tar|-te |a |e|les |tam|bém"+
            "Sem |tar|dar." ,

            "Mui|tos |a|guar|dam |a |vi|da |e|ter|nal"+
            "Pa|ra |des|can|sar |nos |céus;"+
            "Crê |em |Je|sus, |o |A|mi|go |le|al;"+
            "Crê |em |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "224": { 
        nome: "Só Jesus concede paz e salvação",
        compasso: "2/2",
        velMin: 54,
        velMed: 60,
        velMax: 66,
        inicio: 1,
        velMinMeiaHora: 34,
        velMedMeiaHora: 35,
        velMaxMeiaHora: 36,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quem, |dis|pos|to, |se|gue |ao |Se|nhor |Je|sus,"+
            "Com |vir|tu|de |e |for|ça |le|va |a |sua |cruz;"+
            "Tem |po|der |di|vi|no |em |seu |co|ra|ção,"+
            "Não |se|rá |ven|ci|do |pe|la |ten|ta|ção." ,

            "Só |Je|sus |con|ce|de |paz |e |sal|va|ção,"+
            "E, |na |gló|ria |e|ter|na, |gran|de |ga|lar|dão;"+
            "Quem |tam|bém |de|se|ja |ir |com |Deus |mo|rar,"+
            "Sen|te |que, |a |Cris|to, |de|ve |a|cei|tar." ,

            "To|dos |os |can|sa|dos, |vin|de |ao |Se|nhor,"+
            "Vin|de |sem |de|mo|ra, |E|le |é |o |Sal|va|dor;"+
            "E |di|zei |a |Cris|to, |com |sa|tis|fa|ção:"+
            "Nós |Te |con|sa|gra|mos |nos|so |co|ra|ção. ",

            "Com |a |no|va |vi|da |no |Se|nhor |Je|sus"+
            "Mos|tra|reis |ao |mun|do |que |E|le |é |a |Luz;"+
            "Se|ja |a |vos|sa |o|bra |um |lou|vor |a |Deus,"+
            "E |a |vi|da |e|ter|na |vós |te|reis |nos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "225": { 
        nome: "Senhor com Tua voz me chamas",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor, |com |Tu|a |voz |me |cha|mas;"+
            "Os |Teus |ca|mi|nhos |me |en|si|nas;"+
            "Eu |sei, |Se|nhor, |que |Tu |me |a|mas"+
            "Com |Teu |a|mor |ce|les|ti|al." ,

            "Oh! |Que |voz |tão |pre|ci|o|sa"+
            "É |Tu|a |voz, |ó |Cri|a|dor,"+
            "Mei|ga, |san|ta |e |po|de|ro|sa,"+
            "Que |me |a|le|gra, |ó |Se|nhor." ,

            "Se|nhor, |a |Tu|a |voz |su|bli|me"+
            "Me |traz |con|for|to |e |re|go|zi|jo,"+
            "E, |quan|do |a |an|gús|tia |me |o|pri|me,"+
            "É |bál|sa|mo |con|so|la|dor." ,

            "Se|nhor, |a |Tu|a |voz |po|ten|te,"+
            "Que |faz |ces|sar |a |tem|pes|ta|de"+
            "E |que |a|pa|ga |o |fo|go |ar|den|te,"+
            "Me |gui|a|rá |a|té |o |céu." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "226": { 
        nome: "A história do Evangelho",
        compasso: "4/4",
        velMin: 69,
        velMed: 72,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "É |a |his|tó|ria |do |E|van|ge|lho, |que |nos |fa|la |de |Je|sus,"+
            "Que |ao |Pai |o|be|de|ceu |e |ve|io |ser |a |nos|sa |Luz."+
            "Pa|ra |dar|-nos |vi|da |e|ter|na, |du|ra |mor|te |su|por|tou;"+
            "Pe|la |gló|ria |que |an|te|vi|a, |ao |Seu |Pai |se |hu|mi|lhou." ,

            "Trans|pas|sa|da |com |a |lan|ça |foi |o |cor|po |do |Se|nhor,"+
            "So|bre |a |cruz |foi |der|ra|ma|do |o |Seu |san|gue |re|mi|dor;"+
            "E, |por |es|se |sa|cri|fi|ci|o, |re|ce|be|mos |sal|va|ção;"+
            "O |E|van|ge|lho |nos |de|cla|ra:"+
            "'Só |em |Cris|to |há |per|dão'. ",

            "Co|mo|ven|te |é |ou|vir |con|tar |a |his|tó|ria |de |Je|sus;"+
            "Quem, |a|ten|to, |es|cu|tá|-la |par|ti|ci|pa|rá |da |luz;"+
            "E|la |en|si|na |que |o |cas|ti|go |foi |tro|ca|do |por |per|dão;"+
            "Gló|ria |ao |di|vi|nal |Cor|dei|ro, |to|dos |fi|éis |da|rão." ,

            "Não |e|xis|te |ou|tra |his|tó|ria"+
            "Que |se |i|gua|le |à |do |Se|nhor,"+
            "A|le|gri|a |dá |aos |man|sos |e |con|ver|te |o |pe|ca|dor;"+
            "Es|sa |his|tó|ria |ma|ni|fes|ta |a |ver|da|de |e |a |luz"+
            "Que |res|tau|ram |nos|sas |vi|das"+
            "E |nos |gui|am |a |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "227": { 
        nome: "Procuras tu ao Salvador?",
        compasso: "3/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 2.5,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pro|cu|ras |tu |ao |Sal|va|dor,"+
            "Que |dá |a |bem-|a|ven|tu|ran|ça?"+
            "Qual |é |a |tu|a |con|fi|an|ça"+
            "A|qui |no |mun|do |en|ga|na|dor?"+
            "Em |Cris|to |tens |a |vi|da, |tens |a |for|ça |e |o |fa|vor."+
            "O |san|to |Re|den|tor"+
            "Se|rá |a |tu|a |Se|gu|ran|ça." ,

            "A |Cris|to |vem, |sem |du|vi|dar,"+
            "Vem |dar |os |teus |pri|mei|ros |pas|sos;"+
            "Je|sus |re|mo|ve |os |em|ba|ra|ços,"+
            "Per|dão |e |vi|da |quer |te |dar."+
            "É |Cris|to |Quem |te |sal|va, |faz |de |ti |um |ven|ce|dor."+
            "De|se|ja, |o |Re|den|tor,"+
            "Man|ter |con|ti|go |e|ter|nos |la|ços." ,

            "Fin|dan|do |a |pe|re|gri|na|ção,"+
            "Te|rás |com |E|le |e|ter|na |vi|da;"+
            "Je|sus |a|qui |te |dá |guar|ri|da"+
            "E |lá |no |céu |o |ga|lar|dão."+
            "É |Cris|to |Fon|te |e|ter|na |de |vir|tu|de |e |de |fé."+
            "Po|ten|te |E|le |é"+
            "E |te |so|cor|re |em |to|da |a |li|da." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "228": { 
        nome: "Salvação! Salvação!",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vem |do |céu |a|le|gre |som:"+
            "Sal|va|ção! |Sal|va|ção!"+
            "Só |em |Cris|to |há |per|dão."+
            "Sal|va|ção! |Sal|va|ção!"+
            "Paz |e |gra|ça |pro|cla|mar"+
            "Vão |os |ser|vos |do |Se|nhor"+
            "Pe|lo |ar, |por |ter|ra |e |mar."+
            "Sal|va|ção! |Sal|va|ção!" ,

            "A|nun|ci|e|mos |sem |ces|sar:"+
            "Sal|va|ção! |Sal|va|ção!"+
            "Que |a|le|gri|a |em |pen|sar!"+
            "Sal|va|ção! |Sal|va|ção!"+
            "Só |no |san|gue |do |Se|nhor,"+
            "Der|ra|ma|do |so|bre |a |cruz,"+
            "Tem |res|ga|te |o |pe|ca|dor."+
            "Sal|va|ção! |Sal|va|ção!" ,

            "Do |pe|ca|do |e |mal|di|ção,"+
            "Sal|vo |es|tou, |sal|vo |es|tou!"+
            "Re|ce|bi, |de |Deus, |per|dão."+
            "Sal|vo |es|tou! |Sal|vo |es|tou!"+
            "Mes|mo |à |ho|ra |de |ex|pi|rar,"+
            "Sen|ti|rei |a |sal|va|ção,"+
            "Pois |no |céu |vou |ha|bi|tar."+
            "Sal|vo |es|tou! |Sal|vo |es|tou!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "229": { 
        nome: "Eu vivia no pecado",
        compasso: "4/4",
        velMin: 69,
        velMed: 80,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eu |vi|vi|a |no |pe|ca|do,"+
            "Sem |a |paz |e |sem |a |luz,"+
            "Quan|do |Deus, |o |Pai |a|ma|do,"+
            "Re|ve|lou|-me |a |gra|ça |de |Je|sus." ,

            "Co|mo |po|de|rei |eu |es|que|cer|-me"+
            "Da |mer|cê |do |meu |bom |Cri|a|dor?!"+
            "Pois |li|vrou|-me |do |pe|ca|do"+
            "Pe|lo |seu |i|men|so |a|mor."+
            "A |ce|les|te |paz |a|go|ra |sin|to"+
            "Por |Je|sus, |o |meu |In|ter|ces|sor,"+
            "Mi|nha |Ro|cha |e |Jus|ti|ça,"+
            "Meu |fi|el |e |for|te |De|fen|sor." ,

            "Foi |Je|sus, |por |Deus, |man|da|do,"+
            "Sen|do |o |Cris|to |e |Sal|va|dor;"+
            "E, |na |cruz, |vi|tu|pe|ra|do,"+
            "Con|su|mou |a |o|bra |de |a|mor." ,

            "Deus |me |li|ber|tou |da |mor|te"+
            "Por |su|bli|me |e |gran|de |a|mor;"+
            "Oh! |Que |gran|di|o|sa |sor|te"+
            "Al|can|cei |de |meu |bom |Cri|a|dor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "230": { 
        nome: "A Ti rendemos graças",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |Ti |ren|de|mos |gra|ças,"+
            "Ma|jes|to|so |Cri|a|dor,"+
            "Fin|dan|do |es|te |cul|to |de |lou|vor |a |Ti,"+
            "Ó |Deus |For|ma|dor;"+
            "As |nos|sas |for|ças |fo|ram |re|no|va|das"+
            "Por |Teu |bom |Con|so|la|dor." ,

            "Se|nhor, |com |Tu|a a|ju|da,"+
            "De|se|ja|mos |a|ten|der"+
            "A |tu|do o|que, |por |Tu|a |sã |Pa|la|vra,"+
            "Nos |fi|zes|te |sa|ber,"+
            "Pois |nós |que|re|mos, |so|bre |es|ta |ter|ra,"+
            "Sem|pre |mais |res|plan|de|cer." ,

            "Des|pe|de|-nos |em |paz |da |Tu|a |ca|sa,"+
            "Ó |Se|nhor,"+
            "Le|van|do em |nos|sos |co|ra|ções"+
            "As |bên|ções |do |Teu |gran|de |a|mor;"+
            "A|gra|de|ci|dos, |nós |Te |tri|bu|ta|mos |hon|ra,"+
            "Gló|ria |e |lou|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "231": { 
        nome: "Provemos irmãos do amor do Senhor",
        compasso: "6/8",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 62,
        velMedMeiaHora: 65,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pro|ve|mos, |ir|mãos, |do |a|mor |do |Se|nhor;"+
            "Quem |de|le |pro|var |lu|ta|rá |com |va|lor;"+
            "Com |for|ça |di|vi|na |pre|va|le|ce|rá;"+
            "Por |Cris|to |Je|sus, |tri|un|fan|te |se|rá." ,

            "Que |gran|de |a|mor, |a|le|lu|ia!"+
            "Pro|va|mos |em |Cris|to, |Je|sus!"+
            "A|mor |sem |i|gual, |a|mor |di|vi|nal,"+
            "Quem |pro|va |es|se |a|mor,"+
            "A|mor |que |ao |céu |nos |con|duz." ,

            "Na |ho|ra |da |lu|ta, |o |nos|so |Se|nhor"+
            "Vi|rá |a|ju|dar|-nos |por |Seu |gran|de |a|mor;"+
            "Fi|éis, |con|fi|an|tes, |mar|che|mos, |aos |céus;"+
            "Re|ju|bi|la|re|mos |ao |ver |nos|so |Deus." ,

            "O |nos|so |i|ni|mi|go |não |nos |ven|ce|rá,"+
            "O |bra|ço |de |Cris|to |nos |au|xi|lia|rá;"+
            "Te|re|mos |vi|tó|ria |se, |de |co|ra|ção,"+
            "Fi|car|mos |u|ni|dos |ao |bom |Guar|di|ão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "232": { 
        nome: "Seguro estou",
        compasso: "3/4",
        velMin: 60,
        velMed: 72,
        velMax: 84,
        inicio: 2.5,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|gu|ro |es|tou |de |que |Je|sus |me |a|ju|da|rá"+
            "E, |lá |do |céu, |de |for|ça |e |fé |me |pro|ve|rá;"+
            "Se |a |E|le |eu |ser|vir |e |a |Su|a |lei |cum|prir,"+
            "Bem |cer|to |es|tou |de |que |Je|sus |me |a|ju|da|rá." ,

            "Não |dei|xará |a |mi|nha |fé |se |a|ba|lar;"+
            "Eu |se|gui|rei |ao |meu |Se|nhor |sem |du|vi|dar;"+
            "Com |a|fe|to |guar|da|rei |a |dou|tri|na |do |meu |Rei"+
            "Que, |nes|te |mun|do, |o|rien|ta|rá |meu |ca|mi|nhar." ,

            "Meu |co|ra|ção |es|tá |fir|ma|do |no |Se|nhor,"+
            "A|li|cer|ça|do |nes|sa |Ro|cha |de |a|mor;"+
            "Cris|to |i|rá |me |re|ce|ber |quan|do |em |gló|ria, |a|pa|re|cer;"+
            "Fir|ma|do |es|tou |no |meu |ben|di|to |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "233": { 
        nome: "Avante santos e fiéis de Deus",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|van|te, |san|tos |e |fi|éis |de |Deus,"+
            "A|té |o |fim, |a|té |ven|cer,"+
            "Pois |E|le |as |for|ças |man|da|rá |dos |céus;"+
            "É |sem |li|mi|te |o |Seu |po|der." ,

            "Va|mos |mar|char |por |fé,"+
            "Va|mos |se|guir |Je|sus,"+
            "Pois |à |fren|te |E|le |es|tá"+
            "E |à |gló|ria |nos |con|duz;"+
            "Jun|to |a |Deus, |nos |céus,"+
            "O |ga|lar|dão |sem |par"+
            "Bre|ve |i|re|mos |des|fru|tar." ,

            "A|van|te |com |ce|les|ti|al |va|lor;"+
            "Os |dons |de |Deus |não |fal|ta|rão;"+
            "Em |nós |se |ma|ni|fes|ta|rá |o |Se|nhor"+
            "Du|ran|te |a |pe|re|gri|na|ção." ,

            "Com |fé |em |Deus |e |no |Se|nhor |Je|sus,"+
            "Si|nais |dos |céus |i|re|mos |ver;"+
            "To|man|do |ca|da |di|a |a |nos|sa |cruz,"+
            "Si|ga|mos |Quem |nos |faz |ven|cer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "234": { 
        nome: "O meu ser entrego a Cristo",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |meu |ser |en|tre|go |a |Cris|to,"+
            "D'E|le |sem|pre |eu |se|rei;"+
            "E|le |é |o |sá|bio |Mes|tre,"+
            "Só |a |E|le |ou|vi|rei." ,

            "Cris|to |me |sal|vou"+
            "E |me |per|do|ou;"+
            "O |meu |ser |a |E|le |en|tre|go,"+
            "Ser|vo |d'E|le |sou." ,

            "O |meu |ser |en|tre|go |a |Cris|to,"+
            "Sem|pre |a |E|le |a|ma|rei;"+
            "Cris|to |é |o |Pas|tor |ce|les|te,"+
            "N'E|le |me |de|lei|ta|rei." ,

            "O |meu |ser |en|tre|go |a |Cris|to,"+
            "Per|to |d'E|le |que|ro |es|tar;"+
            "Seu |po|der |é |in|fi|ni|to |pa|ra,"+
            "Á |gló|ria, |me |le|var." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "235": { 
        nome: "Um amor imenso",
        compasso: "4/4",
        velMin: 84,
        velMed: 94,
        velMax: 104,
        inicio: 1,
        velMinMeiaHora: 50,
        velMedMeiaHora: 52,
        velMaxMeiaHora: 54,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Um |a|mor |i|men|so, |san|to |e |ce|les|ti|al,"+
            "Sin|to |a|go|ra |em |Cris|to, |Mes|tre |di|vi|nal;"+
            "Deus |o |Pai |ben|di|to, |trans|for|mou |meu |ser;"+
            "Re|ve|lou|-me |a |gra|ça, |pe|lo |Seu |po|der" ,

            "Na|da |me |se|pa|ra |do |di|vi|no |a|mor"+
            "Que |me |u|ne |a |Cris|to, |o |meu |Sal|va|dor;"+
            "O |fer|vor |glo|ri|o|so |de |ser|vir |a |Deus"+
            "Me |con|duz |a|van|te |ru|mo |ao |céu |dos |céus." ,

            "Paz |e |vi|da |e|ter|na |te|nho |por |Je|sus,"+
            "Bem-|a|ven|tu|ran|ça, |re|go|zi|jo |e |luz;"+
            "Meu |Te|sou|ro |é |Cris|to, |E|le |é |meu |Vi|ver;"+
            "Que|ro, |ao |Mes|tre |a|ma|do, |sem|pre |o|be|de|cer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "236": { 
        nome: "Há um lugar de eterna paz",
        compasso: "4/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 3.5,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Os |san|tos |do |Se|nhor |em |ter|ra |es|tra|nha |es|tão,"+
            "Ca|mi|nham |com |fer|vor, |em |pe|re|gri|na|ção;"+
            "Es|tão |bus|can|do |o |lar |de |es|plen|dor |sem |par,"+
            "São |co-|her|dei|ros |de |Je|sus." ,

            "Há |um |lu|gar |de |e|ter|na |paz"+
            "E |de |con|so|la|ção |ve|raz;"+
            "Quem |se |en|tre|gar |a |Deus,"+
            "Quem |crer |no |Sal|va|dor,"+
            "I|rá |mo|rar |no |lar |de |a|mor." ,

            "Quem |po|de |ex|pri|mir, |quem |po|de |ex|pli|car"+
            "A |gló|ria |do |por|vir, |que |o |jus|to |vai |her|dar?"+
            "Cer|te|za |des|te |bem, |por |fé, |a|go|ra |têm"+
            "Os |res|ga|ta|dos |de |Je|sus." ,

            "Man|da|do |é, |dos |céus, |que |o |ho|mem |pe|ca|dor"+
            "A|cei|te |a |e|ter|na |lei |de |Deus, |o |Cri|a|dor;"+
            "Jus|ti|fi|ca|do, |en|tão |te|rá |o |ga|lar|dão"+
            "Com |os |que |cre|ram |em |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "237": { 
        nome: "Deus é por mim",
        compasso: "6/4",
        velMin: 100,
        velMed: 113,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus |é |por |mim, |na|da |de|vo |te|mer;"+
            "Por |que |hei |de |du|vi|dar?"+
            "E|le |em |tu|do |me |po|de |va|ler,"+
            "Só |n'E|le |vou |con|fi|ar." ,

            "Do |mun|do |já |se|pa|ra|do |es|tou,"+
            "Foi |Je|sus |Quem |me |se|pa|rou;"+
            "Com |Seu |san|gue |pre|ci|o|so |me |res|ga|tou." ,

            "Na|da |no |mun|do |ja|mais |po|de|rá"+
            "Pri|var|-me |do |Seu |a|mor;"+
            "É |es|se |a|mor |que |me |con|du|zi|rá"+
            "Ao |rei|no |do |Cri|a|dor." ,

            "Pa|ra |os |fi|éis |não |há |con|de|na|ção,"+
            "Je|sus |é |seu |De|fen|sor;"+
            "So|bre |a |mor|te |e|les |tri|un|fa|rão"+
            "Na |vol|ta |do |seu |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "238": { 
        nome: "Teu servo ouve fala Senhor",
        compasso: "9/8",
        velMin: 108,
        velMed: 120,
        velMax: 132,
        inicio: 7,
        velMinMeiaHora: 72,
        velMedMeiaHora: 75,
        velMaxMeiaHora: 78,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pa|ra |ou|vir|-Te, |ó |Cri|a|dor,"+
            "Me |a|pre|sen|to |di|an|te |de |Ti;"+
            "Tu|a |Pa|la|vra |man|da, |Se|nhor;"+
            "Pa|ra |ou|vi|-La, |eis|-me |a|qui." ,

            "Ao |meu |de|se|jo |re|nun|ci|a|rei"+
            "Pa|ra |ser|vir|-Te |e |Te |a|gra|dar;"+
            "E |os |pre|cei|tos |da |Tu|a |lei"+
            "Que|ro, |con|ten|te, |e|xe|cu|tar." ,

            "Ser|ve|-Te |des|te |meu |fra|co |ser"+
            "Co|mo |ins|tru|men|to |ao |Teu |lou|vor;"+
            "E |Te |ser|vin|do, |que|ro |di|zer:"+
            "Ser|vo |i|nú|til |sou, |ó |Se|nhor." ,

            "Teu |ser|vo |ou|ve; |fa|la, |Se|nhor;"+
            "O |que |re|que|res |de |mim, |ó |Deus?"+
            "A |voz |di|vi|na, |que |vem |dos |céus,"+
            "Teu |ser|vo |ou|ve; |fa|la, |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "239": { 
        nome: "Eis que a noite é passada",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eis |que |a |noi|te |é |pas|sa|da, |pa|ra |mim |sur|giu |o |di|a;"+
            "De |Je|sus |es|tou |mais |per|to; |oh! |Que |a|le|gri|a!"+
            "Sem|pre |mais |eu |vou |cres|cen|do"+
            "Nas |vir|tu|des |do |Se|nhor"+
            "Pa|ra, |um |di|a, |ser |per|fei|to |no |di|vi|no |a|mor." ,

            "Ó |Je|sus, |Por |Tu|a |gra|ça,"+
            "Gló|ria |sem|pre |Te |da|rei;"+
            "Res|ga|ta|do |por |Teu |san|gue,"+
            "Só |a |Ti |ser|vi|rei." ,

            "Eis |que |a |noi|te |é |pas|sa|da, |já |sur|giu |a |Luz |di|vi|na;"+
            "Es|sa |Luz |é |Je|sus |Cris|to, |que |me |i|lu|mi|na."+
            "Bem |cin|gi|dos |de |jus|ti|ça |e |das |ar|mas |do |Se|nhor,"+
            "Eu |es|pe|ro, |con|fi|an|te, |ser |um |ven|ce|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "240": { 
        nome: "Não me cansarei de cantar",
        compasso: "6/8",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Não |me |can|sa|rei |de |can|tar"+
            "Lou|vo|res |ao |meu |Cri|a|dor;"+
            "A |paz |que |me |faz |e|xul|tar"+
            "É |fru|to |do |Seu |a|mor." ,

            "Gló|ria, |gló|ria |dou |a |Je|sus |com |fer|vor;"+
            "Por |E|le |se|rei |ven|ce|dor;"+
            "Oh! |Gló|ria |ao |meu |Re|den|tor!" ,

            "De |quan|do |Je|sus |me |cha|mou,"+
            "Não |ces|so |de |dar|-Lhe |lou|vor;"+
            "Foi |E|le |Quem |me |res|ga|tou,"+
            "Ben|di|to |é |Cris|to, |o |Se|nhor!" ,

            "A |san|ta |pre|sen|ça |de |Deus,"+
            "Meu |cá|li|ce |faz |tras|bor|dar;"+
            "Te|rei |re|go|zi|jo |nos |céus,"+
            "Glo|ri|o|so, |e|ter|no, |sem |par." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "241": { 
        nome: "A Justiça divina",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus |quis |ao |mun|do |ma|ni|fes|tar"+
            "A |per|fei|ta |Ca|ri|da|de;"+
            "Pe|los |pro|fe|tas, |fez |a|nun|ci|ar"+
            "A |Jus|ti|ça |e |a |Ver|da|de."+
            "Es|sa |jus|ti|ça, |que |é |Je|sus,"+
            "En|vi|a|da |foi |ao |mun|do,"+
            "Ma|ni|fes|tan|do, |por |Su|a |luz,"+
            "O |a|mor |que |ao |céu |con|duz." ,

            "A |Jus|ti|ça |di|vi|na |é |Je|sus, |o |Sal|va|dor;"+
            "Su|a |sã |dou|tri|na |nos |con|duz |ao |Cri|a|dor." ,

            "Es|sa |Jus|ti|ça |nos |li|ber|tou"+
            "Da |con|de|na|ção |vin|dou|ra;"+
            "Deus, |por |Je|sus, |nos |pre|des|ti|nou"+
            "Pa|ra |a |gló|ria |du|ra|dou|ra."+
            "So|mos, |a|go|ra, |re|mi|dos |Seus,"+
            "E|xal|te|mos |o |Seu |No|me;"+
            "E|le |nos |fez |ci|da|dãos |dos |céus"+
            "E |her|dei|ros |do |bom |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "242": { 
        nome: "Profundo é o saber de Deus Criador",
        compasso: "3/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pro|fun|do é o |sa|ber |de |Deus, |Cri|a|dor,"+
            "Sa|ber |sem |i|gual, |de |gran|de |es|plen|dor;"+
            "O in|ten|to |de |Deus |nin|guém |po|de |son|dar;"+
            "Con|se|lhos |nin|guém |foi |ao |gran|de |Deus |di|tar." ,

            "Per|fei|to |sa|ber |é |só |o |de |Deus,"+
            "Al|tís|si|mos |são |os |pen|sa|men|tos |Seus;"+
            "Por |E|le |e |d'E|le |é |tu|do o |que |há;"+
            "É |Deus |que, |aos |ho|mens, |sus|ten|to |sem|pre |dá." ,

            "Su|bli|me |sa|ber |per|ten|ce |a |Deus,"+
            "Ciên|cias |dos |céus |não |ne|ga|rá |aos |Seus;"+
            "Ri|que|zas |per|pé|tu|as |só |E|le é |que |tem;"+
            "A |E|le |a |gló|ria |e|ter|na|men|te. A|mém." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "243": { 
        nome: "É Jesus o nosso Intercessor",
        compasso: "4/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Su|mo |Sa|cer|do|te |san|to, |e|ter|nal,"+
            "É |Je|sus |o |Se|nhor;"+
            "In|ter|ce|de |jun|to |ao |Pai |ce|les|ti|al,"+
            "Nos|so |Deus, |Cri|a|dor." ,

            "É |Je|sus |o |nos|so |in|ter|ces|sor"+
            "Jun|to |a |Deus, |o |For|ma|dor;"+
            "Em |Seu |No|me, |a |nos|sa |o|ra|ção"+
            "Che|ga|rá |ao |Cri|a|dor." ,

            "Sa|cer|do|te |com|pas|si|vo |é |o |Se|nhor;"+
            "E|le |nos |res|ga|tou;"+
            "É |pi|e|do|so |pa|ra |com |o |trans|gres|sor,"+
            "Pois |na |cruz |o |sal|vou." ,

            "Foi |ten|ta|do |em |tu|do |o |Se|nhor |Je|sus,"+
            "Re|sis|tiu |com |va|lor;"+
            "Com |Seu |bra|ço |for|te |E|le |nos |con|duz;"+
            "Tem |por |nós |gran|de |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "244": { 
        nome: "Cristo intercede por ti",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quan|do |te |fal|tam |for|ças |con|tra |o |mal,"+
            "Tens |o |so|cor|ro |dos |céus;"+
            "Cris|to |Je|sus, |Cor|dei|ro |di|vi|nal,"+
            "É |In|ter|ces|sor |jun|to |a |Deus." ,

            "Cris|to |in|ter|ce|de |por |ti"+
            "Jun|to |a |Deus, |o |Pai |ce|les|ti|al;"+
            "Cris|to |é |o |mo|de|lo |san|to |e |per|fei|to,"+
            "Cris|to |é |o |A|mi|go |le|al." ,

            "Quan|do |o |i|ni|mi|go |te |vi|er |ten|tar,"+
            "Cla|ma |a |Je|sus, |Re|den|tor;"+
            "For|ças, |por |cer|to, |E|le |i|rá |te |dar"+
            "E |te |fa|rá |ven|ce|dor." ,

            "Quan|do |es|ti|ve|res |em |tri|bu|la|ção,"+
            "Cla|ma |ao |Fi|lho |de |Deus,"+
            "E |cer|ta|men|te |te |so|cor|re|rão"+
            "An|jos |man|da|dos |dos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "245": { 
        nome: "Não pode entender o mundo",
        compasso: "3/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
        "Não |po|de |en|ten|der |o |mun|do"+
        "Quão |a|le|gre |é |o |meu |vi|ver;"+
        "Mas, |de |Cris|to, |o |a|mor |pro|fun|do"+
        "Sen|ti|rá |quem |n'E|le |crer." ,

        "Mes|mo |quan|do |em |a|fli|ção,"+
        "Sin|to |a |paz |de |Deus;"+
        "Cris|to, |ao |meu |co|ra|ção,"+
        "Bên|ções |traz |dos |céus;"+
        "Se, |com |E|le, |a|qui |vi|ver |tão |glo|ri|o|so |é,"+
        "Quão |glo|ri|o|so |en|tão |se|rá,"+
        "Se |per|ma|ne|cer |na |fé?!" ,

        "Eu |me |sin|to |mui |di|to|so,"+
        "Pe|la |gra|ça |do |bom |Deus;"+
        "Meu |fu|tu|ro |é |mui |glo|ri|o|so,"+
        "Pois |es|pe|ro |ir |aos |céus." ,

        "O |meu |ser |foi |trans|for|ma|do"+
        "Pe|la |o|bra |do |Se|nhor;"+
        "Di|a |a |di|a |mais |che|ga|do"+
        "Eu |es|tou |ao |lar |de |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "246": { 
        nome: "Irmãos já resgatados",
        compasso: "6/8",
        velMin: 116,
        velMed: 124,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ir|mãos, |já |res|ga|ta|dos |no |san|gue |de |Je|sus,"+
            "A|go|ra |i|lu|mi|na|dos, |mos|tre|mos |Su|a |luz;"+
            "Do |mun|do, |se|pa|ra|dos, |o |Mes|tre |nos |con|duz." ,

            "Res|ga|ta|dos |fo|mos,"+
            "Per|do|a|dos |so|mos;"+
            "Sal|vos |nós |se|re|mos,"+
            "Sen|do |a |Deus |fi|éis." ,

            "Com |to|do |o |po|vo |ei|ei|to |ser|vi|mos |ao |Se|nhor;"+
            "Her|dei|ros |nos |tem |fei|to |do |rei|no |de |es|plen|dor,"+
            "E|ter|no |e |per|fei|to, |um |rei|no |de |a|mor." ,

            "No |nú|me|ro |dos |san|tos |es|ta|mos, |por |Je|sus,"+
            "E, |com |ves|ti|dos |bran|cos, |ho|nra|mos |Su|a |luz;"+
            "Co|ber|tos |com |Seu |man|to, |o |mal |não |nos |se|duz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "247": { 
        nome: "Se fores tentado",
        compasso: "6/8",
        velMin: 100,
        velMed: 116,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Se |fo|res |ten|ta|dos, |não |de|ves |ce|der,"+
            "Re|sis|te |ao |pe|ca|do |a|té |o |ven|cer;"+
            "Sê |mui |va|lo|ro|so |com |fé |que |Deus |dá,"+
            "En|tão |o |i|ni|mi|go, |de |ti, |fu|gi|rá." ,

            "Não |man|ches |as |ves|tes |que |Cris|to |la|vou;"+
            "Pa|ra |em|bran|que|cê|-las, |san|gue |der|ra|mou;"+
            "Re|jei|ta |o |pe|ca|do, |pro|cu|ra |i|mi|tar"+
            "Os |que |o |ven|ce|ram |sem |de|sa|ni|mar." ,

            "Se |for|ças |te |fal|tam |pa|ra |com|ba|ter,"+
            "Deus, |o |O|ni|po|ten|te, |po|de |te |va|ler;"+
            "A |quem |bus|ca |au|xí|lio, |vi|tó|ria |da|rá,"+
            "Ja|mais |con|fun|di|do |E|le |o |dei|xa|rá." ,

            "Só |em |Cris|to |con|fi|a, |se|ja |noi|te |ou |di|a,"+
            "E |te|rás |a|le|gri|a |em |teu |co|ra|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "248": { 
        nome: "Glória Aleluia Sinto Jesus",
        compasso: "9/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 7,
        velMinMeiaHora: 72,
        velMedMeiaHora: 75,
        velMaxMeiaHora: 78,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Gló|ria! |A|le|lu|ia! |Sin|to |Je|sus,"+
            "E|le |me |gui|a |na |sen|da |de |luz;"+
            "Seu |for|te |bra|ço |me |sus|te|rá,"+
            "De |to|do |o |mal |me |de|fen|de|rá." ,

            "Gló|ria! |A|le|lu|ia! |Con|tem|pla|rei"+
            "Fa|ce |a |fa|ce |o |meu |Se|nhor,"+
            "E |en|tão |i|gual |a |E|le |se|rei"+
            "No |Seu |glo|ri|o|so |lar |de |es|plen|dor." ,

            "Gló|ria! |A|le|lu|ia! |San|to |é |o |Se|nhor,"+
            "Três |ve|zes |San|to |e |ri|co |em |a|mor;"+
            "Vi|vo |se|gu|ro |em |Seu |po|der,"+
            "E |es|te |mun|do |pos|so |ven|cer." ,

            "Gló|ria! |A|le|lu|ia! |A|mo |ao |Se|nhor;"+
            "Que|ro |ser|vi|-Lo |com |to|do |o |fer|vor;"+
            "Em |Su|a |gló|ria |eu |en|tra|rei"+
            "E, |jun|to |aos |san|tos, |ha|bi|ta|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "249": { 
        nome: "A Caridade",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Es|pe|ran|ça |e |fé |sus|têm |nos|sa |vi|da |no |Se|nhor,"+
            "Na |fir|me|za |e |san|ti|da|de;"+
            "Es|ses |dons |que |vêm |dos |céus |le|va|rão |ao |Cri|a|dor"+
            "Os |que |an|da|rem |na |di|vi|na |Ca|ri|da|de." ,

            "A |Ca|ri|da|de |é |a |per|fei|ção"+
            "Que |per|ma|ne|ce |e|ter|na|men|te;"+
            "O |fi|el |a |Deus, |que |em |si |a |pos|suir, |re|ce|be|rá"+
            "Ga|lar|dão |ex|ce|len|te." ,

            "Se |fa|lar|mos, |ó |ir|mãos, |a |lin|gua|gem |ce|les|ti|al"+
            "E |a |dos |ho|mens, |em |ver|da|de,"+
            "Is|so |não |nos |le|va|rá |à |ci|da|de |e|ter|nal,"+
            "Se |em |nós |não |es|ti|ver |a |Ca|ri|da|de." ,

            "Pa|ra |os |san|tos |do |Se|nhor, |é |vir|tu|de |sem |i|gual"+
            "A |ex|ce|len|te |Ca|ri|da|de;"+
            "Re|ves|ti|dos |des|se |bem, |ven|ce|re|mos |to|do |o |mal"+
            "E |ve|re|mos |Deus, |o |Pai |da |e|ter|ni|da|de." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "250": { 
        nome: "Com meu Redentor viverei nos céus",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "No |di|a |em |que |Je|sus |vi|er"+
            "Pa|ra, |des|te |mun|do, |me |re|co|lher,"+
            "Em |Su|a |paz |des|can|sa|rei"+
            "E |a |Su|a |vol|ta |a|guar|da|rei." ,

            "Com |meu |Re|den|tor |vi|ve|rei |nos |céus"+
            "Jun|to |ao |Cri|a|dor, |o |e|ter|no |Deus;"+
            "Por |di|vi|no |a|mor, |eu |des|fru|ta|rei"+
            "Da |e|ter|na |he|ran|ça |com |Cris|to, |o |Rei." ,

            "E|co|a|rá |dos |al|tos |céus"+
            "O |som |da |trom|be|ta |do |e|ter|no |Deus;"+
            "E, |do |meu |so|no, |a|cor|da|rei"+
            "Pa|ra |en|con|trar |o |glo|ri|o|so |Rei." ,

            "Vou |com |Je|sus |me |en|con|trar;"+
            "Gran|de |há |de |ser |o |meu |ju|bi|lar,"+
            "Pois |trans|for|ma|do |eu |se|rei"+
            "Na |a|pa|ri|ção |do |ex|cel|so |Rei."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "251": { 
        nome: "Firme nas mãos de Cristo",
        compasso: "4/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 46,
        velMedMeiaHora: 48,
        velMaxMeiaHora: 50,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Fir|me |nas |mãos |de |Cris|to, |fir|me |no |Sal|va|dor,"+
            "Mi|nh'al|ma |já |se |en|con|tra |a|bri|ga|da |em |Seu |a|mor."+
            "Sin|to |a |voz |di|vi|na |de |Cris|to, |o |Rei |da |gló|ria;"+
            "Em |to|das |as |ba|ta|lhas, |al|can|ça|rei |vi|tó|ria." ,

            "Fir|me |nas |mãos |de |Cris|to,"+
            "Em |paz |mi|nh'al|ma |es|tá;"+
            "So|bre |o |i|ni|mi|go, |pe|la |fé, |tri|un|fa|rá."+
            "For|te |se|rei |na |lu|ta, |na |dor |e |na |tor|men|ta,"+
            "Pros|si|go |a|van|te, |em |gló|ria,"+
            "Pois |Cris|to |me |sus|ten|ta." ,

            "Fir|me |nas |mãos |de |Cris|to, |que |pa|de|ceu |por |mim,"+
            "Si|go, |por |fé |Seus |pas|sos, |gló|ria |eu |te|rei |ao |fim;"+
            "Es|pe|ro |com |pa|ci|ên|cia, |pois |não |é |tem|po |ain|da;"+
            "Bre|ve |ve|rei, |nas |nu|vens, |Cris|to, |em |Su|a |vin|da." ,

            "Fir|me |nas |mãos |de |Cris|to, |fir|me |no |Sal|va|dor,"+
            "Mi|nh'al|ma |já |se |en|con|tra,"+
            "A|bri|ga|da |em |Seu |a|mor." ,
        
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "252": { 
        nome: "Exaltação ao Deus Onipotente",
        compasso: "4/4",
        velMin: 80,
        velMed: 90,
        velMax: 100,
        inicio: 1,
        velMinMeiaHora: 52,
        velMedMeiaHora: 55,
        velMaxMeiaHora: 58,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "E|xal|ta|ção |ao |Deus |O|ni|po|ten|te!"+
            "San|to |lou|vor |Lhe |dão |os |fi|lhos |Seus."+
            "O|ram |por |fé |e, |re|ve|ren|te|men|te,"+
            "Can|tam |ao |Pai, |Se|nhor |e |gran|de |Deus." ,

            "Ve|ne|ra|ção |ao |Deus |O|ni|pre|sen|te!"+
            "Re|ge |do |céu |o |mun|do |que |for|mou."+
            "Do |Seu |o|lhar, |não |po|de o |ser |vi|ven|te"+
            "Se |o|cul|tar, |pois |E|le |o |cri|ou" ,

            "A|do|ra|ção |ao |Deus |O|ni|ci|en|te!"+
            "É |mui |su|bli|me o |pen|sa|men|to |Seu;"+
            "Sá|bio, |fi|el |e |bom |a |to|do o |cren|te"+
            "Que, |pe|la |fé, |in|vo|ca o |Rei |do |céu" ,
        
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "253": { 
        nome: "Foi alegre ditoso o dia",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eu |es|ta|va |mor|to |no |pe|ca|do,"+
            "Mas |Je|sus, |com |Su|a |voz, |me |des|per|tou;"+
            "E|ra |pe|lo |mal, |es|cra|vi|za|do"+
            "E |a|go|ra |li|ber|to |es|tou." ,

            "Foi |a|le|gre, |di|to|so |o |di|a"+
            "Em |que |Cris|to, |o |Ver|da|dei|ro,"+
            "Trou|xe |a |luz |di|vi|na |ao |meu |co|ra|ção"+
            "E |ves|tiu|-me |de |jus|ti|ça |e |sal|va|ção;"+
            "Gran|de |gló|ria, |oh! |a|le|lu|ia!,"+
            "No |Seu |rei|no |des|fru|ta|rei;"+
            "Lá |eu |can|ta|rei |lou|vo|res |ao |Jus|to,"+
            "Ma|jes|to|so |e |gran|de |Rei." ,

            "Eu |não |ser|vi|rei |à |i|ni|qui|da|de,"+
            "Pois |re|te|nho |em |mim |a |fé |no |Sal|va|dor;"+
            "En|tra|rei |na |ce|les|ti|al |ci|da|de"+
            "Pa|ra |es|tar |com |o |meu |Se|nhor." ,

            "Com |e|ter|na |bem-|a|ven|tu|ran|ça,"+
            "Os |Seus |san|tos, |o |Se|nhor |co|ro|a|rá;"+
            "Eu |pros|si|go |com |a |es|pe|ran|ça"+
            "Da |vi|tó|ria, |que |per|to |es|tá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "254": { 
        nome: "De Jesus a graça divina",
        compasso: "4/4",
        velMin: 52,
        velMed: 59,
        velMax: 66,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "De |Je|sus |a |gra|ça |di|vi|na |e, |"+
            "Tam|bém, |a |paz |de |Deus, |"+
            "Com |a |ce|les|tial |dou|tri|na, |"+
            "Per|ma|ne|çam |nos |fi|lhos |Seus.",

            "Fé |e a|mor |con|ser|vam |u|ni|dos |"+
            "Os |re|mi|dos |do |Se|nhor; |"+
            "Se|jam |e|les |re|ves|ti|dos |"+
            "Das |vir|tu|des |do |Re|den|tor.",

            "Sem|pre u|ni|dos |ao |sá|bio |Mes|tre |"+
            "De|vem |os |fi|éis |vi|ver; |"+
            "E |a |co|mu|nhão |ce|les|te, |"+
            "Nos |seus |co|ra|ções, |de|vem |ter.",            
        ],
        temposVersos: [
            4, 4, 6, 2, 4, 2, 2, 4, 4,
            4, 4, 6, 2, 4, 4, 8,
            4, 4, 4, 4, 6, 2, 4, 4,
            4, 4, 4, 4, 4, 2, 2, 8
        ],
        notas: [
            'F4', 'E4', 'F4', 'G4', 'A4', 'C5', 'Bb4', 'A4', 'G4',
            'A4', 'A4', 'A4', 'D5', 'C5', 'B4', 'C5',
            'C5', 'B4', 'Bb4', 'A4', 'G4', 'F4', 'F4', 'E4',
            'F4', 'F#4', 'G4', 'D5', 'F4', 'A4', 'G4', 'F4'
        ],
        temposNotas: [
            4, 4, 6, 2, 4, 2, 2, 4, 4,
            4, 4, 6, 2, 4, 4, 8,
            4, 4, 4, 4, 6, 2, 4, 4,
            4, 4, 4, 4, 4, 2, 2, 8
        ]
    },
    "255": { 
        nome: "Jesus é a nossa Rocha",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |é |a |nos|sa |Ro|cha |de |e|ter|na |sal|va|ção,"+
            "Que |po|de |a|bri|gar|-nos |em |to|da |a |ten|ta|ção;"+
            "Se |n'E|le |con|fi|ar|mos, |nin|guém |nos |ven|ce|rá,"+
            "Pois |nos|sa |fé |cons|tan|te |em |Cris|to |es|tá." ,

            "É |Cris|to |a |Ro|cha |de |e|ter|na |sal|va|ção,"+
            "Re|al |Fun|da|men|to |da |nos|sa |re|den|ção;"+
            "É |Cris|to |a |Ro|cha, |Au|tor |do |su|mo |bem,"+
            "Quem |n'E|le |fir|me |es|tá, |pro|te|ção |tem." ,

            "Se|gu|ro |A|li|cer|ce |é |o |Se|nhor |Je|sus,"+
            "Que |nos |ti|rou |das |tre|vas, |mos|tran|do|-nos |a |luz;"+
            "Se|rá |es|cla|re|ci|do |quem |nes|sa |Ro|cha |crer,"+
            "Bem |fir|me |es|ta|rá |pe|lo |Seu |po|der." ,

            "A |ge|ra|ção |e|lei|ta |nós |so|mos, |no |Se|nhor"+
            "E |sa|cer|dó|cio |san|to |ao |nos|so |Cri|a|dor;"+
            "A |gra|ça, |nós |de|ve|mos |ao |mun|do |pro|cla|mar;"+
            "Quem |crer |no |Seu |po|der |há |de |tri|un|far." ,
        
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "256": { 
        nome: "Sem Deus Pai vivi no mundo",
        compasso: "6/4",
        velMin: 100,
        velMed: 110,
        velMax: 120,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sem |Deus |Pai, |vi|vi,"+
            "No |mun|do |à |vai|da|de |e |eu |ser|vi;"+
            "Em |tris|te|zas me |en|con|tra|va |quan|do, A |Cris|to, |co|nhe|ci;"+
            "Seu |per|dão, |Seu |a|mor,"+
            "Em |mi|nh'al|ma |re|ce|bi." ,

            "Eu |ja|mais |com|pre|en|de|ri|a"+
            "O E|van|ge|lho |do |Se|nhor,"+
            "Se |não |fos|se |Su|a |gra|ça,"+
            "Seu |a|mor, |i|men|so |a|mor,"+
            "Que |do |mal |me |li|vrou,"+
            "Me |u|nin|do |ao |Cri|a|dor." ,

            "No |meu |ser |a|go|ra"+
            "Sin|to |Teu |Es|pí|ri|to, ó |Se|nhor,"+
            "Que |me |gui|a |na |ver|da|de"+
            "E |me |le|va ao |lar |de a|mor;"+
            "Nes|se |lar |vi|ve|rei |com |Je|sus,"+
            "Meu |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "257": { 
        nome: "Remiu-nos por graça",
        compasso: "6/8",
        velMin: 116,
        velMed: 130,
        velMax: 144,
        inicio: 6,
        velMinMeiaHora: 66,
        velMedMeiaHora: 68,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Re|miu|-nos |por |gra|ça |o |bon|do|so |Je|sus,"+
            "Mor|ren|do |por |nós |so|bre |a |cruz;"+
            "Pa|gou |nos|sa |dí|vi|da |ao |Cri|a|dor,"+
            "Por |Seu |i|ne|fá|vel |a|mor." ,

            "Bus|que|mos |a |Cris|to |com |to|do |o |fer|vor,"+
            "Na |paz |na |hu|mil|da|de, |com |fé |e |te|mor;"+
            "Di|vi|na |mer|cê |quer |Je|sus |dis|pen|sar"+
            "A |quem, |con|fi|an|te, |a |E|le |cla|mar." ,

            "Nin|guém |me|re|ci|a |o |fa|vor |do |Se|nhor,"+
            "Mas |E|le, |por |gran|de |a|mor,"+
            "A |to|dos |pro|me|te |re|al |sal|va|ção;"+
            "Quem |crê |em |Je|sus, |tem |per|dão." ,

            "Só |em |Cris|to |te|mos |ve|raz |sal|va|ção,"+
            "Por |E|le |al|can|ça|mos |per|dão;"+
            "Je|sus |ve|io |com |Seu |po|der |nos |sal|var"+
            "E |Seus |fi|éis |ao |céu |gui|ar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "258": { 
        nome: "Louvemos ao nosso Senhor",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Lou|ve|mos |ao |nos|so |Se|nhor, |"+
            "E|xal|te|mos |Seu |No|me |e|ter|no, |"+
            "Pois |E|le |é |Fon|te |de a|mor |"+
            "E |é |dig|no |de |to|do o |lou|vor.|" ,

            "Oh! |Va|mos |lou|vo|res |can|tar, |"+
            "A|gra|dá|veis |lou|vo|res |ao |bom |Deus, \n|"+
            "E |hi|nos |de |gló|ria en|to|ar; |"+
            "Va|mos |no |Seu |a|mor |ju|bi|lar!|" ,

            "Oh! |Va|mos, |com |fé, |ao |Se|nhor; |"+
            "As|sen|te|mo|-nos |to|dos |à |me|sa, \n|"+
            "Pois |nos |ser|vi|rá |com |a|mor, |"+
            "Pe|lo Es|pí|ri|to |Con|so|la|dor.|" ,

            "A|qui |nos |a|cha|mos |Se|nhor, |"+
            "O|fer|tan|do |tri|bu|tos |de |gló|ria; \|"+
            "Só |Tu |és, |do |bem, |Do|a|dor, |"+
            "Ó |e|ter|no, |bon|do|so |Se|nhor.|" ,
        ],
        temposVersos: [
            4,4,2,2,4,2,2,12,
            2,2,4,2,2,4,2,2,4,8,
            4,4,2,2,4,2,2,12,
            2,2,4,2,2,4,2,2,12,4
        ],
        notas: [
            'F4','D5','C5','C5','Bb4','A4','A4','Bb4',
            'F4','F4','G4','C5','Bb4','A4','G4','A4','G4','F4',
            'Bb4','D5','C5','C5','Bb4','A4','A4','Bb4',
            'Bb4','C5','D5','Eb5','Eb5','D5','C5','C5','Bb4','C1'
        ],
        temposNotas: [
            4,4,2,2,4,2,2,12,
            2,2,4,2,2,4,2,2,4,8,
            4,4,2,2,4,2,2,12,
            2,2,4,2,2,4,2,2,12,4
        ]
    },
    "259": { 
        nome: "Só triunfará o de sincero coração",
        compasso: "4/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 45,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quem |ser|vir |a |Deus, |tri|un|fa|rá |so|bre |o |mal"+
            "E |re|ce|be|rá |o |ga|lar|dão |e|ter|nal;"+
            "Lu|ta|rá, |com |to|do |o |fer|vor, |Con|tra |to|da |a |ten|ta|ção;"+
            "Só |tri|un|fa|rá |o |de |sin|ce|ro |co|ra|ção." ,

            "Va|mos |ba|ta|lhar"+
            "Pa|ra |al|can|çar"+
            "Gran|de |ga|lar|dão:"+
            "Nos|sa |sal|va|ção." ,

            "Na|da |po|de |des|truir |a |fé |que |Deus |dá;"+
            "Com |Seu |bra|ço |for|te, |Seus |fi|éis |gui|a|rá;"+
            "Quem |Seu |No|me |sem|pre |con|fes|sar, |nun|ca |lu|ta|rá |em |vão;"+
            "Só |tri|un|fa|rá |o |de |sin|ce|ro |co|ra|ção." ,

            "As |po|ten|tes |ar|mas |do |cris|tão |são |dos |céus,"+
            "Ar|mas |vir|tu|o|sas |que |pro|vêm |só |de |Deus;"+
            "A |es|pa|da |do |Es|pí|ri|to |li|vra|rá |da |ten|ta|ção;"+
            "Só |tri|un|fa|rá |o |de |sin|ce|ro |co|ra|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "260": { 
        nome: "Sou servo inútil ó Deus piedoso",
        compasso: "6/8",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 73,
        velMaxMeiaHora: 76,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Sou |ser|vo i|nú|til, |ó |Deus |pi|e|do|so,"+
            "Sou |sem|pre |fra|co, |sin|to|-me |fal|to|so;"+
            "Nes|ta im|pru|dên|cia, |ro|go |cle|mên|cia;"+
            "La|va a |mi|nha |al|ma, |cla|mo a |Ti, |Se|nhor." ,

            "Sou |ser|vo i|nú|til, |ser|vo im|per|fei|to;"+
            "Vi|vo an|si|o|so |pa|ra |ser |a|cei|to;"+
            "Po|des |lim|par|-me, |jus|ti|fi|car|-me;"+
            "Se |Tu |o |qui|se|res, |na|da im|pe|di|rá." ,

            "Sou |ser|vo i|nú|til |nes|te |ca|mi|nho,"+
            "Sem |Teu |cu|da|do, |que |fa|rei |so|zi|nho?"+
            "Es|te |Teu |fi|lho |ro|ga |au|xí|lio;"+
            "Ou|ve |meu |pe|di|do: |Com|pai|xão |Se|nhor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "261": { 
        nome: "Vivo por Cristo",
        compasso: "2/2",
        velMin: 50,
        velMed: 58,
        velMax: 66,
        inicio: 1,
        velMinMeiaHora: 32,
        velMedMeiaHora: 34,
        velMaxMeiaHora: 36,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vi|vo |por |Cris|to, |o |meu |Sal|va|dor;"+
            "Vi|vo |pro|van|do |o |Seu |gran|de |a|mor."+
            "Cris|to, |o |Mes|tre, |na |cruz |ex|pi|rou;"+
            "Por |Su|a |mor|te, |per|dão |me |do|ou." ,

            "Je|sus, |Pas|tor |di|vi|no,"+
            "En|tre|go |a |Ti |meu |ser,"+
            "Pois, |com |Teu |sa|cri|fí|ci|o,"+
            "Fi|zes|te|-me |vi|ver;"+
            "A|mor |ce|les|te |e |San|to"+
            "Mos|tras|te |so|bre |a |cruz;"+
            "Glo|ri|o|so |é |per|ten|cer |a |Ti,"+
            "Ó |Sal|va|dor |Je|sus!" ,

            "É |um |te|sou|ro |de |gran|de |va|lor"+
            "A |sal|va|ção |que |me |deu |o |Se|nhor;"+
            "Te|nho |es|pe|ran|ça |de |en|trar |lá |nos |céus"+
            "E |com |o |meu |Mes|tre, |es|tar |jun|to |a |Deus." ,

            "Hu|mil|de|men|te |eu |a|ten|de|rei"+
            "Aos |bons |con|se|lhos |de |Cris|to, |meu |Rei;"+
            "Em |gran|de |a|pre|ço |te|rei |Seu |a|mor;"+
            "Gló|ria |e |hon|ra |a |Cris|to, |o |Se|nhor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "262": { 
        nome: "Senhor a Tua igreja",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 45,
        velMaxMeiaHora: 48,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Se|nhor, |a |Tu|a i|gre|ja |es|pe|ra al|can|çar"+
            "O |rei|no |de |gló|ria |sem |par;"+
            "No |mun|do e|la en|con|tra |tris|te|za |e |dor,"+
            "A|fli|ção, |fa|di|ga e |pro|vas, |Se|nhor." ,

            "Se|nhor, |a |Tu|a i|gre|ja |Te |quer |en|con|trar"+
            "E |sem|pre |Con|ti|go |es|tar;"+
            "Oh! |Gui|a |seus |pas|sos |por |Teu |gran|de a|mor;"+
            "Vem |lhe |dar |os |Teus |a|dor|nos, |Se|nhor." ,

            "Se|nhor, |a |Tu|a i|gre|ja |quer |ver|-Te |vol|tar,"+
            "Tam|bém |quer |no |céu |ha|bi|tar;"+
            "Quer |ver |Tu|a |fa|ce, |ó |Rei |ce|les|ti|al,"+
            "E a|do|rar|-Te |no |Teu |rei|no e|ter|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "263": { 
        nome: "Cristo é Luz resplandecente",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |é |Luz |res|plan|de|cen|te"+
            "Ao |con|tri|to |pe|ca|dor,"+
            "Que, |can|sa|do |e |a|fli|to,"+
            "Paz |es|pe|ra |no |Se|nhor."+
            "."+
            "Sal|va|ção |te|rá"+
            "To|do |o |pe|ca|dor"+
            "Que |se |con|ver|ter"+
            "Ao |E|van|ge|lho |do |Se|nhor." ,

            "Cris|to |é |Sen|da |glo|ri|o|sa"+
            "Que |pres|er|va |no |a|mor"+
            "To|do |a|que|le |que |o|be|de|ce"+
            "À |von|ta|de |do |Se|nhor." ,

            "É |a |ce|les|ti|al |Ver|da|de"+
            "Que |trans|for|ma |o |pe|ca|dor,"+
            "E, |quem |d'E|la |se |re|ves|te,"+
            "Fi|lho |e|lei|to |é |do |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "264": { 
        nome: "Redentor celeste e santo",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Re|den|tor |ce|les|te |e |san|to,"+
            "Pu|ro |é |o |Teu |a|mor;"+
            "Tu |me |des|te |a |es|pe|ran|ça"+
            "De |en|trar |no |céu, |Se|nhor." ,

            "Oh! |Quão |fe|liz |se|rei |no |di|a"+
            "Em |que |Je|sus |do |céu |vol|tar;"+
            "Jun|to |aos |san|tos, |que |a|le|gri|a,"+
            "O |ga|lar|dão |vou |des|fru|tar!" ,

            "Faz, |Se|nhor, |com |que |eu |me |a|par|te"+
            "Do |pe|ca|do |e |do |mal,"+
            "E |me|di|te |noi|te |e |di|a"+
            "So|bre |a |lei |ce|les|ti|al." ,

            "Bem |fir|ma|do |na |es|pe|ran|ça,"+
            "A |vi|tó|ria |al|can|ça|rei;"+
            "Pros|se|guin|do |con|fi|an|te,"+
            "No |Teu |rei|no |en|tra|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "265": { 
        nome: "Bênçãos dos céus prometidas",
        compasso: "6/8",
        velMin: 120,
        velMed: 132,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bên|ções |dos |céus |pro|me|ti|das,"+
            "Nós |es|pe|ra|mos, |Se|nhor,"+
            "Pois |o |E|van|ge|lho |se|gui|mos,"+
            "Fru|to |do |Teu |gran|de |a|mor." ,

            "Ó |Cri|a|dor, |bên|ções |dos |céus,"+
            "Os |Teus |a|ma|dos |es|pe|ram"+
            "An|si|o|sa|men|te, |Se|nhor;"+
            "Pai |ce|les|ti|al, |ou|ve |os |Teus;"+
            "Bál|sa|mo |às |nos|sas |al|mas"+
            "São |Tu|as |bên|ções |de |a|mor." ,

            "Nós, |os |Teus |san|tos,"+
            "Pe|di|mos |hu|mil|de|men|te, |Se|nhor:"+
            "As |Tu|as |mãos |pi|e|do|sas"+
            "A|bre |em |nos|so |fa|vor." ,

            "Se|la, |Se|nhor, |Teus |re|mi|dos"+
            "Com |o |bom |Con|so|la|dor;"+
            "Vem |con|du|zir|-nos |a |to|dos"+
            "Pa|ra |os |céus, |ó |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "266": { 
        nome: "Vinde às fileiras",
        compasso: "2/4",
        velMin: 54,
        velMed: 61,
        velMax: 69,
        inicio: 1,
        velMinMeiaHora: 34,
        velMedMeiaHora: 35,
        velMaxMeiaHora: 36,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vin|de |às |fi|lei|ras |do |bom |Sal|va|dor,"+
            "Que |vos |cin|gi|rá |com |ar|mas |de |va|lor,"+
            "Pa|ra |com|ba|ter|des |sem |ne|nhum |te|mor"+
            "Con|tra |o |pe|ca|do, |com |to|do o |vi|gor." ,

            "Cris|to, |so|bre a |mor|te, |foi |o |Ven|ce|dor,"+
            "Sen|do, |do |se|pul|cro, |o |Su|plan|ta|dor;"+
            "Sem |ne|nhu|ma |cul|pa, |so|bre a |cruz |mor|reu,"+
            "Mas, |vi|to|ri|o|so, |re|tor|nou |ao |céu." ,

            "Cris|to, |nos|so |Mes|tre, |Gui|a |ce|les|ti|al,"+
            "É |Quem |nos |de|fen|de |do |po|der |do |mal;"+
            "Sem|pre |res|plan|de|ce |com |a |Su|a |luz,"+
            "Na |glo|ri|o|sa |sen|da |que |ao |céu |con|duz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "267": { 
        nome: "Graça maravilhosa",
        compasso: "4/4",
        velMin: 80,
        velMed: 86,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 46,
        velMedMeiaHora: 47,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gra|ça |ma|ra|vi|lho|sa |de |Cris|to, |o |Re|den|tor!"+
            "Não |há |em |mim |pa|la|vras |pa|ra |a |des|cre|ver!"+
            "É |dom |mui |ex|ce|len|te, |gran|de |é |seu |va|lor;"+
            "Es|sa |gra|ça |ben|di|ta |sin|to |em |meu |ser." ,

            "É |ma|ra|vi|lho|sa |e |ex|ce|len|te"+
            "A |di|vi|na |gra|ça |de |Je|sus,"+
            "Na|da |a |e|la |se |po|de |i|gua|lar;"+
            "E|la |a|pá|gou |os |meus |pe|ca|dos"+
            "E |à |gló|ria |e|ter|na |me |con|duz,"+
            "Su|bli|me |é |a |gra|ça |que |Je|sus"+
            "Me |ve|io |dar." ,

            "Gra|ça |ma|ra|vi|lho|sa |que |traz |a |sal|va|ção,"+
            "Por |e|la, |dos |pe|ca|dos |Cris|to |me |li|ber|tou;"+
            "E|la |se |es|ten|de |a |to|dos, |a |to|dos |dá |per|dão,"+
            "Pois |em |Cris|to |Je|sus, |aos |ho|mens, |Deus |a|mou." ,

            "Gra|ça |ma|ra|vi|lho|sa |con|ce|de |paz |com |Deus;"+
            "Por |sua |e|fi|cá|cia, |trans|for|ma |o |co|ra|ção;"+
            "Es|sa |ben|di|ta |gra|ça |me |le|va|rá |aos |céus,"+
            "On|de |Cris|to |da|rá |aos |san|tos, |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "268": { 
        nome: "Ó Deus bendito",
        compasso: "6/8",
        velMin: 126,
        velMed: 139,
        velMax: 152,
        inicio: 1,
        velMinMeiaHora: 80,
        velMedMeiaHora: 82,
        velMaxMeiaHora: 85,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Deus |ben|di|to, |ó |Pai |da |e|ter|ni|da|de,"+
            "Em |Tu|a |som|bra |me |que|ro |a|bri|gar;"+
            "For|ças |con|trá|rias |à |Tu|a |san|ti|da|de"+
            "Que|rem, |da |fé, |me |fa|zer |des|vi|ar." ,

            "Quan|to |é |frá|gil |a |mi|nha |es|tru|tu|ra!"+
            "Os |meus |re|cei|os, |dis|si|pa, |Se|nhor;"+
            "Dá |ao |Teu |ser|vo |di|vi|na |ar|ma|du|ra;"+
            "Ou|ve, |ó |Deus, |mi|nha |voz, |meu |cla|mor." ,

            "A |mi|nha |al|ma, |por |Ti, |foi |res|ga|ta|da,"+
            "Foi |en|vol|vi|da |por |Teu |gran|de |a|mor,"+
            "E, |das |ru|í|nas, |tam|bém |foi |le|van|ta|da;"+
            "Em |Ti |es|tá |mi|nha |sor|te, |Se|nhor." ,

            "Ó |Deus |ben|di|to, |Pai |de |bon|da|de,"+
            "Tu|a |Pa|la|vra |me |po|de |li|vrar;"+
            "Nes|te |de|ser|to |de |i|ni|qui|da|de,"+
            "Tu|as |vir|tu|des |me |po|dem |guar|dar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "269": { 
        nome: "Ressuscitados por graça fomos",
        compasso: "9/8",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Res|sus|ci|ta|dos, |por |gra|ça, |fo|mos"+
            "Com |Je|sus |Cris|to, |o |Re|den|tor;"+
            "Fi|lhos |e|lei|tos |de |Deus |já |so|mos,"+
            "E |co-|her|dei|ros |do |Sal|va|dor." ,

            "Nós |bus|ca|re|mos |a |san|ti|da|de,"+
            "A |paz, |a |gra|ça, |to|do |o |bem,"+
            "A |sã |dou|tri|na, |a |Ca|ri|da|de:"+
            "Do |Deus |e|ter|no |tu|do |pro|vém." ,

            "Bên|ções |glo|ri|o|sas |des|cem |do |al|to"+
            "On|de |ha|bi|ta |o |Cri|a|dor;"+
            "Se |rei|ei|tar|mos |o |mun|do in|gra|to,"+
            "Sal|vos |se|re|mos |por |Seu |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "270": { 
        nome: "Deste mundo mais nada esperarei",
        compasso: "4/4",
        velMin: 69,
        velMed: 80,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Des|te |mun|do |mais |na|da |es|pe|ra|rei,"+
            "Em |Je|sus, |sal|va|ção |já |en|con|trei;"+
            "N'E|le |sem|pre |eu |hei |de |con|fi|ar"+
            "E, |de |co|ra|ção, |O |a|mar." ,

            "Ou|tro |bem |não |pro|cu|ra|rei,"+
            "Ou|tro |bem |não |en|con|tra|rei;"+
            "Em |Je|sus, |meu |Se|nhor,"+
            "Sem|pre |de|vo |con|fi|ar;"+
            "Pois |quem |po|de |me |pro|te|ger"+
            "Nes|te |mun|do |en|ga|na|dor?"+
            "Só |Je|sus, |meu |mes|tre |e |Sal|va|dor,"+
            "Meu |Rei |e |e|ter|nal |Pas|tor." ,

            "É |vai|da|de |o |que |no |mun|do |há,"+
            "Tu|do |em |bre|ve |a|qui |se |fi|da|rá;"+
            "Vi|ve|rei |pa|ra |sem|pre |com |Je|sus,"+
            "Se |an|dar |em |Su|a |luz." ,

            "Nes|te |mun|do |mais |na|da |me |se|duz,"+
            "Mi|nha |gló|ria |e |ri|que|za |é |Je|sus;"+
            "Re|ce|ber |eu |de|se|jo, |lá |no |céu,"+
            "Tu|do |o |que |me |pro|me|teu." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "271": { 
        nome: "Graças dou a Ti ó bom Deus",
        compasso: "3/4",
        velMin: 80,
        velMed: 88,
        velMax: 96,
        inicio: 1,
        velMinMeiaHora: 52,
        velMedMeiaHora: 55,
        velMaxMeiaHora: 58,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gra|ças |dou |a |Ti, |ó |bom |Deus, |"+
            "Pois |man|das|te |vi|da, |dos |céus |"+
            "Por |Je|sus, |que |trou|xe o |per|dão |"+
            "E |re|di|miu|-me |da |per|di|ção.",

            "Gra|ças |dou |a |Ti, |For|ma|dor, |"+
            "Pe|las |bên|ções, |por |Teu |fa|vor; |"+
            "Ju|bi|lo|so a|go|ra |es|tou, |"+
            "Pois |Je|sus |Cris|to |me |res|ga|tou.",

            "Gra|ças |dou |a |Ti, |Deus de |a|mor, |"+
            "Pois |Tu |ou|ves, |o |meu |cla|mor; |"+
            "Só |a |Ti |mi|nh'al|ma |se a|tém; |"+
            "Gra|ças |Te |dou, |Pai |do |su|mo |bem."            
        ],
        temposVersos: [
            8, 4, 8, 4, 4, 4, 4, 12,
            8, 4, 8, 4, 4, 4, 4, 12,
            8, 4, 8, 4, 4, 4, 4, 12,
            4, 4, 4, 4, 4, 4, 8, 4, 12            
        ],
        notas: [
            'B4', 'G4', 'D4', 'D#4', 'E4', 'G4', 'C5', 'B4',
            'B4', 'G4', 'D4', 'G4', 'G4', 'A4', 'B4', 'A4',
            'B4', 'G4', 'D4', 'D#4', 'E4', 'G4', 'C5', 'B4',
            'D5', 'B4', 'G4', 'A4', 'B4', 'C5', 'B4', 'A4', 'G4'            
        ],
        temposNotas: [
            8, 4, 8, 4, 4, 4, 4, 12,
            8, 4, 8, 4, 4, 4, 4, 12,
            8, 4, 8, 4, 4, 4, 4, 12,
            4, 4, 4, 4, 4, 4, 8, 4, 12            
        ]
    },
    "272": { 
        nome: "Louvarei ao bom Jesus",
        compasso: "6/8",
        velMin: 42,
        velMed: 47,
        velMax: 52,
        inicio: 1,
        velMinMeiaHora: 25,
        velMedMeiaHora: 26,
        velMaxMeiaHora: 27,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Lou|va|rei |ao |bom |Je|sus, |o |san|to |Re|den|tor;"+
            "Su|a |po|de|ro|sa |mão |ve|io |me |li|ber|tar;"+
            "As |Pro|mes|sas |cum|pri|rá, |pe|lo |Seu |gran|de |a|mor,"+
            "E, |por |gra|ça, |no |Seu |rei|no |i|rei |mo|rar." ,

            "Glo|ri|fi|co |ao |bom |Je|sus, |san|to |e |fi|el |Se|nhor;"+
            "Eu |me |a|le|gro |em |Su|a |lei, |sem|pre |a |se|gui|rei;"+
            "Na|da |po|de |me |de|ter, |vi|vo |em |Seu |a|mor;"+
            "Seu |que|rer |in|tei|ra|men|te |a|cei|ta|rei." ,

            "A|le|lu|ia! |Eu |se|rei |co|mo |é |meu |Se|nhor,"+
            "No |glo|ri|o|so |di|a |em |que |E|le |do |céu |vol|tar;"+
            "Nes|ta |vi|da |me |sus|tém |o |bom |Con|so|la|dor;"+
            "Pe|la |fé |que |me |a|ju|da |a |ca|mi|nhar." ,

            "O |bom |Je|sus |ve|io |mo|rar"+
            "No |meu |co|ra|ção |e, |e |as|sim, |o |con|so|lar."+
            "Gló|ria |sem |fim |ao |Re|den|tor,"+
            "Fi|lho |do |e|ter|no |Deus, |o |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "273": { 
        nome: "Jesus me deu celeste hino",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 3.5,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |me |deu |ce|les|te |hi|no"+
            "Pa|ra |en|gran|de|cer |a |Deus;"+
            "E, |pe|lo |Es|pí|ri|to |di|vi|no,"+
            "Es|se |can|to |e|le|vo |aos |céus." ,

            "Te|nho |em |mim |um |hi|no |ao |Cri|a|dor,"+
            "Um |can|to |de |a|mor, |de |e|ter|na |gra|ti|dão;"+
            "Te|nho |em |mim |um |hi|no |ao |Re|den|tor;"+
            "Aos |céus |e|le|vo |o |meu |lou|vor." ,

            "Je|sus |tor|nou|-me |ven|tu|ro|so,"+
            "Mi|nha |vi|da |trans|for|mou;"+
            "Um |hi|no |san|to, |glo|ri|o|so,"+
            "Em |mi|nh'al|ma |co|lo|cou." ,

            "Um |no|vo |hi|no |lá |na |gló|ria"+
            "Com |os |an|jos |can|ta|rei,"+
            "Se|rá |um |hi|no |de |vi|tó|ria"+
            "A |Je|sus, |o |gran|de |Rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "274": { 
        nome: "Na plenitude estarei",
        compasso: "3/4",
        velMin: 56,
        velMed: 61,
        velMax: 66,
        inicio: 2.5,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "De|se|jo |ser, |ó |meu |Se|nhor,"+
            "Fi|el |a |Ti, |a|té |ao |fim;"+
            "Meus |pas|sos |gui|a |em |Teu |a|mor,"+
            "Se|nhor, |és |tu|do |pa|ra |mim." ,

            "Na |ple|ni|tu|de |es|ta|rei,"+
            "Os |céus |a|ber|tos |eu |ve|rei,"+
            "E|ter|nas |bên|ções |her|da|rei,"+
            "Ser|vin|do |a |Ti, |Se|nhor, |meu |Rei." ,

            "Ve|ne|ra|ção, |fé |e |te|mor"+
            "Es|te|jam |em |meu |co|ra|ção,"+
            "E, |do |pe|ca|do, |ó |Se|nhor,"+
            "Li|vrar|-me |po|de |Tu|a |mão." ,

            "As |tre|vas |vin|do |so|bre |mim,"+
            "Não |te|me|rei, |pois |o |es|plen|dor"+
            "Da |Tu|a |luz, |que |não |tem |fim,"+
            "Me |gui|a |ao |Teu |lar, |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "275": { 
        nome: "Avante eu vou",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Deus |en|vi|ou |do |céu, |Je|sus, |o |Sal|va|dor,"+
            "A |fim |de, |nes|te |mun|do, |re|mir |o |pe|ca|dor;"+
            "A |Cris|to |vou |ou|vir |e |pe|la |fé |an|dar,"+
            "E |a |gló|ria, |e|ter|na|men|te, |no |céu |vou |des|fru|tar." ,

            "A|van|te |eu |vou, |com |Cris|to |eu |vou,"+
            "Pa|ra |en|trar |no |e|ter|no |rei|no |de |es|plen|dor;"+
            "Si|go, |pe|la |gra|ça |e |fé, |a |Je|sus, |o |Sal|va|dor;"+
            "Na|da |que|ro |des|te |mun|do, |a|van|te |eu |vou." ,

            "No |di|a |do |Se|nhor, |os |an|jos |to|ca|rão"+
            "A |ce|les|ti|al |trom|be|ta |que |to|dos |ou|vi|rão;"+
            "Re|tor|na|rá |Je|sus, |o |nos|so |Re|den|tor,"+
            "Em |gló|ria, |so|bre |as |nu|vens, |cer|ca|do |de |es|plen|dor." ,

            "Je|sus, |o |Sal|va|dor, |ao |céu |me |le|va|rá;"+
            "Re|ce|be|rei |a |he|ran|ça |que |pre|pa|ra|da |es|tá;"+
            "A |Deus, |o |Pai, |ve|rei |com |Cris|to |es|ta|rei"+
            "E |to|dos |os |re|mi|dos, |no |céu, |con|tem|pla|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "276": { 
        nome: "Ó Senhor da glória",
        compasso: "4/4",
        velMin: 58,
        velMed: 65,
        velMax: 72,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ó |Se|nhor |da |gló|ria, |"+
            "Rei |ce|les|ti|al, |\n"+ 
            "Sem|pre |tens |to|tal |vi|tó|ria |"+
            "So|bre |to|do o |mal.\n\n|", 
            //"\n" +
            "Re|den|tor |ce|les|te, |"+ 
            "Fon|te |do |sa|ber, |\n" +
            "Pa|ra |nos |re|mir, |vi|es|te |" +
            "So|bre a |cruz |mor|rer.\n\n|"+

            "Tu |nos |li|ber|tas|te |"+
            "Da |es|cra|vi|dão; |\n"+
            "Com |Teu |san|gue |Tu |pa|gas|te |"+
            "Nos|sa |trans|gres|são.\n\n|" ,

            "Nos|sa |For|ta|le|za, |"+
            "Nos|sa |paz |e |Luz, |\n"+
            "Nos|sa |Gló|ria |e |Ri|que|za |"+
            "És, |Se|nhor |Je|sus.\n\n|" 
            
        ],
        temposVersos: [
            6,2,4,4,8,8,
            6,2,4,4,16,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12,

            6,2,4,4,8,8,
            6,2,4,4,16,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12,

            6,2,4,4,8,8,
            6,2,4,4,16,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12,

            6,2,4,4,8,8,
            6,2,4,4,16,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12
        ],
        notas: [
            'Bb4','A4','C5','Bb4','G4','F4',
            'Ab4','G4','Ab4','C5','Bb4','G4',
            'Bb4','A4','Bb4','Eb5','D5','C5','Bb4','Ab4',
            'G4','Bb4','Ab4','F4','Eb4',

            'Bb4','A4','C5','Bb4','G4','F4',
            'Ab4','G4','Ab4','C5','Bb4','G4',
            'Bb4','A4','Bb4','Eb5','D5','C5','Bb4','Ab4',
            'G4','Bb4','Ab4','F4','Eb4',

            'Bb4','A4','C5','Bb4','G4','F4',
            'Ab4','G4','Ab4','C5','Bb4','G4',
            'Bb4','A4','Bb4','Eb5','D5','C5','Bb4','Ab4',
            'G4','Bb4','Ab4','F4','Eb4',

            'Bb4','A4','C5','Bb4','G4','F4',
            'Ab4','G4','Ab4','C5','Bb4','G4',
            'Bb4','A4','Bb4','Eb5','D5','C5','Bb4','Ab4',
            'G4','Bb4','Ab4','F4','Eb4',
            ],
        temposNotas: [
            6,2,4,4,8,8,
            6,2,4,4,8,8,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12,

            6,2,4,4,8,8,
            6,2,4,4,8,8,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12,

            6,2,4,4,8,8,
            6,2,4,4,8,8,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12,

            6,2,4,4,8,8,
            6,2,4,4,8,8,
            6,2,4,4,4,4,4,4,
            6,2,4,4,12,

        ]
    },
    "277": { 
        nome: "Oh! Quanto é bom louvarmos",
        compasso: "6/8",
        velMin: 120,
        velMed: 132,
        velMax: 144,
        inicio: 1,
        velMinMeiaHora: 72,
        velMedMeiaHora: 74,
        velMaxMeiaHora: 76,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Quan|to |é |bom |lou|var|mos |a |Deus, |o |Cri|a|dor,"+
            "E |nos |re|go|zi|jar|mos |em |Su|a |e|ter|na |luz!"+
            "Por |gra|ça |fo|mos |sal|vos |do |mun|do |en|ga|na|dor,"+
            "Fo|mos |tam|bém |com|pra|dos |com |san|gue |de |Je|sus." ,

            "A|le|gres |ser|vi|re|mos"+
            "Ao |nos|so |For|ma|dor,"+
            "Can|tan|do |san|tos |hi|nos |a |Deus,"+
            "Nos|so |bom |Cri|a|dor." ,

            "Em |Deus |con|fi|a|re|mos |nas |nos|sas |pro|va|ções,"+
            "A |na|da |te|me|re|mos, |com |Su|a |pro|te|ção;"+
            "O |Seu |con|for|to |te|mos |em |nos|sas |a|fli|ções,"+
            "Sem|pre |tri|un|fa|re|mos |com |Su|a |for|te |mão." ,

            "A|le|gres |ca|mi|nhe|mos |com |o |bom |Pai |de |a|mor,"+
            "Se|guin|do|-O, |tri|un|fan|tes, |pois |do |mal |nos |li|vrou;"+
            "Nós |fo|mos |a|do|ta|dos |fi|lhos |ao |Cri|a|dor,"+
            "Pe|lo |pre|ci|o|so |san|gue |que |Cris|to |der|ra|mou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "278": { 
        nome: "Éramos mortos nas obras más",
        compasso: "6/8",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 72,
        velMedMeiaHora: 75,
        velMaxMeiaHora: 78,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "É|ra|mos |mor|tos |nas |o|bras |más;"+
            "Ja|mais |ti|ve|mos |di|vi|na |paz;"+
            "Gló|ria |ao |bom |Je|sus, |já |te|mos |Su|a |luz;"+
            "D'E|le |nos |vem |po|der |pa|ra |ven|cer." ,

            "Nós |fo|mos |fei|tos, |do |mun|do, a |luz"+
            "Por |nos|so |Mes|tre, |Cris|to |Je|sus;"+
            "Fir|mes |de|ve|mos |ser, |nun|ca |ao |mal |ce|der;"+
            "A|van|te |pa|ra os |céus, |lar |do |bom |Deus." ,

            "Já |des|te |mun|do |não |so|mos |mais;"+
            "Te|mos |mo|ra|das |ce|les|ti|ais."+
            "Tem|plos |do |gran|de |Deus |são |os |e|lei|tos |Seus;"+
            "Vi|va|mos |no |te|mor |do |Sal|va|dor." ,

            "To|dos |u|ni|dos |quer|-nos |Je|sus;"+
            "Os |Seus |re|mi|dos |ao |céu |con|duz;"+
            "É |bom |vi|ver |no a|mor, |aos |o|lhos |do |Se|nhor,"+
            "Hu|mil|des |e |fi|éis |ao |Rei |dos |reis." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "279": { 
        nome: "Oh! Não temas igreja de Deus",
        compasso: "4/4",
        velMin: 69,
        velMed: 80,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Não |te|mas |tu, |i|gre|ja |de |Je|sus,"+
            "Com |jus|ti|ça |E|le |te |con|fir|ma|rá;"+
            "O |lu|gar |da |tu|a |ten|da |e |ha|bi|ta|ção"+
            "O |Se|nhor |am|pli|a|rá." ,

            "To|da |a |ar|ma |con|tra |ti"+
            "Pros|pe|rar |não |po|de|rá;"+
            "Quan|do |o |i|ni|mi|go |con|tra |ti |se |le|van|tar,"+
            "Cris|to |te |de|fen|de|rá." ,

            "To|da |a |ar|ma |pre|pa|ra|da |con|tra |ti"+
            "Te |com|ba|te, |mas |ja|mais |te |ven|ce|rá,"+
            "Pois |Je|sus, |o |teu |a|ma|do |Re|den|tor,"+
            "A |vi|tó|ria |te |da|rá." ,

            "Na |e|ter|na |gló|ria, |não |te |lem|bra|rás"+
            "Das |an|gús|tias |des|te |mun|do |en|ga|na|dor,"+
            "Pois |a|li |e|ter|na|men|te |es|ta|rás"+
            "Com |Je|sus, |o |Ven|ce|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "280": { 
        nome: "De Deus a armadura",
        compasso: "6/8",
        velMin: 116,
        velMed: 130,
        velMax: 144,
        inicio: 6,
        velMinMeiaHora: 72,
        velMedMeiaHora: 75,
        velMaxMeiaHora: 78,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Lu|tar |de|ve|mos |to|dos, |com |fé |e |com |va|lor,"+
            "Ves|ti|dos |de |jus|ti|ça, |com |ar|mas |do |Se|nhor;"+
            "Cin|gi|dos |da |ver|da|de, |po|de|mos |pe|le|jar;"+
            "Cal|ça|dos |no |E|van|ge|lho, |i|re|mos |tri|un|far." ,

            "De |Deus |a |ar|ma|du|ra |de|ve|mos |to|mar"+
            "Pa|ra, |na |pe|le|ja, |po|der|mos |tri|un|far." ,

            "Da |fé |o |es|cu|do |te|mos, |po|de|mos |ba|ta|lhar;"+
            "A|van|te! |Va|lo|ro|sos |e |sem |de|sa|ni|mar;"+
            "Com|ba|te|re|mos |fir|mes |com |ce|les|ti|al |va|lor,"+
            "E |tu|do |ven|ce|re|mos |em |no|me |do |Se|nhor." ,

            "Pro|e|zas |nós |fa|re|mos |por |Cris|to, |o |Re|den|tor,"+
            "Vi|tó|ria |can|ta|re|mos |em |no|me |do |Se|nhor;"+
            "Mos|tre|mos |as |vir|tu|des |do |nos|so |gran|de |Rei;"+
            "Nós |so|mos |Seus |re|mi|dos, |guar|de|mos |Su|a |lei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "281": { 
        nome: "Soldados valorosos nós somos",
        compasso: "4/4",
        velMin: 88,
        velMed: 94,
        velMax: 100,
        inicio: 4,
        velMinMeiaHora: 50,
        velMedMeiaHora: 52,
        velMaxMeiaHora: 54,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Rei |dos |reis |nos |fez |sol|da|dos |ce|les|ti|ais,"+
            "Nos |re|ves|tiu |de |fé |e |ar|mas |di|vi|nais;"+
            "A |guer|ra |se |le|van|ta |com |ím|pe|to |e |fu|ror,"+
            "Mas |nós |re|sis|ti|re|mos,"+
            "Pois |à |fren|te |es|tá |o |Se|nhor." ,

            "Sol|da|dos |va|lo|ro|sos"+
            "Nós |so|mos |de |Cris|to, |o |Rei;"+
            "Sol|da|dos |da |ver|da|de,"+
            "Que |a|mam |a |Su|a |lei;"+
            "Vi|tó|ria |al|can|ça|re|mos"+
            "Em |no|me |do |Re|den|tor,"+
            "Com |va|lor, |com |fer|vor,"+
            "Com |a |fé |em |Deus,"+
            "E|ter|no |Do|mi|na|dor." ,

            "Co|nos|co |es|tá |Je|sus, |não |há |por|que |te|mer,"+
            "Pois, |quan|do |o |mal |vi|er, |Deus |nos |fa|rá |ven|cer."+
            "Te|nha|mos |le|al|da|de |a |Cris|to, |o |Sal|va|dor;"+
            "É |d'E|le |es|ta |guer|ra; |a|ten|da|mos |ao |Se|nhor." ,

            "Quem |fra|co |es|ti|ver |não |de|ve |a|trás |vol|tar,"+
            "Pois |Deus |da|rá |po|der |a |fim |de |ba|ta|lhar;"+
            "Nin|guém |se |es|pa|ven|te"+
            " Nem |ven|ha |a |es|mo|re|cer;"+
            "Te|nha|mos |fé |em |Cris|to,"+
            "Que |vi|rá |nos |so|cor|rer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "282": { 
        nome: "Constantemente oremos a Deus",
        compasso: "6/4",
        velMin: 92,
        velMed: 109,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 60,
        velMedMeiaHora: 62,
        velMaxMeiaHora: 65,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cons|tan|te|men|te |o|re|mos |a |Deus,"+
            "Ao |Pai |ce|les|te |de|ve|mos |cla|mar;"+
            "E|le |tra|ba|lha |por |to|dos |os |Seus"+
            "E |os |fa|rá, |so|bre |o |mal, |tri|un|far." ,

            "O|re|mos |com |fer|vor |e |sem |de|sa|ni|mar,"+
            "Nos|so |cla|mor |che|ga|rá |lá |nos |céus;"+
            "Deus |nos |a|ten|de|rá |e |nos |a|ju|da|rá;"+
            "E|le |é |a |Es|pe|ran|ça |de |to|dos |os |Seus." ,

            "Com |pa|ci|ên|cia, |es|pe|ran|ça |e |fé,"+
            "Fir|mes |se|ja|mos |em |Cris|to, |o |Se|nhor,"+
            "Pois |Su|a |vol|ta |já |pró|xi|ma |é;"+
            "Ter|mi|na|rá |a |tris|te|za |e |a |dor." ,

            "Cris|to |é |o |ca|mi|nho |que |le|va |aos |céus,"+
            "Sem|pre |a |E|le |de|ve|mos |se|guir;"+
            "Quem |for |fi|el |aos |pre|cei|tos |de |Deus,"+
            "Vi|da |e|ter|na |i|rá |pos|suir." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "283": { 
        nome: "Quero ó Senhor ir Contigo ao céu",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 3.5,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Te|nho |em |meu |co|ra|ção, |re|al |cer|te|za"+
            "De |que, |no |céu |com |Cris|to |ha|bi|ta|rei,"+
            "Pois |mi|nha |sor|te |e |e|ter|nal |ri|que|za,"+
            "Es|tá |no |céu, |on|de |a |des|fru|ta|rei." ,

            "Que|ro, |ó |Se|nhor, |ir |Con|ti|go |ao |céu"+
            "E |con|tem|plar |Teu |es|plen|dor;"+
            "Sei |que |me |da|rás |na |e|ter|nal |Si|ão,"+
            "Gran|de |e |a|vul|ta|do |ga|lar|dão." ,

            "Bom |tes|te|mu|nho |le|va|rei |com|i|go,"+
            "Se |nes|te |mun|do |eu |ma|ni|fes|tar"+
            "Que |Je|sus |Cris|to |é |ver|da|dei|ro |A|mi|go,"+
            "Por |Quem |a |paz |eu |pu|de |en|con|trar." ,

            "Vi|ven|do |sem|pre |em |do|ce |es|pe|ran|ça,"+
            "Em |Cris|to |sin|to |di|vi|nal |pra|zer;"+
            "Re|ce|be|rei |no |céu |a |mi|nha |he|ran|ça"+
            "Que |Deus |i|rá, |na |gló|ria, |con|ce|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "284": { 
        nome: "Louvor nos céus altíssimos",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Lou|vor |nos |céus |al|tís|si|mos,"+
            "Ho|sa|na |ao |Rei |Vi|ven|te,"+
            "Ao |For|te, |O|ni|po|ten|te,"+
            "Ben|di|to |Re|den|tor."+
            "Gló|ria, |gló|ria |ao |Ver|bo |san|to,"+
            "Ao |Au|tor |da |fé |po|ten|te;"+
            "Tem |vi|da |e|ter|na |o |cren|te"+
            "Em |Je|sus, |o |Sal|va|dor." ,

            "O |Jus|to |e |Po|ten|tís|si|mo,"+
            "Do |céu |nos |foi |man|da|do;"+
            "Em |for|ma |de |um |ser|vo,"+
            "Ao |Pai |o|be|de|ceu;"+
            "Hu|mi|lhou|-Se |a|té |a |mor|te,"+
            "Foi |por |Deus |res|sus|ci|ta|do."+
            "Je|sus, |por |nós |a|ma|do,"+
            "Vi|da |e |paz |nos |con|ce|deu." ,

            "A|qui |no |mun|do |de |la|bor,"+
            "Je|sus |é |nos|sa |Gló|ria,"+
            "É |fir|me |For|ta|le|za,"+
            "É |nos|so |Sal|va|dor;"+
            "Só |por |E|le |nós |ven|ce|mos,"+
            "E|le |al|can|çou |vi|tó|ria;"+
            "Can|te|mos |sem|pre |gló|ria"+
            "Ao |di|vi|no, |Re|mi|dor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "285": { 
        nome: "Glória e louvor a Jesus darei",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gló|ria |e |lou|vor |a |Je|sus |da|rei,"+
            "Su|a |co|mu|nhão |em |mim |es|tá;"+
            "Dá|di|vas |do |céu |eu |al|can|ça|rei;"+
            "A |vi|tó|ria |E|le |me |da|rá." ,

            "Li|vre |já |sou |pa|ra |e|xal|tar"+
            "O |meu |Se|nhor;"+
            "Gló|ria, |gló|ria |a |Je|sus,"+
            "O |meu |Li|ber|ta|dor." ,

            "Gló|ria |e |lou|vor |a |mi|nha |al|ma |dá"+
            "A |Je|sus |que |já |me |res|ga|tou;"+
            "Na|da, |do |Se|nhor, |me |se|pa|ra|rá,"+
            "Pois |eu |si|go |a |Quem |me |li|ber|tou." ,

            "Gló|ria |e |lou|vor, |gló|ria |sem |ces|sar,"+
            "A |Je|sus, |que |a |to|do |o |mal |ven|ceu;"+
            "Gló|ria |ao |Re|den|tor |sem|pre |de|vo |dar,"+
            "Pe|lo |bem |que |já |me |con|ce|deu." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "286": { 
        nome: "Nome precioso para mim",
        compasso: "4/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Um |No|me |pre|ci|o|so |pa|ra |mim,"+
            "O |No|me |que |a|ma|rei |a|té |o |fim,"+
            "Com |sin|ce|ro |a|mor, |com |sin|ce|ro |ar|dor,"+
            "É |o |No|me |de |Je|sus, |o |Mes|tre." ,

            "No|me |pre|ci|o|so |pa|ra |mim"+
            "É |o |de |Je|sus, |mi|nha |Vi|da |e |Luz;"+
            "Por |fé |eu |que|ro |a|má|-Lo |a|té |o |fim;"+
            "Je|sus |o |Re|den|tor, |ha|bi|ta |em |mim!" ,

            "Ao |men|ci|o|nar |o |No|me |do |Se|nhor,"+
            "Meu |co|ra|ção |ju|bi|la |de |a|mor;"+
            "Oh! |Que |co|mu|nhão! |Que |con|so|la|ção!"+
            "Eu |sin|to |gran|de |re|go|zi|jo!" ,

            "Per|dão |eu |al|can|cei |do |Cri|a|dor,"+
            "Por |Cris|to, |meu |a|ma|do |Re|mi|dor,"+
            "Que |na |cruz |mor|reu, |Su|a |vi|da |deu;"+
            "Pa|gou |a |Deus |os |meus |pe|ca|dos." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "287": { 
        nome: "Irmãos amados sempre avante",
        compasso: "9/8",
        velMin: 120,
        velMed: 132,
        velMax: 144,
        inicio: 7,
        velMinMeiaHora: 74,
        velMedMeiaHora: 76,
        velMaxMeiaHora: 78,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ir|mãos |a|ma|dos, |sem|pre |a|van|te"+
            "Com |Je|sus |Cris|to, |nos|so |Se|nhor;"+
            "E|le |em |tu|do |foi |tri|un|fan|te;"+
            "Nós |ven|ce|re|mos |por |Seu |va|lor." ,

            "Sem|pre |a|van|te! |Cris|to |é |o |Va|len|te"+
            "Que |por |Seu |po|vo |pe|le|ja|rá;"+
            "Cris|to, |o |For|te, |o |O|ni|po|ten|te,"+
            "À |gló|ria |e|ter|na |nos |le|va|rá." ,

            "Sem|pre |se|ja|mos |per|se|ve|ran|tes,"+
            "Pois |cer|ta|men|te |va|mos |ven|cer;"+
            "Por |Je|sus |Cris|to, |na |fé |cons|tan|tes,"+
            "Nós |po|de|re|mos |pre|va|le|cer." ,

            "For|tes |se|ja|mos, |não |re|cu|e|mos,"+
            "Mas |pros|si|ga|mos |com |fé |em |Deus;"+
            "Ao |i|ni|mi|go |re|sis|ti|re|mos"+
            "A|té |che|gar|mos |ao |lar |dos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "288": { 
        nome: "Ó irmãos com Cristo avante",
        compasso: "6/4",
        velMin: 108,
        velMed: 114,
        velMax: 120,
        inicio: 4,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |ir|mãos, |com |Cris|to |a|van|te,"+
            "To|do |o |mal |i|re|mos |ven|cer;"+
            "Com |a |Su|a |mão |po|de|ro|sa,"+
            "Não |nos |dei|xará |pe|re|cer;"+
            "Quan|do |lu|tas |nós |en|fren|tar|mos,"+
            "O |Se|nhor |pe|le|ja|rá;"+
            "O |Seu |No|me |in|vo|ca|re|mos;"+
            "Seu |so|cor|ro |nos |man|da|rá." ,

            "Quan|do |fra|cos |nós |es|ti|ver|mos"+
            "E |sem |for|ças |pa|ra |lu|tar,"+
            "Pe|la |fé |nós |pros|se|gui|re|mos,"+
            "Pois |Je|sus |vi|rá |a|ju|dar;"+
            "Cris|to |é |a |nos|sa |gran|de |Es|pe|ran|ça,"+
            "É |a |nos|sa |Sal|va|ção;"+
            "N'E|le |en|con|tra|re|mos |as |for|ças"+
            "Pa|ra |es|tar|mos |em |re|ti|dão." ,

            "Mui|tas |pro|vas |nes|ta |jor|na|da"+
            "Nós |te|re|mos |que |en|fren|tar,"+
            "Mas |Je|sus, |o |Mes|tre |a|ma|do,"+
            "Nos |fa|rá |ao |fim |tri|un|far."+
            "Sen|do |nos|sa |vi|da |gui|a|da"+
            "Pe|lo |sá|bio |Con|du|tor,"+
            "Cer|ta|men|te |nós |che|ga|re|mos"+
            "Ao |e|ter|no |lar |de |es|plen|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "289": { 
        nome: "Avante sempre avante",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|van|te, |sem|pre |a|van|te, |va|mos |to|dos |a|nun|ci|ar"+
            "O |san|to |E|van|ge|lho |e |n'E|le |ca|mi|nhar." ,

            "A |vi|tó|ria |Cris|to |nos |da|rá,"+
            "Su|a |gló|ria |nos |con|ce|de|rá;"+
            "Pe|la |fé |se|gui|mos |nos|so |Re|den|tor;"+
            "A |vi|tó|ria |nos |da|rá |por |Seu |a|mor." ,

            "A|van|te, |ne|gue|mos |nos|so |a|ma|do |Sal|va|dor;"+
            "Com |E|le |ven|ce|re|mos, |lu|te|mos |com |fer|vor." ,

            "A|van|te, |con|fi|an|tes, |sem |ja|mais |re|tro|ce|der,"+
            "A |bem-|a|ven|tu|ran|ça |i|re|mos |re|ce|ber." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "290": { 
        nome: "Sempre avante!",
        compasso: "4/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com |Je|sus, |ir|mãos, |sim, |mar|che|mos,"+
            "Nin|guém |po|de|rá |nos |a|ba|ter;"+
            "For|ça |ce|les|ti|al |pro|va|re|mos"+
            "E |i|re|mos |to|do |o |mal |ven|cer." ,

            "Sem|pre |a|van|te, |com |o |Va|lo|ro|so!"+
            "To|dos |jun|tos |nos |con|vém |mar|char;"+
            "So|mos |po|vo |do |Deus |po|de|ro|so,"+
            "O |i|ni|mi|go |não |nos |faz |pa|rar." ,

            "Com |Je|sus, |ir|mãos, |pros|si|ga|mos,"+
            "Pois |Deus |nos |da|rá |for|ça |e |vi|gor;"+
            "Ao |mal, |pe|la |fé, |re|sis|ta|mos."+
            "Sem|pre |a|van|te, |em |no|me |do |Se|nhor!" ,

            "Com |Je|sus, |ir|mãos, |en|tra|re|mos"+
            "To|dos |os |fi|éis |no |lar |de |a|mor;"+
            "Re|go|zi|jo |e |paz |sen|ti|re|mos"+
            "E |da|re|mos |gló|ria |ao |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "291": { 
        nome: "Irmãos avante avante!",
        compasso: "4/4",
        velMin: 76,
        velMed: 84,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 50,
        velMedMeiaHora: 52,
        velMaxMeiaHora: 54,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ir|mãos, |a|van|te, |a|van|te! |com |nos|so |Sal|va|dor,"+
            "Se|re|mos |tri|un|fan|tes, |lu|tan|do |com |fer|vor;"+
            "Vi|tó|ria |al|can|ça|re|mos, |se|guin|do |a |Je|sus,"+
            "Que |vai |à |nos|sa |fren|te |e |à |gló|ria |nos |con|duz." ,

            "A|van|te, |a|van|te!"+
            "U|ni|dos |ao |Se|nhor;"+
            "Só |E|le |é |nos|so |Con|du|tor;"+
            "A|van|te! |Mar|che|mos |com |va|lor." ,

            "Lu|ga|res |de|lei|to|sos |Je|sus |nos |pre|pa|rou,"+
            "De |ju|gos |mui |pe|no|sos |tam|bém |nos |li|ber|tou;"+
            "A |he|ran|ça |pro|me|ti|da |por |Cris|to, |o |Sal|va|dor,"+
            "No |céu |é |re|ser|va|da |por |Deus, |o |For|ma|dor." ,

            "Com |nos|so |a|ma|do |Mes|tre, |mar|che|mos |com |fer|vor!"+
            "Com |fé, |per|se|ve|ran|tes, |lu|te|mos |com |vi|gor."+
            "Gui|a|dos |nós |se|re|mos |com |for|ça |di|vi|nal;"+
            "A|van|te! |Pros|si|ga|mos |ao |lar |ce|les|ti|al." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "292": { 
        nome: "Oh! Quanto é bom o Redentor!",
        compasso: "4/4",
        velMin: 63,
        velMed: 75,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |bom |Deus, |Cri|a|dor, |a |Seu |Fi|lho |en|vi|ou,"+
            "A |fim |de |nos |dar |a |e|ter|na |re|den|ção;"+
            "Pe|los |nos|sos |pe|ca|dos |Je|sus |su|por|tou"+
            "Mor|te |de |cruz, |que |nos |trou|xe |a |sal|va|ção." ,

            "Oh! |Quan|to |é |bom |o |nos|so |Re|den|tor!"+
            "So|bre |a |cruz, |por |nós |a |vi|da |deu"+
            "E |la|vou|-nos |pe|lo |seu |a|mor;"+
            "Jus|ti|fi|cou|-nos |no |san|gue |que |ver|teu." ,

            "O |pe|ca|do, |em |to|dos, |a |mor|te |ge|rou;"+
            "Nin|guém |des|se |mal |se |po|di|a |li|ber|tar;"+
            "So|bre |a |mor|te, |o |Fi|lho |de |Deus |tri|un|fou"+
            "E |res|sur|giu |pa|ra |nos |jus|ti|fi|car." ,

            "Cris|to |tri|un|fal|men|te |su|biu |pa|ra |os |céus,"+
            "E |as|sim |vol|ta|rá, |So|be|ra|no |e |Se|nhor."+
            "Le|va|rá |pa|ra |a |gló|ria |os |fi|lhos |de |Deus"+
            "E |lhes |da|rá |o |Seu |rei|no |de |es|plen|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "293": { 
        nome: "Tu és Oleiro",
        compasso: "9/4",
        velMin: 92,
        velMed: 109,
        velMax: 126,
        inicio: 7,
        velMinMeiaHora: 66,
        velMedMeiaHora: 69,
        velMaxMeiaHora: 72,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Tu |és |o |O|lei|ro, |ó |meu |Se|nhor,"+
            "Eu |sou |ar|gi|la |na |Tu|a |mão;"+
            "Va|so |de |hon|ra |e |de |lou|vor"+
            "Faz|-me, |Se|nhor, |com |Tu|a |un|ção." ,

            "Vem |mo|de|lar|-me, |ó |For|ma|dor,"+
            "Pe|la |Pa|la|vra |do |Teu |po|der;"+
            "Hu|mil|de e |man|so |faz|-me, |Se|nhor,"+
            "Cum|pre |em |mim |Teu |san|to |que|rer." ,

            "Em |Teus |pre|cei|tos |que|ro |vi|ver,"+
            "Pa|ra |ser|vir|-Te |e |Te a|gra|dar;"+
            "Pe|la |Pa|la|vra |vem |re|mo|ver"+
            "O |que |me im|pe|de |de |Te |lou|var." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "294": { 
        nome: "Avante! Coragem! Marchemos",
        compasso: "6/4",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|van|te! |Co|ra|gem! |Mar|che|mos"+
            "Com |fé |e |com |to|do |o |fer|vor,"+
            "Sol|da|dos |nós |so|mos |de |Cris|to,"+
            "O |nos|so |Se|nhor;"+
            "A|van|te! |Ve|re|mos |a |gló|ria |de |Cris|to,"+
            "Fi|el |Re|den|tor,"+
            "Te|re|mos |com|ple|ta |vi|tó|ria |com |o |Sal|va|dor." ,

            "Co|ra|gem, |ir|mãos, |sem|pre |a|van|te!"+
            "De|ve|mos |lu|tar |pe|la |fé;"+
            "Nos|so |â|ni|mo |se|ja |cons|tan|te,"+
            "Deus |tu|do |pro|vê." ,

            "A|van|te! |Lu|tar |nós |de|ve|mos,"+
            "Cin|gi|dos |de |for|ça |e |vi|gor,"+
            "Am|pa|ro |de |Deus |nós |te|re|mos,"+
            "Por |Seu |gran|de |a|mor;"+
            "Vol|un|ta|ria|men|te |ser|va|mos |a |Cris|to,"+
            "O |Rei |ven|ce|dor;"+
            "Nós |so|mos, |por |fé,"+
            "Seus |sol|da|dos, |mos|tre|mos |va|lor." ,

            "A|van|te! |Lu|te|mos |u|ni|dos,"+
            "Mar|chan|do |com |to|do |o |fer|vor,"+
            "Cin|gi|dos |de |to|da |ar|ma|du|ra"+
            "De |Deus, |Cri|a|dor."+
            "Se|guin|do |os |pas|sos |de |Cris|to,"+
            "Vi|tó|ria |se |al|can|ça|rá;"+
            "É |E|le |ve|raz |For|ta|le|za, |que |nos |sal|va|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "295": { 
        nome: "Fui Senhor por Ti remido",
        compasso: "3/4",
        velMin: 54,
        velMed: 61,
        velMax: 69,
        inicio: 3,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Fui, |Se|nhor, |por |Ti |re|mi|do |"+
            "Pa|ra an|dar |em |san|to a|mor; |\n"+
            "Nes|te |mun|do, a |Ti |u|ni|do, |"+
            "Eu |se|rei |um |ven|ce|dor.|\n\n" ,

            "Teu |a|mor |já |me |con|so|la |"+
            "Pa|ra |sem|pre o|be|de|cer |\n"+
            "À |Pa|la|vra, |que |con|tro|la |"+
            "To|do |es|te |fra|co |ser.|\n\n" ,

            "Se|ja |eu |for|ti|fi|ca|do |"+
            "Com |o |Teu |po|der, |Se|nhor, |\n"+
            "Pa|ra |ser |san|ti|fi|ca|do |"+
            "Pe|lo Es|pí|ri|to |de a|mor.|\n\n" ,

            "Sou |Teu |ser|vo |mui|to a|ma|do, |"+
            "Co-|her|dei|ro |Teu, |Se|nhor; |\n"+
            "E, |no |rei|no |de|se|ja|do, |"+
            "Eu |ve|rei |o |Cri|a|dor.|\n\n" ,
        ],
        temposVersos: [
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12

        ],
        notas: [
            'B4','F#4','A4','G4','G4','D4','F#4','E4',
            'A4','B4','C5','E4','F#4','D4','B4',
            'B4','F#4','A4','G4','D5','B4','C5','E4',
            'A4','G4','F#4','D4','B4','A4','G4',

            'B4','F#4','A4','G4','G4','D4','F#4','E4',
            'A4','B4','C5','E4','F#4','D4','B4',
            'B4','F#4','A4','G4','D5','B4','C5','E4',
            'A4','G4','F#4','D4','B4','A4','G4',

            'B4','F#4','A4','G4','G4','D4','F#4','E4',
            'A4','B4','C5','E4','F#4','D4','B4',
            'B4','F#4','A4','G4','D5','B4','C5','E4',
            'A4','G4','F#4','D4','B4','A4','G4',

            'B4','F#4','A4','G4','G4','D4','F#4','E4',
            'A4','B4','C5','E4','F#4','D4','B4',
            'B4','F#4','A4','G4','D5','B4','C5','E4',
            'A4','G4','F#4','D4','B4','A4','G4'
        ],
        temposNotas: [
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12,

            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,8,
            3,1,4,4,3,1,4,4,
            3,1,6,2,3,1,12

        ]
    },
    "296": { 
        nome: "Teu Nome é soberano ó Redentor",
        compasso: "3/4!4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 3,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Teu |No|me |é |so|be|ra|no, |ó |ca|ro |Re|den|tor;"+
            "Teu |No|me |é |mui |su|bli|me, |de |gran|de |es|plen|dor;"+
            "Em |es|pí|ri|to |e |ver|da|de |de|ve|mos |a|do|rar|-Te;"+
            "De|ve|mos |tri|bu|tar|-Te |lou|vo|res |ó |Se|nhor." ,

            "Quão |su|a|ve |e |pre|ci|o|so"+
            "É |Teu |No|me, |ó |Sal|va|dor;"+
            "Não |há |ou|tro |No|me |pe|lo |qual |os |ho|mens"+
            "Che|ga|rão |ao |Cri|a|dor." ,

            "Teu |No|me |ben|di|re|mos, |e|ter|no |Sal|va|dor;"+
            "Em |to|dos |os |com|ba|tes |és |nos|so |De|fen|sor;"+
            "Des|te |a |to|dos |os |Teus |san|tos |fé |vi|va |e |es|pe|ran|ça"+
            "De |en|trar |na |Tu|a |gló|ria, |ó |jus|to |Re|den|tor." ,

            "Teu |No|me |res|pei|ta|mos |e |a|ma|mos, |ó |Se|nhor;"+
            "A |paz |com |Deus |nós |te|mos |por |Ti, |ó |Re|den|tor;"+
            "Nos|sas |al|mas |res|ga|tas|te, |a |vi|da |nos |do|as|te,"+
            "Her|dei|ros |nos |fi|zes|te |de |Deus, |o |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "297": { 
        nome: "Senhor conforta meu coração",
        compasso: "6/8",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 6,
        velMinMeiaHora: 62,
        velMedMeiaHora: 65,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor, |con|for|ta |meu |co|ra|ção"+
            "E |vem |li|vrar|-me |da |a|fli|ção;"+
            "A |mi|nha |sú|pli|ca, |ó |Se|nhor,"+
            "Re|ce|be, |por |gran|de |a|mor." ,

            "Vem, |Je|sus, |meu |Con|so|la|dor,"+
            "Nas |an|gús|tias, |tam|bém |na |dor,"+
            "Com |Teu |a|mor |me |con|for|tar;"+
            "Vem, |nas |pro|vas, |me |li|ber|tar." ,

            "Se|nhor, |con|for|ta |meu |co|ra|ção,"+
            "Com |Tu|a |paz |e |con|so|la|ção;"+
            "A|le|gre|men|te |eu |vi|ve|rei;"+
            "Lou|vor |a |Ti |can|ta|rei." ,

            "Se|nhor, |con|for|ta |meu |co|ra|ção,"+
            "Com |Teu |a|mor |e |ce|les|te |un|ção;"+
            "Teu |re|fri|gé|rio |eu |sen|ti|rei,"+
            "Ó |meu |Se|nhor |e |meu |Rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "298": { 
        nome: "Avante sempre sem temer!",
        compasso: "4/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|van|te |sem|pre, |sem |te|mer,"+
            "Ó |sol|da|dos |ver|da|dei|ros!"+
            "Por |Cris|to, |nos|so |En|si|na|dor,"+
            "Fo|mos |fei|tos |bons |guer|rei|ros;"+
            "E|le, |por |nós, |com|ba|te|rá,"+
            "Su|as |ar|mas |po|ten|tes |são,"+
            "Pois |nos |li|vram |sem|pre |do |mal,"+
            "Do |po|der |da |ten|ta|ção." ,

            "A|van|te, |com |o |Sal|va|dor,"+
            "Pois |é |cer|ta |a |vi|tó|ria!"+
            "Mar|che|mos |sem|pre |com |vi|gor,"+
            "Pros|se|guin|do |pa|ra |a |gló|ria;"+
            "A |co|ro|a |re|ce|be|rá, |só |quem |for"+
            "Em |tu|do |fi|el"+
            "A |Je|sus, |o |nos|so |Se|nhor"+
            "E |o |nos|so |E|ma|nu|el." ,

            "A|le|lu|ia! |A|le|lu|ia!"+
            "Ben|di|re|mos |nos|so |Sal|va|dor;"+
            "A|le|lu|ia! |A|le|lu|ia!"+
            "Gló|ria |e|ter|na |ao |Re|den|tor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "299": { 
        nome: "Em nome de Jesus",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Em |no|me |de |Je|sus, |eis|-nos |re|u|ni|dos"+
            "Pa|ra |a|pren|der |Teu |que|rer, |ó |Se|nhor;"+
            "Con|ser|va|-nos, |ó |Deus, |sem|pre |u|ni|dos,"+
            "Pois |de|pen|de|mos |de |Ti, |Cri|a|dor." ,

            "Com |re|ve|rên|cia |e |fé |Te |a|do|ra|mos,"+
            "O|ni|po|ten|te |Deus, |Pai |de |a|mor." ,

            "Dá|-nos, |Se|nhor, |do |Teu |co|nhe|ci|men|to"+
            "Pa|ra |que |as|sim |Te |pos|sa|mos |hon|rar;"+
            "Tu|a |Pa|la|vra |dá |en|ten|di|men|to"+
            "E |em |jus|ti|ça |nos |faz |ca|mi|nhar." ,

            "Ha|bi|ta |em |Ti, |ó |Deus, |sa|be|do|ri|a,"+
            "To|da |ciên|cia, |glo|ri|o|so |Se|nhor;"+
            "Tu|a |e|ter|na |luz |sem|pre |nos |gui|a"+
            "Na |sã |ver|da|de, |a|mor |e |te|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "300": { 
        nome: "Tudo o que os falta",
        compasso: "4/4",
        velMin: 63,
        velMed: 75,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tu|do |o |que |nos |fal|ta, |Cris|to |su|pri|rá;"+
            "Quan|do |su|pli|car|mos, |E|le |ou|vi|rá;"+
            "De |Seus |dons |ce|les|tes |nos |re|ves|ti|rá,"+
            "Quan|do |nós |ba|ter|mos, |E|le |a|bri|rá." ,

            "Gló|ria |ao |ben|di|to |Sal|va|dor,"+
            "For|te |e |in|ven|cí|vel |De|fen|sor!"+
            "Ár|dua |é |a |lu|ta |con|tra |o |pe|ca|do,"+
            "Mas |re|sis|ti|re|mos |com |va|lor." ,

            "Tu|do |o |que |nos |fal|ta, |Cris|to |su|pri|rá;"+
            "Pro|te|ção |di|vi|na, |E|le |pro|ve|rá;"+
            "Te|mos |que |en|tre|gar|-Lhe |to|do |o |nos|so |ser,"+
            "Pa|ra |que |pos|sa|mos |com |va|lor |ven|cer." ,

            "Tu|do |o |que |nos |fal|ta, |Cris|to |su|pri|rá;"+
            "Fir|me |e |fi|el|men|te, |nos |con|du|zi|rá"+
            "Nes|ta |tra|ves|si|a |que |nos |le|va |aos |céus,"+
            "On|de |i|re|mos |ver |a |fa|ce |do |bom |Deus."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "301": { 
        nome: "Nossa esperança é Jesus",
        compasso: "4/4",
        velMin: 66,
        velMed: 77,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nos|sa |Es|pe|ran|ça |é |Je|sus;"+
            "E|le, |nes|ta |gra|ça, |nos |con|duz"+
            "Bem |a|le|gres |pe|la |co|mu|nhão"+
            "Que |nos |traz |con|so|la|ção." ,

            "Só |a |Je|sus |Cris|to |se|gui|re|mos,"+
            "E|le |é |o |nos|so |bom |Pas|tor;"+
            "E, |ao |fim, |com |E|le |rei|na|re|mos"+
            "Na |ci|da|de |de |es|plen|dor." ,

            "Cris|to, |o |Rei |dos |reis |e |Sal|va|dor,"+
            "Faz|-nos |ca|mi|nhar |em |Seu |a|mor;"+
            "Do |pe|ca|do |ve|io |nos |re|mir,"+
            "Pa|ra |um |fe|liz |por|vir." ,

            "Nes|te |mun|do |chei|o |de |i|lu|são"+
            "Só |em |Cris|to |e|xis|te |sal|va|ção;"+
            "E|le |nos |con|ce|de |gra|ça |e |luz"+
            "E |à |gló|ria |nos |con|duz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "302": { 
        nome: "Que gloriosa Esperança é Jesus!",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Que |glo|ri|o|sa |Es|pe|ran|ça |é |Je|sus, |o |Sal|va|dor,"+
            "Nos|sa |Bem-|a|ven|tu|ran|ça, |nos|so |a|ma|do |Re|mi|dor!"+
            "Nos|sa |Luz |e |A|le|gri|a, |po|de|ro|so |De|fen|sor,"+
            "Nos|so |Es|cu|do, |nos|so |Gui|a |é |Je|sus, |o |Re|den|tor." ,

            "És, |Je|sus, |a |Es|pe|ran|ça"+
            "É |o |Jus|to |e |Fi|el,"+
            "É |a |nos|sa |Con|fi|an|ça,"+
            "Po|de|ro|so |E|ma|nu|el." ,

            "Nos|sa |Vi|da |e |Ri|que|za, |nos|so |A|poi|o |é |o |Se|nhor,"+
            "É |o |Pão |de |vi|da |e|ter|na, |que |sus|ten|ta |e |dá |vi|gor;"+
            "Gló|ria, |gló|ria |nas |al|tu|ras, |gló|ria, |gló|ria |ao |Re|den|tor,"+
            "Que |nos |dá |paz |sem|pi|ter|na |e |o |Seu |su|bli|me |a|mor!" ,

            "A |Je|sus, |o |Ver|da|dei|ro, |In|ven|cí|vel, |gran|de |Rei,"+
            "O |meu |co|ra|ção |en|tre|go, |só |a |E|le |ser|vi|rei;"+
            "Cer|to |es|tou |de |que |a |vi|tó|ria |al|me|ja|da |al|can|ça|rei;"+
            "E, |na |gló|ria, |jun|to |a |E|le, |pa|ra |sem|pre |rei|na|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "303": { 
        nome: "O Senhor não mudará",
        compasso: "3/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Não |mu|da|rá |o |nos|so |Deus,"+
            "Não |fa|lha|rá |o |Seu |po|der;"+
            "Cum|pri|-se-ão |os |pla|nos |Seus;"+
            "Em |Deus |há |luz |e |sa|ber." ,

            "O |Se|nhor |não |mu|da|rá;"+
            "Seus |in|ten|tos |cum|pri|rá;"+
            "Fir|mes |per|ma|ne|ce|rão,"+
            "Pois |há |em |Deus |per|fei|ção." ,

            "Se |for|mos |nós |fi|éis |a |Deus,"+
            "Tam|bém |fi|el |se |mos|tra|rá;"+
            "Tri|un|fa|rão |os |fi|lhos |Seus,"+
            "Deus |Pai |ja|mais |fa|lha|rá." ,

            "Em |bre|ve |i|rão |pas|sar |os |céus,"+
            "Tam|bém |a |ter|ra |pas|sa|rá;"+
            "Mas |é |e|ter|no |o |nos|so |Deus"+
            "E |vi|da |e|ter|na |nos |dá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "304": { 
        nome: "Cristo é a Esperança",
        compasso: "3/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tu|do |é |vai|da|de |nes|te |mun|do |de |i|lu|são;"+
            "Gló|ri|as |ter|re|nas |bre|ve |fin|da|rão."+
            "É |um |va|por |a |vi|da, |que |se |des|va|ne|ce|rá;"+
            "A |Es|pe|ran|ça |é |Cris|to; |n'E|le |a |gra|ça |es|tá." ,

            "Cris|to |é |a |Es|pe|ran|ça,"+
            "É |do |mun|do |o |Re|den|tor;"+
            "N'E|le |há |con|fi|an|ça,"+
            "Vi|da, |paz |e |a|mor." ,

            "So|bre |a |ter|ra |há |tris|te|za, |in|quie|ta|ção,"+
            "Do|res, |en|fa|do |e |per|tur|ba|ção;"+
            "Não |há |paz |no |mun|do, |nes|te |mun|do |en|ga|na|dor;"+
            "A |Es|pe|ran|ça |é |Cris|to, |nos|so |Ben|fei|tor." ,

            "De |Deus |a |i|ra |so|bre |a |ter|ra |des|ce|rá"+
            "E, |nes|se |di|a, |tu|do |fin|da|rá;"+
            "Na|da, |des|te |mun|do, |po|de |dar |a |sal|va|ção;"+
            "A |Es|pe|ran|ça |é |Cris|to, |nos|sa |Re|den|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "305": { 
        nome: "Oh! Que fundamento",
        compasso: "4/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 4,
        velMinMeiaHora: 60,
        velMedMeiaHora: 62,
        velMaxMeiaHora: 64,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Que |fun|da|men|to |em |Je|sus |Cris|to |te|mos;"+
            "É |E|le |a |Es|pe|ran|ça |do |e|ter|no |por|vir;"+
            "As |Su|as |pro|mes|sas |e|ter|nas |al|can|ça|mos;"+
            "Em |Seu |a|mor, |u|ni|dos, |a |Deus |va|mos |ser|vir,"+
            "Em |Seu |a|mor, |u|ni|dos, |O |va|mos |ser|vir." ,

            "Se, |pe|re|gri|nan|do, |com|ba|tes |nós |ti|ver|mos,"+
            "A |mão |do |Se|nhor, |por |gra|ça, |nos |li|vra|rá;"+
            "E |con|tra |a |for|ça |do |mal |nós |lu|ta|re|mos;"+
            "Ser|vin|do |a |Deus |com |ze|lo, |a|ju|da |nos |da|rá,"+
            "Ser|vin|do |a |Deus |com |ze|lo, |a|ju|da |da|rá." ,

            "Ó |Ro|cha |e|ter|na |e |e|ter|na |For|ta|le|za,"+
            "Por |fé |nós |vi|ve|mos |no |Teu |gran|de |a|mor;"+
            "Fi|zes|te|-nos |dig|nos |da |ce|les|ti|al |ri|que|za,"+
            "Pois |to|do |o |nos|so |bem |vem |de |Ti, |ó |Re|den|tor,"+
            "Pois |to|do |o |nos|so |bem |vem |de |Ti, |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "306": { 
        nome: "Bendizei ao Altíssimo Deus",
        compasso: "6/4",
        velMin: 92,
        velMed: 104,
        velMax: 116,
        inicio: 6,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Na |al|ma |do |jus|to |há |voz |de |lou|vor"+
            "A |Deus |e |a |Cris|to, |fi|el |Re|mi|dor;"+
            "Há |voz |de |a|le|gri|a, |há |e|xal|ta|ção;"+
            "Seu |cá|lix |trans|bor|da |de |con|so|la|ção." ,

            "Ben|di|zei, |ben|di|zei |ao |Al|tís|si|mo |Deus,"+
            "Deus |de |a|mor, |Deus |de |paz,"+
            "Que |man|dou |lá |dos |céus"+
            "O |san|to |Cor|dei|ro, |fi|el |Re|den|tor,"+
            "A |nos|sa |Jus|ti|ça, |Je|sus, |o |Se|nhor." ,

            "A |Deus |to|da |a |hon|ra |e |gló|ria |e|ter|nal,"+
            "Pois |é |pi|e|do|so |o |Pai |ce|les|ti|al;"+
            "Por |seu |Fi|lho |a|ma|do, |Deus |re|con|ci|li|ou"+
            "Os |ho|mens |Con|si|go |e |os |res|ga|tou." ,

            "Por |bo|a |von|ta|de |de |Deus, |Cri|a|dor,"+
            "Do |no|vo |Con|cer|to |é |Je|sus |Me|di|a|dor;"+
            "Pre|ci|o|sas |pro|mes|sas |i|rão |se |cum|prir"+
            "Na |vol|ta |de |Cris|to, |em |bre|ve |por|vir." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "307": { 
        nome: "Cristo nos dará da Sua plenitude",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |ir|mãos, |a|pre|sen|te|mo|-nos |ao |nos|so |Re|den|tor,"+
            "Pron|tos |pa|ra |O |a|ten|der;"+
            "Ao |que |E|le |nos |dis|ser, |o|be|de|ça|mos |com |a|mor,"+
            "Sem |ja|mais |es|mo|re|cer." ,

            "Cris|to |nos |da|rá |da |Su|a |ple|ni|tu|de,"+
            "Com |a |fé |nos |cin|gi|rá |e |em |nós |der|ra|ma|rá"+
            "Do |Es|pí|ri|to, |o |po|der |e |a |vir|tu|de;"+
            "Va|lo|ro|sos |nos |fa|rá." ,

            "Ó |a|ma|dos, |a|cei|te|mos |do |Se|nhor |a |cor|re|ção,"+
            "Pois |cor|ri|ge |a |quem |quer |bem;"+
            "Os |Seus |san|tos |man|da|men|tos |le|ves |pa|ra |nós |se|rão,"+
            "Seus |con|se|lhos |nos |con|vêm." ,

            "Pe|lo |Es|pí|ri|to |da |gra|ça |po|de|re|mos |com|pre|en|der"+
            "To|da |a |o|bra |de |a|mor;"+
            "Sa|be|re|mos, |ó |e|lei|tos, |co|mo |a |nos|so |Deus |te|mer;"+
            "Oh! |Ser|va|mos |ao |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "308": { 
        nome: "Soa a trombeta",
        compasso: "6/8",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 65,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ou|ve|-se |em |to|da |a |par|te |a|nun|ci|ar"+
            "Já |é |che|ga|do |o |rei|no |de |a|mor;"+
            "Cris|to |é |po|ten|te |pa|ra |sal|var"+
            "E |dar |a |vi|da |ao |pe|ca|dor." ,

            "So|a |a |trom|be|ta, |oh! |es|cu|tai,"+
            "O |E|van|ge|lho |do |Sal|va|dor;"+
            "Vos|sos |ou|vi|dos, |oh! |in|cli|nai"+
            "Às |sãs |pa|la|vras |do |Cri|a|dor." ,

            "Os |men|sa|gei|ros |do |Re|den|tor"+
            "As |bo|as |no|vas |fa|zem |ou|vir;"+
            "No|vas |de |paz, |de |vi|da |e |de |a|mor,"+
            "De |um |fe|liz |e |e|ter|no |por|vir." ,

            "Nes|ta |men|sa|gem |vin|da |de |Deus,"+
            "É |ma|ni|fes|to |ao |pe|ca|dor,"+
            "Que, |pa|ra |to|dos, |há |sal|va|ção;"+
            "Vin|de |a|cei|tá|-la |do |Sal|va|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "309": { 
        nome: "Galardão nos espera",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bem-|a|ven|tu|ra|do |quem |a|qui |cho|rar,"+
            "Pois, |de |Deus, |con|for|to |cer|to |al|can|ça|rá;"+
            "Quem |a|qui |for |man|so |e |per|se|ve|rar,"+
            "No |e|ter|no |lar |de |Deus |ha|bi|ta|rá." ,

            "Ga|lar|dão, |ga|lar|dão |nos |es|pe|ra |lá |nos |céus,"+
            "Ga|lar|dão, |ga|lar|dão, |jun|to |ao |nos|so |Deus;"+
            "Gló|ria |in|des|cri|tí|vel |na |e|ter|ni|da|de"+
            "É |o |ga|lar|dão |de |Cris|to |aos |san|tos |Seus." ,

            "Bem-|a|ven|tu|ra|do |quem |se|den|to |es|tá"+
            "E |tem |fo|me |da |jus|ti|ça |que |é |dos |céus;"+
            "Far|to |e |con|so|la|dos |pe|lo |Pai |se|rá;"+
            "Quem |for |lim|po |e |pu|ro |vi|ve|rá |com |Deus." ,

            "Bem-|a|ven|tu|ra|do |quem |se|guir |Je|sus,"+
            "Sen|do |a|qui |na |ter|ra |pa|ci|fi|ca|dor;"+
            "Quem |for |des|pre|za|do |por |an|dar |na |Luz,"+
            "A|le|grar|-se-á |na |vin|da |do |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "310": { 
        nome: "Nós Te louvamos ó Rei dos reis",
        compasso: "2/4",
        velMin: 58,
        velMed: 65,
        velMax: 72,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nós |Te |lou|va|mos, |ó |Rei |dos |reis,"+
            "Pois |nos |tens |fei|to |san|tos |e |fi|éis"+
            "Pa|ra |an|dar|mos |em |Teu |te|mor,"+
            "Co|mo |o|ve|lhas |Tu|as, |ó |Se|nhor." ,

            "Nós |es|pe|ra|mos, |com |Teu |po|der,"+
            "Tu|a |von|ta|de |sem|pre o|be|de|cer,"+
            "Mos|tran|do ao |mun|do |o|bras |de |luz"+
            "Pe|las |vir|tu|des |Tu|as, |ó |Je|sus." ,

            "Faz|-nos |sa|ber |Teu |san|to |que|rer;"+
            "Bên|ções |ce|les|tes |vem |nos |con|ce|der."+
            "A |sã |Pa|la|vra, |vin|da |dos |céus,"+
            "Dá |no|va |vi|da |aos |re|mi|dos |Teus." ,

            "Com |es|sa |vi|da, |ó |Rei |dos |reis,"+
            "Po|de|mos |ser|-Te |sem|pre |mais |fi|éis;"+
            "Tu|as |o|ve|lhas |so|mos, |Se|nhor,"+
            "Tu |és |o |nos|so |ú|ni|co |Pas|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "311": { 
        nome: "Teus tesouros revelaste",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Se|nhor, |vi|ven|te |Deus, |a |Ti |da|re|mos, |sem |ces|sar,"+
            "To|da |hon|ra |e |lou|vor, |com |de|vo|ção;"+
            "Pois |qui|ses|te, |aos |pe|que|nos, |Teus |te|sou|ros |re|ve|lar,"+
            "Pe|lo |Teu |a|mor |e |i|men|sa |com|pai|xão." ,

            "Teus |te|sou|ros |re|ve|las|te"+
            "Aos |hu|mil|des |que |cha|mas|te;"+
            "Pa|ra |e|les |de|cre|tas|te"+
            "Vi|da |e|ter|na |com |Je|sus, |o |Sal|va|dor." ,

            "Teus |te|sou|ros |o|cul|tas|te |pa|ra |os |sá|bios, |ó |Se|nhor,"+
            "Mas |Te |a|prou|ve |re|ve|lá|-los |pa|ra |nós"+
            "E |a |to|do |que, |i|gual|men|te, |se |a|che|ga |ao |Re|den|tor,"+
            "A|ten|den|do |hu|mil|de|men|te |à |Su|a |voz." ,

            "A|nun|ci|a|mos |nes|te |mun|do |que |Je|sus |é |o |Sal|va|dor,"+
            "Que, |com |gra|ça, |O |en|vi|as|te, |ó |bom |Deus;"+
            "Mes|mo |que |a|qui |se|ja|mos |o|pri|mi|dos, |ó |Se|nhor,"+
            "Nós |te|re|mos |gran|de |prê|mio |lá |nos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "312": { 
        nome: "Tributos de louvor",
        compasso: "4/4",
        velMin: 80,
        velMed: 92,
        velMax: 104,
        inicio: 4,
        velMinMeiaHora: 52,
        velMedMeiaHora: 55,
        velMaxMeiaHora: 58,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Tri|bu|tos |de |lou|vor |da|rei |ao |gran|de |Deus,"+
            "Ao |Deus |que |es|cre|veu |meu |no|me |lá |nos |céus;"+
            "Que |gran|de a|mor!"+
            "Ben|di|to |se|ja |sem|pre o |Deus |do |meu |lou|vor!" ,

            "Pe|ran|te o |Cri|a|dor |eu |me |in|cli|na|rei;"+
            "Pros|tra|do |aos |Seus |pés, |Seu |No|me |ben|di|rei;"+
            "Fi|el |é |Deus!"+
            "Do |seu |lu|gar |e|xcel|so |ou|ve os |san|tos |Seus." ,

            "No |tro|no e|ter|no es|tá |o O|ni|po|ten|te |Deus,"+
            "Cer|ca|do |por |e|xér|ci|tos |de |an|jos |Seus;"+
            "Que |es|plen|dor!"+
            "E|ter|na |gló|ria a |Deus, |o |san|to |Cri|a|dor!" ,

            "Meu |Deus |me |con|ta|rá |com |to|dos |os |fi|éis;"+
            "He|ran|ça |me |da|rá |com |Cris|to, o |Rei |dos |reis;"+
            "E|le|va|rei"+
            "O |meu |lou|vor |a |Deus |e |a |Je|sus, |meu |Rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "313": { 
        nome: "Arrebatado aos céus",
        compasso: "6/8",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 65,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |ri|jo |cla|mor |da |trom|be|ta |ou|vi|rão"+
            "Os |fi|lhos |de |Deus, |que |ao |céu |su|bi|rão;"+
            "Vin|do |em |nu|vens, |Je|sus |sur|gi|rá"+
            "E |vis|to |por |to|dos |os |ho|mens |se|rá;"+
            "Seus |an|jos |vi|rão, |des|te |mun|do, |le|var"+
            "Os |que, |com |Cris|to, |i|rão |rei|nar."+
            "Que |di|a |de |jú|bi|lo |e |es|plen|dor!"+
            "Oh! |Gló|ria |a |Je|sus, |o |Se|nhor!" ,

            "Ar|re|ba|ta|dos |aos |céus, |por |Cris|to, |e|ter|no |Rei,"+
            "Lá |eu |ve|rei |o |gran|de |Deus; |oh! |quão |fe|liz |se|rei!"+
            "Cris|to |Je|sus |da|rá |aos |es|co|lhi|dos |Seus"+
            "A |e|ter|nal |mo|ra|da: |Je|ru|sa|lém |de |Deus." ,

            "Aos |Seus |res|ga|ta|dos |di|rá |o |Se|nhor:"+
            "'Oh! |Vin|de, |ben|di|tos', |com |gran|de |a|mor."+
            "Um |rei|no |e|ter|no |o |Pai |nos |do|ou,"+
            "Que |des|de |o |prin|cí|pio |E|le |nos |pre|pa|rou."+
            "Ain|da |um |pou|co |e |Je|sus |vol|ta|rá."+
            "A |Su|a |i|gre|ja |O |en|con|tra|rá."+
            "Que |di|a |de |jú|bi|lo |e |es|plen|dor!"+
            "Oh! |Gló|ria |a |Je|sus, |o |Se|nhor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "314": { 
        nome: "O Teu poder supremo",
        compasso: "4/4",
        velMin: 84,
        velMed: 92,
        velMax: 100,
        inicio: 4,
        velMinMeiaHora: 52,
        velMedMeiaHora: 54,
        velMaxMeiaHora: 56,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "O |Teu |po|der |su|pre|mo, |ó |Rei |dos |reis,"+
            "Re|mo|ve |os |tro|pe|ços |aos |Teus |fi|éis;"+
            "Só |Tu |me |po|des |con|du|zir |ao |lar |de |a|mor;"+
            "És |Fon|te |de |to|da |for|ça, |fir|me|za |e |vi|gor." ,

            "Em |Teu |ben|di|to |No|me, |ó |Re|den|tor,"+
            "Por |Deus |é |re|ce|bi|do |o |meu |cla|mor;"+
            "Meu |ser |en|tre|go |to|do |a |Ti, |ó |Sal|va|dor;"+
            "Meus |o|lhos |a |Ti |le|van|to, |a|ten|de|-me |Se|nhor." ,

            "A|gra|va|-se |a |ba|ta|lha |a|qui, |meu |Rei,"+
            "Mas |sem|pre |es|tás |co|mi|go, |não |te|me|rei;"+
            "De |ar|ma|du|ra |di|vi|nal |me |pro|ve|rás;"+
            "Ao |fim, |na |e|ter|na |gló|ria, |Tu |me |re|ce|be|rás." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "315": { 
        nome: "Contempla do céu",
        compasso: "6/4",
        velMin: 80,
        velMed: 90,
        velMax: 100,
        inicio: 6,
        velMinMeiaHora: 52,
        velMedMeiaHora: 54,
        velMaxMeiaHora: 56,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Con|tem|pla |do |céu, |ó |Se|nhor, |Teus |fi|éis,"+
            "Em |nós |se|ja |fei|to |o |Teu |san|to |que|rer;"+
            "Oh! |Vem |a|ju|dar|-nos |a |pe|re|gri|nar,"+
            "Con|duz|-nos |aos |céus, |com |o |Teu |po|der." ,

            "Que |vol|te |do |céu, |Teu |Fi|lho, |ó |Deus,"+
            "Quão |de|se|jo|sos |es|ta|mos, |Se|nhor!"+
            "Re|ju|bi|la|re|mos |ao |vê|-Lo |vol|tar"+
            "Em |gran|de |es|plen|dor." ,

            "Ó |Pai |a|mo|ro|so, |en|vi|a |Je|sus,"+
            "É |gran|de |o |de|se|jo |de |vê|-Lo |sur|gir;"+
            "Que|re|mos |com |Cris|to |à |gló|ria |her|dar"+
            "E |bens |e|ter|nais |com |E|le |fru|ir." ,

            "Oh! |Faz|-nos |per|fei|tos, |bon|do|so |Se|nhor,"+
            "Na |luz |da |Pa|la|vra |que|re|mos |an|dar;"+
            "São |tem|pos |di|fí|ceis, |ó |bom |Cri|a|dor;"+
            "Vir|tu|de |e |fé |vem |nos |dis|pen|sar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "316": { 
        nome: "Tua vida é triste?",
        compasso: "6/8",
        velMin: 44,
        velMed: 50,
        velMax: 56,
        inicio: 1,
        velMinMeiaHora: 28,
        velMedMeiaHora: 29,
        velMaxMeiaHora: 30,
        MeiaHora: "N",
        velX3: "S",
        versos: [
            "Tu|a |vi|da |é |tris|te? |Tens |pro|fun|da |dor?"+
            "Que|res |um |au|xí|lio, |um |li|ber|ta|dor?"+
            "A|cei|tan|do |a |Cris|to, |paz |re|ce|be|rás,"+
            "For|ça |e |a|le|gri|a |d'E|le |al|can|ça|rás." ,

            "Far|do |de |pe|ca|do |car|re|gan|do |es|tás?"+
            "Ju|go |de |jus|ti|ça |de |Je|sus |te|rás;"+
            "Ou|ve |a |men|sa|gem |de |a|mor |sem |par"+
            "Pa|ra |que, |com |Cris|to, |pos|sas |ca|mi|nhar." ,

            "Por |ca|mi|nho |lar|go |an|das |sem |ter |paz?"+
            "Cris|to |é |a |Sen|da |que |fe|liz |te |faz;"+
            "Con|fi|an|do |n'E|le, |tu |en|con|tra|rás"+
            "Sal|va|ção |e|ter|na, |sal|va|ção |ve|raz." ,

            "O|lha |pa|ra |o |al|to, |de |on|de |vem |a |luz,"+
            "E |ve|rás, |en|tão, |a |gló|ria |de |Je|sus;"+
            "Que |su|bli|me |o|bra |con|su|mou |na |cruz;"+
            "Ao |ce|les|te |rei|no |E|le |te |con|duz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "317": { 
        nome: "Sinto o Senhor por fé em mim",
        compasso: "6/8",
        velMin: 92,
        velMed: 112,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 66,
        velMedMeiaHora: 68,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sin|to |o |Se|nhor, |por |fé,"+
            "Em |mim, |e |Su|a |co|mu|nhão;"+
            "Por |gra|ça, |paz, |vir|tu|de |e |a|mor,"+
            "Ju|bi|la |meu |co|ra|ção." ,

            "Sem|pre |u|ni|do |a |meu |Je|sus,"+
            "For|ças |te|rei, |tam|bém |va|lor;"+
            "E|le |é |a |Luz |que |ao |céu |con|duz,"+
            "Com |a|mor." ,

            "Sin|to |o |Se|nhor, |por |fé,"+
            "Em |mim, |li|ber|to |es|tou |do |mal;"+
            "Des|fru|to |já |o |Seu |a|mor"+
            "E |a |vi|da |ce|les|ti|al." ,

            "Sin|to |o |Se|nhor, |por |fé,"+
            "Em |mim, |tran|qui|lo |eu |es|tou,"+
            "Sen|tin|do |a |paz, |o |Seu |per|dão"+
            "E |a |gra|ça |que |me |o|fer|tou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "318": { 
        nome: "Ó Salvador vem converter o pecador",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |bom |Je|sus! |Ó |Sal|va|dor!"+
            "O |pe|ca|dor |pe|de |com|pai|xão,"+
            "Pois |só |em |Ti |e|le |a|cha|rá"+
            "A |sal|va|ção |e |o |per|dão." ,

            "Ó |Sal|va|dor, |vem |con|ver|ter"+
            "O |pe|ca|dor, |por |com|pai|xão;"+
            "Com |Teu |fa|lar, |vem |co|mo|ver"+
            "E |trans|for|mar |seu |co|ra|ção." ,

            "A|lém |de |Ti, |ó |Rei |dos |reis,"+
            "Não |há |nin|guém |pa|ra |dar |per|dão;"+
            "So|men|te |Tu, |ó |Sal|va|dor,"+
            "És |o |Au|tor |da |re|den|ção." ,

            "O |pe|ca|dor |vi|ve |a |so|frer"+
            "Sem |sal|va|ção, |sem |o |Teu |fa|vor."+
            "Mas, |cren|do |em |Ti, |al|can|ça|rá"+
            "Di|vi|na |gra|ça, |ó |Re|den|tor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "319": { 
        nome: "Foi Jesus Quem me salvou",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|le|gre |can|to |um |hi|no |de |lou|vor,"+
            "Pois |Cris|to |me |sal|vou;"+
            "Um |hi|no |de |vi|tó|ria |e |a|mor"+
            "A |Quem |me |li|ber|tou." ,

            "Foi |Je|sus |Quem |me |sal|vou,"+
            "Mi|nha |al|ma |res|ga|tou,"+
            "Mi|nha |vi|da |trans|for|mou;"+
            "Seu |a|mor |a|nun|ci|a|rei"+
            "E |Seu |No|me |glo|ri|fi|ca|rei." ,

            "Mi|nh'al|ma |sen|te |a |ce|les|te |paz,"+
            "Pois |Cris|to |me |sal|vou;"+
            "Ja|mais |vol|tar |de|se|jo |pa|ra |trás,"+
            "Com |Cris|to |a|van|te |eu |vou." ,

            "Só |em |Je|sus |eu |co|nhe|ci |o |a|mor,"+
            "A|mor |que |me |sal|vou,"+
            "A|mor |que |me |tem |fei|to |ven|ce|dor"+
            "E |vi|da |me |do|ou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "320": { 
        nome: "Que prazer é andar com Cristo",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Que |pra|zer |é |an|dar |com |Cris|to |e |a |Su|a |voz |ou|vir,"+
            "Me|di|tar |em |Seus |con|se|lhos |que |da|rão |fe|liz |por|vir;"+
            "Ó |que|ri|dos, |con|sa|gre|mos |nos|sas |vi|das |ao |Se|nhor"+
            "Pa|ra |ter|mos |a |he|ran|ça |no |Seu |rei|no |de |es|plen|dor." ,

            "Je|sus |Cris|to |é |po|de|ro|so,"+
            "For|te, |san|to, |mui |va|lo|ro|so,"+
            "Su|mo |Sá|bio, |ma|ra|vi|lho|so,"+
            "É |o |Se|nhor |de |tu|do |e |Rei |dos |reis." ,

            "Que |pra|zer |é |an|dar |com |Cris|to, |des|fru|tar |o |Seu |a|mor,"+
            "Com|ba|ter |a |i|ni|qui|da|de |e, |ao |fim, |ser |ven|ce|dor;"+
            "Nes|te |mun|do, |o |Se|nhor |por |nós |mor|reu |na |du|ra |cruz"+
            "Pa|ra |dar|-nos |vi|da |e |gló|ria |on|de |há |e|ter|na |luz." ,

            "Que |pra|zer |é |an|dar |com |Cris|to, |o |Ca|mi|nho |que |con|duz"+
            "Às |mo|ra|das |sem|pi|ter|nas |de |res|plan|de|cen|te |luz;"+
            "Só |em |Cris|to |há |ver|da|de, |vi|da, |gra|ça |e |per|dão;"+
            "N'E|le |te|mos |a |cer|te|za |de |al|can|çar |a |per|fei|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "321": { 
        nome: "Bendito seja o Deus vivente",
        compasso: "4/4",
        velMin: 58,
        velMed: 63,
        velMax: 69,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ben|di|to |se|ja o |Deus |Vi|ven|te"+
            "Que |nos |ge|rou |de |no|vo, em |Cris|to,"+
            "E, |pe|la |gra|ça |ex|ce|len|te,"+
            "Nos |deu |he|ran|ça |lá |nos |céus,"+
            "Ha|bi|ta|ção |de |Deus." ,

            "A |nos|sa |fé |é |mais |pre|ci|o|sa"+
            "Do |que |o |ou|ro |pe|re|cí|vel;"+
            "O |fim |é a |sal|va|ção |glo|ri|o|sa,"+
            "In|cor|rup|tí|vel |ga|lar|dão,"+
            "E|ter|na |re|den|ção." ,

            "A |sã |Pa|la|vra |da |ver|da|de"+
            "Que |pa|ra |sem|pre |per|ma|ne|ce,"+
            "Nos |le|va ao |Pai |da e|ter|ni|da|de;"+
            "Tam|bém |se|re|mos |e|ter|nais,"+
            "Com |cor|pos |ce|les|ti|ais." ,

            "Pe|re|ce, o |ho|mem, |co|mo a |er|va"+
            "E |su|a |gló|ria |a|qui |ter|mi|na,"+
            "Mas |Deus, |aos |Seus |fi|éis, |re|ser|va"+
            "A |gló|ria |que |não |fin|da|rá:"+
            "Seu |po|vo |rei|na|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "322": { 
        nome: "Vem Rei eterno",
        compasso: "6/4",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |Tu|a |o|bra |de |a|mor |con|ta|rei,"+
            "Ó |glo|ri|o|so |Je|sus;"+
            "Que |os |pe|ca|dos |per|do|as,"+
            "Di|rei, |e |que |do |mun|do |és |a |Luz." ,

            "Vem, |Rei |e|ter|no,"+
            "Vem, |Rei |da |gló|ria,"+
            "Meu |co|ra|ção |a|ben|ço|ar;"+
            "Un|ge |meus |lá|bios, |e |a|nun|ci|a|rei"+
            "O |E|van|ge|lho |da |gra|ça |sem |par." ,

            "Re|ve|la|rás |Teus |mis|té|rios,"+
            "Se|nhor, |a |to|do |a|que|le |que |crer;"+
            "Pe|lo |Es|pí|ri|to |Con|so|la|dor"+
            "Con|ce|de|rás |Teu |sa|ber." ,

            "Por |Tu|a |gra|ça |me |des|te |o |bem,"+
            "A |paz, |a |vi|da, |o |a|mor;"+
            "Cer|to |da|rás |es|ta |gra|ça |tam|bém"+
            "Aos |que |Te |bus|cam, |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "323": { 
        nome: "Oh! Não busques ansioso",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Não |bus|ques, |an|si|o|so,"+
            "Paz |no |mun|do |en|ga|na|dor,"+
            "Pois |é |só |Je|sus, |bon|do|so,"+
            "O |ve|raz |Con|so|la|dor." ,

            "Ao |Se|nhor |Je|sus |en|tre|ga"+
            "Tu|a |men|te |e |co|ra|ção,"+
            "Pois |o |mun|do |só |te |le|va"+
            "À |e|ter|na |per|di|ção." ,

            "Ou|ve |bem, |Je|sus |te |cha|ma"+
            "Pa|ra |te |re|ge|ne|rar;"+
            "Com |ce|les|te |a|mor |te |a|ma"+
            "E |de|se|ja |te |sal|var." ,

            "Pe|lo |mun|do |tens |an|da|do"+
            "Lon|ge |do |teu |Re|den|tor;"+
            "Não |mais |ser|vas |ao |pe|ca|do,"+
            "Ser|ve |a |Cris|to, |teu |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "324": { 
        nome: "Do mal o Salvador veio me tirar",
        compasso: "4/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 4.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Do |mun|do |do |pe|ca|do |ve|io |me |ti|rar"+
            "Je|sus, |o |Po|de|ro|so, |que |me |fa|rá |en|trar"+
            "Na |ter|ra |da |pro|mes|sa, |pois |her|dei|ro |sou."+
            "Oh! |Gló|ria, |a |Je|sus |Cris|to, |que |já |me |res|ga|tou!" ,

            "Do |mal |o |Sal|va|dor |ve|io |me |ti|rar,"+
            "Com |Su|a |for|te |mão |ao |céu |vai |me |le|var;"+
            "A|van|te |se|gui|rei |com |o |meu |Se|nhor,"+
            "E |lá |da|rei |lou|vo|res |a |Deus, |Cri|a|dor." ,

            "Fi|el |é |a |pro|mes|sa |do |e|ter|no |Rei:"+
            "Na |ter|ra |glo|ri|o|sa |um |ga|lar|dão |te|rei;"+
            "Meu |Sal|va|dor |me |gui|a |com |sa|ber |e |luz."+
            "Lou|vo|res |ao |E|ter|no! |Lou|vo|res |a |Je|sus!" ,

            "Não |vol|to |ao |pe|ca|do, |si|go |o |meu |Se|nhor;"+
            "Por |fé |eu |já |des|fru|to |as |bên|ções |de |a|mor"+
            "Que |fo|ram |pro|me|ti|das |pe|lo |Cri|a|dor;"+
            "No |céu, |já |me |es|pe|ram |ri|que|zas |de |va|lor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "325": { 
        nome: "Louvemos ao Rei dos reis",
        compasso: "6/8",
        velMin: 112,
        velMed: 123,
        velMax: 135,
        inicio: 6,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Lou|ve|mos |ao |Rei |dos |reis |com |to|do |o |nos|so |fer|vor;"+
            "Num |só |es|pí|ri|to, |ó |fi|éis, |can|te|mos |hi|nos |de |lou|vor;"+
            "Por |gra|ça, |te|mos |paz |e |vi|da |e|ter|na |no |Se|nhor." ,

            "Que |gran|de |te|sou|ro"+
            "Al|can|ça|re|mos |em |gló|ria!"+
            "Nem |ou|ro |ou |pra|ta |se|rá,"+
            "Mas |vi|da |que |não |fin|da|rá." ,

            "O |san|to, |pu|ro |a|mor |so|men|te |vem |de |Je|sus,"+
            "Por |Quem |sen|ti|mos |o |vi|gor |de |su|por|tar |a |nos|sa |cruz"+
            "Com |fé, |pa|ci|ên|cia |e |cal|ma, |i|rra|dian|do |sem|pre |luz." ,

            "Por |Cris|to, |Su|mo |Pas|tor, |fru|í|mos |o |gran|de |bem"+
            "De |ser|mos |fi|lhos |do |bom |Deus,"+
            "Que |já |nos |faz |pro|var |tam|bém"+
            "As |ce|les|ti|ais |pri|mí|ci|as |da |e|ter|nal |Je|ru|sa|lém." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "326": { 
        nome: "Sempre a Cristo fiéis",
        compasso: "6/8",
        velMin: 100,
        velMed: 110,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 60,
        velMedMeiaHora: 62,
        velMaxMeiaHora: 65,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sem|pre |a |Cris|to |fi|éis |nós |se|re|mos,"+
            "Sem|pre |fir|mes |de|ve|mos |lu|tar;"+
            "Pe|la |gra|ça |que |nós |re|ce|be|mos,"+
            "Po|de|re|mos |bons |fru|tos |Lhe |dar." ,

            "Sem|pre |fi|éis, |de |va|lor |em |va|lor,"+
            "Se|gui|re|mos |o |nos|so |Pas|tor;"+
            "En|tra|re|mos |no |lar |glo|ri|o|so"+
            "E |ve|re|mos |o |nos|so |Se|nhor." ,

            "Ves|ti|re|mos, |de |Deus, |a |ar|ma|du|ra"+
            "Pa|ra |o |nos|so |i|ni|mi|go |en|fren|tar;"+
            "A |Pa|la|vra |de |Deus, |san|ta |e |pu|ra,"+
            "Nos |fa|rá |a |vi|tó|ria |al|can|çar." ,

            "Fi|nal|men|te |di|re|mos, |u|ni|dos:"+
            "Com|ba|te|mos, |guar|da|mos |a |fé; "+
            "Na |pre|sen|ça |de |Deus, |re|u|ni|dos,"+
            "O |ve|re|mos |tal |co|mo |E|le |é." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "327": { 
        nome: "Soldados somos do Senhor",
        compasso: "4/4",
        velMin: 76,
        velMed: 84,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 48,
        velMedMeiaHora: 50,
        velMaxMeiaHora: 52,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sol|da|dos |so|mos |do |Se|nhor,"+
            "A|van|te |sem |te|mer!"+
            "Deus |nos |dá |for|ça |e |va|lor"+
            "E |nos |fa|rá |ven|cer." ,

            "Ga|lar|dão |nos |da|rá,"+
            "E|ter|nal |e |ex|cel|so |bem;"+
            "Ao |ter|mi|nar |a |lu|ta, |nos |e|xal|ta|rá"+
            "Na |e|ter|nal |Je|ru|sa|lém." ,

            "Lu|te|mos |fir|mes, |sem |ces|sar,"+
            "Pois |Cris|to, |o |Ven|ce|dor,"+
            "Nos |au|xi|li|a |a |en|fren|tar"+
            "O |as|tu|to |ten|ta|dor." ,

            "Se |for|te |a |pe|le|ja |for,"+
            "Lu|te|mos |sem |te|mer,"+
            "Pois |é |mais |for|te |o |Se|nhor;"+
            "I|men|so |é |Seu |po|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "328": { 
        nome: "Grande é o Teu poder Senhor",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gran|de |é |o |Teu |po|der, |Se|nhor,"+
            "Quão |i|men|so |é, |ó |e|ter|no |Deus;"+
            "Não |há |ou|tro |Deus |do|mi|na|dor"+
            "So|bre |a |ter|ra, |so|bre |os |ma|res |e |nos |céus." ,

            "To|da |a |gló|ria |só |a |Ti |per|ten|ce,"+
            "Pois |três |ve|zes |San|to |és, |Se|nhor;"+
            "Re|ges |tu|do |com |o |Teu |po|der,"+
            "Ó |Cri|a|dor." ,

            "Ma|ni|fes|tam |Teu |po|der, |os |céus,"+
            "O|bra |Tu|a |é |to|da |a |cri|a|ção,"+
            "São |per|fei|tos |os |ca|mi|nhos |Teus;"+
            "És |tam|bém |Quem |dá, |ao |ho|mem, |sal|va|ção." ,

            "É |e|ter|no |Teu |po|der, |Se|nhor;"+
            "Pas|sam |ge|ra|ções, |tu|do |pas|sa|rá,"+
            "Mas |o |Teu |po|der, |ó |Cri|a|dor,"+
            "Pa|ra |to|da |a |e|ter|ni|da|de |du|ra|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "329": { 
        nome: "Com fé combate",
        compasso: "6/8",
        velMin: 96,
        velMed: 117,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com |Cris|to |po|des |ao |mal |re|sis|tir,"+
            "Os |Seus |con|se|lhos |tu |de|ves |guar|dar;"+
            "Se |de|se|ja|res |co|ro|a |cin|gir,"+
            "Não |de|ves, |nas |lu|tas, |de|sa|ni|mar." ,

            "Com |fé |com|ba|te, |sê |fer|vo|ro|so,"+
            "Tu |ven|ce|rás |com |va|lor;"+
            "Cris|to |pro|me|te |ao |vi|to|ri|o|so,"+
            "O |ga|lar|dão |de |es|plen|dor." ,

            "Em |Cris|to |tens |a |di|vi|na |mer|cê,"+
            "Em |tu|do, |vi|to|ri|o|so |se|rás;"+
            "Sê |co|ra|jo|so, |com|ba|te |com |fé,"+
            "Ca|mi|nha |com |Cris|to |e |ven|ce|rás." ,

            "'Ao |que |ven|cer', |dis|se |Cris|to |Je|sus,"+
            "Seu |no|me, |do |li|vro |não |ris|ca|rei; "+
            "Re|ce|be|rá, |no |Seu |rei|no |de |luz,"+
            "O |ga|lar|dão |do |Se|nhor, |nos|so |Rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "330": { 
        nome: "Ao findar a jornada",
        compasso: "4/4",
        velMin: 60,
        velMed: 74,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |fin|dar |a |jor|na|da, |re|pou|sa|rei"+
            "No |rei|no |da |e|ter|na |luz;"+
            "Ao |fin|dar |a |jor|na|da, |eu |en|tra|rei"+
            "No |céu |com |o |meu |Je|sus." ,

            "Lá |no |rei|no |dos |céus |re|ju|bi|la|rei"+
            "Ao |sen|tir |o |ex|cel|so |a|mor;"+
            "Lá |no |rei|no |dos |céus |con|tem|pla|rei"+
            "A |fa|ce |do |meu |Se|nhor." ,

            "Sem |i|gual |há |de |ser |mi|nha |e|mo|ção"+
            "Ao |ver |meu |Se|nhor |vol|tar;"+
            "E, |no |lar |da |jus|ti|ça |e |da |per|fei|ção,"+
            "Je|sus |me |fa|rá |mo|rar." ,

            "Ao |fin|dar |a |jor|na|da, |re|ce|be|rei"+
            "O |prê|mio |do |meu |la|bor:"+
            "A |co|ro|a |de |gló|ria |das |mãos |do |Rei,"+
            "O |san|to |e |fi|el |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "331": { 
        nome: "Vem a Cristo sem tardar",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vem |a |Cris|to |sem |tar|dar, |Su|a |gra|ça |quer |te |dar;"+
            "Vem, |con|tri|to, |re|ce|ber |a |Su|a |luz;"+
            "Seu |o|lhar |tem |so|bre |ti, |E|le |quer |te |per|do|ar;"+
            "Vem |a |Cris|to |en|tre|gar|-te |sem |tar|dar." ,

            "Vem |a |Cris|to |sem |tar|dar, |paz |e |vi|da |quer |te |dar,"+
            "Dei|xa |a |sen|da |que |à |mor|te |te |con|duz;"+
            "E|le |quer |te |trans|for|mar, |E|le |po|de |te |sal|var;"+
            "Vem |a |Cris|to |en|tre|gar|-te |sem |tar|dar." ,

            "Vem |a |Cris|to |sem |tar|dar, |pois |no |céu |te |quer |do|ar"+
            "Um |te|sou|ro |que, |no |mun|do, |não |te|rás;"+
            "Tu |não |de|ves |rei|ei|tar |es|ta |gra|ça, |que |é |sem |par;"+
            "Vem |a |Cris|to |en|tre|gar|-te |sem |tar|dar." ,

            "Sem |tar|dar, |sem |mais |tar|dar,"+
            "A |Je|sus |vem |te |en|tre|gar;"+
            "Seu |o|lhar |tem |so|bre |ti, |E|le |quer |te |per|do|ar,"+
            "Vem |de|pres|sa |a |Quem |te |cha|ma, |sem |tar|dar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "332": { 
        nome: "É Cristo Quem cuida de ti",
        compasso: "6/8",
        velMin: 116,
        velMed: 124,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 60,
        velMedMeiaHora: 64,
        velMaxMeiaHora: 69,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus, |o |Pas|tor |di|vi|nal,"+
            "Sem|pre |de |ti |cui|da|rá;"+
            "E|le, |que |fa|la |de |vi|da |e|ter|nal,"+
            "Nun|ca |te |a|ban|do|na|rá." ,

            "É |Cris|to |Quem |cui|da |de |ti,"+
            "É |E|le |quem |ze|la |por |ti;"+
            "N'E|le |des|can|sa, |n'E|le |tem |fé,"+
            "For|te |Re|fú|gio |E|le |é." ,

            "Em |to|da |a |pro|va, |ir|mão, |o |Se|nhor,"+
            "For|ças |do |céu |te |da|rá;"+
            "Cris|to, |te |sal|va |te |faz |ven|ce|dor;"+
            "E|le |ja|mais |fa|lha|rá." ,

            "Em |Su|a |gra|ça, |ir|mão, |o |Se|nhor"+
            "Sem|pre |te |con|ser|va|rá;"+
            "Cris|to, |teu |Gui|a, |tam|bém |teu |Va|lor,"+
            "Em |teu |so|cor|ro |vi|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "333": { 
        nome: "Peregrino sou no mundo",
        compasso: "3/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pe|re|gri|no |sou |no |mun|do, |meu |de|se|jo |é |ir |ao |céu;"+
            "Deus, |por |Seu |a|mor |pro|fun|do, |san|ta |pá|tria |pro|me|teu;"+
            "Nas |an|gús|ti|as |des|ta |vi|da, |só |Je|sus |me |dá |guar|ri|da;"+
            "Des|te |mun|do |na|da |es|pe|ro, |o |meu |lar |es|tá |no |céu;"+
            "Con|sa|grar|-me |a |Deus |eu |que|ro, |pa|ra |ser |her|dei|ro |Seu." ,

            "Na|da |im|pe|de |o |meu |ca|mi|nho |pa|ra |ha|bi|tar |no |céu;"+
            "Je|sus |Cris|to, |o |Rei |di|vi|no, |gra|ça |e |paz |me |con|ce|deu;"+
            "Pe|la |fé |o |céu |con|tem|plo, |en|tra|rei |no |san|to |tem|plo,"+
            "On|de |Deus, |o |Pai |bon|do|so, |Su|a |fa|ce |mos|tra|rá"+
            "Ao |Seu |po|vo |vi|to|ri|o|so |que, |com |E|le, |ha|bi|ta|rá." ,

            "Não |te |a|fli|jas, |mi|nha |al|ma, |há |re|pou|so |lá |no |céu,"+
            "On|de |e|xis|te |paz |e |cal|ma |que |o |mun|do |não |te |deu;"+
            "De |vi|tó|ria |em |vi|tó|ria, |vais |com |Cris|to |à |Su|a |gló|ria;"+
            "Se|gue |a|van|te |com |o |Mes|tre, |d'E|le |tens |a |pro|te|ção,"+
            "Pois |de |for|ça |te |re|ves|te |nes|ta |pe|re|gri|na|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "334": { 
        nome: "Há uma pátria perfeita...",
        compasso: "4/4",
        velMin: 69,
        velMed: 74,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Há |u|ma |pá|tria |per|fei|ta |em |be|le|za,"+
            "Pá|tria |e|ter|na, |su|bli|me, |de |a|mor;"+
            "Nes|sa |pá|tria |de |in|fin|da |ri|que|za,"+
            "Tu|do |tem |e|ter|nal |es|plen|dor." ,

            "É |nos |céus, |é |nos |céus"+
            "Es|sa |pá|tria |de |vi|da |e |de |a|mor;"+
            "Ne|la |es|tá |nos|so |Deus"+
            "E |Je|sus, |nos|so |a|ma|do |Se|nhor." ,

            "A |Deus |Pai |o |lou|vor |tri|bu|te|mos,"+
            "E |a |Cris|to, |o |Rei |di|vi|nal,"+
            "E, |um |di|a, |ao |céu |su|bi|re|mos;"+
            "Vi|ve|re|mos |na |gló|ria |e|ter|nal." ,

            "Ao |Cor|dei|ro |de |Deus |can|ta|re|mos,"+
            "Nes|sa |pá|tria, |di|vi|no |lou|vor;"+
            "Con|gre|ga|dos |a|li |es|ta|re|mos"+
            "An|te |o |tro|no |de |Deus, |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "335": { 
        nome: "Eu almejo nessa pátria entrar...",
        compasso: "3/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sei |que |ao |fin|dar |a|qui |o |meu |la|bor,"+
            "Rei|na|rei |no |lar |de |gló|ria |e |de |es|plen|dor,"+
            "On|de |a |tris|te|za |não |te|rá |lu|gar;"+
            "Paz |e |a|le|gri|a |lá |vou |des|fru|tar." ,

            "Eu |al|me|jo |nes|sa |pá|tria |en|trar"+
            "E, |na |gló|ria, |com |Je|sus |rei|nar;"+
            "Com |os |san|tos |eu |en|to|a|rei"+
            "Hi|nos |de |lou|vo|res |ao |e|ter|no |Rei." ,

            "Sei |que |ao |fin|dar |a |lu|ta |con|tra |o |mal,"+
            "Vi|ve|rei |com |Deus |na |pá|tria |ce|les|ti|al;"+
            "Lá |e|xis|te |paz, |jus|ti|ça |e |a|mor,"+
            "E |os |sal|vos |lou|va|rão |ao |Cri|a|dor." ,

            "Sei |que, |ao |fin|dar |o |meu |pe|re|gri|nar,"+
            "En|tra|rei |com |Cris|to |no |ce|les|te |lar,"+
            "On|de |os |re|mi|dos |se |en|con|tra|rão"+
            "E |e|ter|na|men|te, |a |Deus, |e|xal|ta|rão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "336": { 
        nome: "Sempre brilhar devemos",
        compasso: "4/4",
        velMin: 66,
        velMed: 77,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Res|plan|de|cer |por |Cris|to |va|mos,"+
            "Qual |lu|mi|nar |no |céu;"+
            "Es|cla|re|cer, |ir|mãos, |de|ve|mos"+
            "Quem |em |Je|sus |não |creu." ,

            "Sem|pre |bri|lhar |de|ve|mos,"+
            "Ir|ra|die|mos |luz;"+
            "Nes|te |mun|do |res|plan|de|ce|re|mos"+
            "Por |Je|sus." ,

            "Cris|to |é |a |Luz |que |ve|io |ao |mun|do"+
            "Pa|ra |o |i|lu|mi|nar"+
            "E, |pe|lo |Seu |a|mor |pro|fun|do,"+
            "Do |so|no |o |des|per|tar." ,

            "Pe|la |Pa|la|vra, |que |i|lu|mi|na,"+
            "To|dos |en|ten|de|rão"+
            "Que |só |de |Cris|to |a |dou|tri|na"+
            "Le|va |à |per|fei|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "337": { 
        nome: "Por fé seguimos ao Senhor",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Fi|éis |ir|mãos, |mos|tre|mos |sem|pre |o |a|mor"+
            "Do |bom |Je|sus |a |to|do |o |pe|ca|dor;"+
            "Não |há |nin|guém |que |po|de|rá |nos |im|pe|dir"+
            "De |a|fir|mar |que |Cris|to |há |de |vir." ,

            "Fi|éis |ir|mãos, |e|lei|tos |fo|mos |do |Se|nhor"+
            "A |pro|cla|mar |o |Seu |e|ter|no |a|mor;"+
            "Em|bo|ra |nós |te|nha|mos |que |a|qui |so|frer"+
            "Por |es|se |a|mor, |Je|sus |nos |faz |ven|cer." ,

            "Fi|éis |ir|mãos, |an|de|mos |sem|pre |nes|se |a|mor,"+
            "Su|bli|me |a|mor |do |nos|so |Re|den|tor;"+
            "O |ga|lar|dão |re|ce|be|re|mos |lá |nos |céus,"+
            "On|de |é |o |lar |do |O|ni|pre|sen|te |Deus." ,

            "Por |fé |se|gui|mos |ao |Se|nhor"+
            "No |Seu |ca|mi|nho |de |a|mor,"+
            "A|mor |que |mos|tra |a |luz |di|vi|na"+
            "E |nos |con|duz |ao |Cri|a|dor."+
            "Fe|liz |se|rá |quem |o |pro|var,"+
            "Pois |é |um |a|mor |que |não |tem |par;"+
            "A|mor |glo|ri|o|so, |a|mor |su|bli|me,"+
            "Só |em |Je|sus |se |po|de |a|char." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "338": { 
        nome: "O Senhor é sempiterno",
        compasso: "4/4",
        velMin: 66,
        velMed: 77,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Se|nhor |é |sem|pi|ter|no, |E|le |nun|ca |mu|da|rá;"+
            "To|das |as |fi|éis |pro|mes|sas |a |Seu |tem|po |cum|pri|rá;"+
            "Por |Seu |san|gue |i|ma|cu|la|do, |trou|xe |re|ge|ne|ra|ção;"+
            "O|pe|rou, |em |nos|sa |men|te, |ce|les|ti|al |trans|for|ma|ção." ,

            "So|mos |reis |e |sa|cer|do|tes, |fei|tos |pa|ra |o |Cri|a|dor,"+
            "E |a |E|le |ser|vi|re|mos |em |jus|ti|ça |e |a|mor,"+
            "Pa|ra |que |en|trar |pos|sa|mos |na |pre|sen|ça |do |bom |Deus"+
            "E |vi|ver |e|ter|na|men|te |com |os |san|tos |lá |nos |céus." ,

            "Não |per|ca|mos |a |he|ran|ça |que |nos |ve|io |por |Je|sus;"+
            "Bre|ve |va|mos |pos|su|í|-la |no |e|ter|no |lar |de |luz."+
            "Pros|si|ga|mos |no |ca|mi|nho |da |ci|da|de |do |Se|nhor,"+
            "On|de |jun|tos |rei|na|re|mos |com |o |nos|so |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "339": { 
        nome: "Glória sem par",
        compasso: "6/4",
        velMin: 112,
        velMed: 122,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Quan|do |a|qui |ter|mi|nar |meu |la|bor,"+
            "Quan|do |a |mi|nha |car|rei|ra |fin|dar,"+
            "Quan|do |vol|tar |meu |a|ma|do |Se|nhor,"+
            "Gló|ria |sem |par |eu |i|rei |des|fru|tar." ,

            "Gló|ria |sem |par |con|tem|pla|rei,"+
            "Gló|ria |sem |par |re|ce|be|rei;"+
            "Gran|de |te|sou|ro |Je|sus |vai |me |dar:"+
            "Gló|ria |e|ter|na, |a |gló|ria |sem |par." ,

            "Por |Su|a |gran|de |bon|da|de, |o |meu |Deus"+
            "Me |fez |her|dei|ro |com |Cris|to |Je|sus;"+
            "E|le |re|ser|va |no |rei|no |dos |céus,"+
            "Gló|ria |sem |par |aos |que |an|dam |na |luz." ,

            "É |mo|men|tâ|nea |a |tri|bu|la|ção"+
            "Dos |que |pro|cu|ram |a |Deus |a|gra|dar,"+
            "Pois |das |tris|te|zas |não |se |lem|bra|rão"+
            "Quan|do |es|ti|ve|rem |na |gló|ria |sem |par." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "340": { 
        nome: "No mundo sou peregrino",
        compasso: "6/4",
        velMin: 108,
        velMed: 120,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 70,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "No |mun|do |sou |pe|re|gri|no,"+
            "É |Cris|to |meu |Con|du|tor;"+
            "E|le |é |o |Ca|mi|nho |que |le|va |ao |céu,"+
            "Tam|bém |é |meu |Sal|va|dor." ,

            "Eu |su|bi|rei |com |Cris|to |à |ce|les|ti|al |Si|ão,"+
            "É |E|le |Quem |me |gui|a |na |pe|re|gri|na|ção;"+
            "Quan|do |eu |en|trar |na |gló|ria |do |meu |a|ma|do |Rei,"+
            "Ao |con|tem|plar |Su|a |fa|ce, |re|go|zi|jar|-me|-ei." ,

            "No |mun|do |sou |pe|re|gri|no,"+
            "Quem |po|de |a|qui |me |a|ju|dar?"+
            "Só |Cris|to, |a |Por|ta |do |rei|no |dos |céus,"+
            "Por |Quem |po|de|rei |en|trar." ,

            "No |mun|do |sou |pe|re|gri|no,"+
            "An|do |a|qui |com |Je|sus;"+
            "Bus|co |as |mo|ra|das |do |Pai |ce|les|ti|al,"+
            "O |lar |de |jus|ti|ça |e |luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "341": { 
        nome: "Com fé espera no Senhor",
        compasso: "6/8",
        velMin: 92,
        velMed: 112,
        velMax: 132,
        inicio: 6,
        velMinMeiaHora: 66,
        velMedMeiaHora: 69,
        velMaxMeiaHora: 72,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com |fé |es|pe|ra |no |Se|nhor |em |tu|as |pro|vas, |tam|bém |na |dor;"+
            "Pa|ci|ên|cia |e |paz |al|can|ça|rás |do |teu |a|ma|do |e |fi|el |Se|nhor."+
            "Je|sus |vi|rá |te |so|cor|rer; |é |gran|de, |e|ter|no, |o |Seu |po|der."+
            "Com |fé |es|pe|ra |no |Se|nhor; |so|men|te |E|le |te |faz |ven|cer." ,

            "O|ran|do, |sem|pre |sen|ti|rás |a |Su|a |do|ce |con|so|la|ção;"+
            "Je|sus |te |for|ta|le|ce|rá, |sus|ter|-te-á |com |a |Su|a |mão;"+
            "As |tu|as |cau|sas |o |Se|nhor |re|sol|ve|rá, |por |Seu |a|mor."+
            "Com |fé |es|pe|ra |no |Se|nhor, |com |fé |es|pe|ra |no |Sal|va|dor." ,

            "O |que |re|ce|bes |do |Se|nhor, |com |ze|lo |de|ves |em |ti |guar|dar;"+
            "À |tu|a |mão |di|rei|ta |es|tá |o |teu |Pas|tor |pa|ra |te |gui|ar;"+
            "De|pois |ao |céu |te |le|va|rá, |em |gló|ria |te |re|ce|be|rá."+
            "Com |fé |es|pe|ra |no |Se|nhor; |o |teu |de|se|jo |E|le |cum|pri|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "342": { 
        nome: "Sião celestial",
        compasso: "9/4!6/4",
        velMin: 88,
        velMed: 100,
        velMax: 112,
        inicio: 9,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Si|ão |ce|les|ti|al, |é |re|pou|so |dos |san|tos,"+
            "O |seu |Ar|qui|te|to |é |cha|ma|do |o |Se|nhor; "+
            "A|li |en|tra|rão, |com |lou|vor |e |com |can|tos,"+
            "A|que|les |que |a|do|ram |o |bom |Cri|a|dor."+
            "De |pre|ci|o|si|da|des |es|tá |a|dor|na|da |por |Deus,"+
            "É |in|des|cri|tí|vel, |sem |par, |su|a |luz;"+
            "A |su|a |gran|de|za, |o |Se|nhor |re|ser|vou |pa|ra |os |Seus;"+
            "Re|fle|te |a |gló|ria |de |Cris|to |Je|sus;"+
            "De |Cris|to |Je|sus, |de |Cris|to |Je|sus,"+
            "Re|fle|te |a |gló|ria |de |Cris|to |Je|sus." ,

            "Na|que|la |mo|ra|da |há |luz |per|ma|nen|te,"+
            "A |Lâm|pa|da |é |Cris|to |Je|sus, |o |Se|nhor;"+
            "Os |seus |fun|da|men|tos |são |pe|dras |ful|gen|tes;"+
            "É |mui |ma|jes|to|so |o |seu |es|plen|dor."+
            "Os |san|tos |re|mi|dos, |com |hi|nos |de |gló|ria |tri|un|fal,"+
            "Ca|mi|nham |com |Cris|to |e |lá |rei|na|rão."+
            "Se|rá, |pa|ra |os |jus|tos, |o |lar |de |re|pou|so |e|ter|nal;"+
            "Su|bli|me |se|rá |nos|sa |con|so|la|ção;"+
            "Su|bli|me |se|rá, |su|bli|me |se|rá,"+
            "Su|bli|me |se|rá |nos|sa |con|so|la|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "343": { 
        nome: "Lá no céu cantaremos",
        compasso: "4/4",
        velMin: 72,
        velMed: 80,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nes|te |mun|do |so|mos |pe|re|gri|nos,"+
            "Nos|so |lar |é |a |pá|tria |do |bom |Deus;"+
            "Que |a|le|gri|a |já |sen|ti|mos"+
            "De, |um |di|a, |en|trar |nos |céus!" ,

            "Lá |no |céu |can|ta|re|mos,"+
            "To|dos |jun|tos, |lou|vo|res |ao |Se|nhor;"+
            "Lá |no |céu |ve|re|mos"+
            "Je|sus, |em |gran|de |es|plen|dor." ,

            "Sem|pre, |por |fé, |ó |ir|mãos, |an|de|mos;"+
            "Es|ta |vi|da |bre|ve |fin|da|rá;"+
            "Se |fi|éis |per|ma|ne|cer|mos,"+
            "Deus, |a |gló|ria, |nos |da|rá." ,

            "Pre|pa|ra|dos, |nós |es|pe|ra|re|mos"+
            "A |Je|sus, |u|ni|dos |em |a|mor;"+
            "E |com |E|le |en|tra|re|mos"+
            "Na |ci|da|de |do |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "344": { 
        nome: "Vou encontrar meu Deus",
        compasso: "6/4",
        velMin: 96,
        velMed: 111,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 62,
        velMedMeiaHora: 65,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pa|ra |a |ci|da|de |e|ter|na |eu |vou,"+
            "Pois |bem |fun|da|do |em |Cris|to |es|tou;"+
            "Te|nho |a |cer|te|za |de |ne|la |en|trar"+
            "E |com |Je|sus |rei|nar." ,

            "Vou |en|con|trar |meu |Deus,"+
            "Com |os |re|mi|dos |no |rei|no |de |a|mor;"+
            "É |meu |de|se|jo |ir |pa|ra |os |céus"+
            "E |es|tar |com |o |Se|nhor." ,

            "Por |es|te |mun|do |não |te|nho |a|tra|ção;"+
            "Fir|me |a|guar|do |o |meu |ga|lar|dão;"+
            "Pa|ra |al|can|çá|-lo, |Je|sus, |meu |Pas|tor,"+
            "Me |gui|a |com |a|mor." ,

            "In|com|pa|rá|vel |te|sou|ro |a|chei"+
            "Em |Je|sus |Cris|to, |meu |gran|de |Rei;"+
            "Bre|ve |nos |céus |eu |i|rei |des|fru|tar"+
            "Gló|ria |que |não |tem |par." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "345": { 
        nome: "Regozijo-me em falar do Salvador",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Re|go|zi|jo|-me |em |fa|lar |do |Sal|va|dor,"+
            "Que |me |con|ce|deu |i|men|so |fa|vor:"+
            "O |Seu |san|gue |der|ra|mou, |meus |pe|ca|dos |per|do|ou"+
            "So|bre |a |cruz, |on|de |tu|do |con|su|mou." ,

            "Lou|va|rei, |lou|va|rei,"+
            "Lou|va|rei |a |Quem |me |deu |a |sal|va|ção!"+
            "Can|ta|rei, |can|ta|rei"+
            "A |Je|sus, |Au|tor |da |mi|nha |re|den|ção!" ,

            "Re|go|zi|jo|-me |em |fa|lar |do |Sal|va|dor,"+
            "Meu |a|ma|do |e |fi|el |Re|mi|dor,"+
            "Que |me |deu |a |sal|va|ção |pe|la |Su|a |com|pai|xão."+
            "A|le|lu|ia! |Eu |sin|to |Seu |per|dão." ,

            "Re|go|zi|jo|-me |em |fa|lar |do |Sal|va|dor,"+
            "Pois |das |tre|vas |me |ti|rou, |por |a|mor;"+
            "Me |cha|mou |à |Su|a |luz |e |à |gló|ria |me |con|duz;"+
            "Com |fer|vor |lou|va|rei |ao |meu |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "346": { 
        nome: "Longe do mal e perto de Ti",
        compasso: "9/4!6/4",
        velMin: 96,
        velMed: 106,
        velMax: 116,
        inicio: 1,
        velMinMeiaHora: 62,
        velMedMeiaHora: 64,
        velMaxMeiaHora: 66,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Lon|ge |do |mal |e |per|to |de |Ti |eu |já |es|tou, |ó |meu |Je|sus;"+
            "Paz |nes|te |mun|do |nun|ca |sen|ti, |não |ti|nha |Tu|a |luz;"+
            "Já |li|vre |es|tou |da |con|de|na|ção,"+
            "Já |li|vre |es|tou |da |i|ra |de |Deus;"+
            "Tu |me |li|vras|te |da |per|di|ção |pa|ra |le|var|-me |aos |céus." ,

            "Lon|ge |do |mal, |ó |meu |Guar|di|ão, |vi|vo |fe|liz |em |Teu |a|mor;"+
            "Sin|to |a|le|gri|a |em |meu |co|ra|ção, |ó |jus|to |Sal|va|dor."+
            "Com |to|da |a |al|ma |eu |can|ta|rei"+
            "Hi|nos |de |gló|ria |em |Teu |lou|vor;"+
            "Por |to|da |a |vi|da |Te |ben|di|rei |e |Te |a|ma|rei, |Se|nhor." ,

            "Lon|ge |do |mal |Con|ti|go |an|da|rei, |não |te|me|rei |o |ten|ta|dor;"+
            "So|bre |a |ter|ra |Te |hon|ra|rei, |san|to |e |fi|el |Se|nhor."+
            "Vem |di|la|tar |o |meu |co|ra|ção,"+
            "Vem |es|trei|tar|-me |em |Ti , |ó |Je|sus;"+
            "Que|ro |a|mar|-Te |com |de|vo|ção, |és |mi|nha |Vi|da |e |Luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "347": { 
        nome: "Ontem, hoje e eternamente",
        compasso: "6/8",
        velMin: 116,
        velMed: 127,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 73,
        velMaxMeiaHora: 76,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pas|sa |o |céu |e |a |ter|ra, |mas |Je|sus |não |mu|da|rá;"+
            "O |Seu |rei|no |é |de |gran|de |gló|ria |e |ja|mais |pas|sa|rá;"+
            "E|le |é |sem|pre |o |mes|mo, |E|le |é |cha|ma|do |o |Se|nhor; "+
            "Ao |Seu |san|to |man|da|do |na|da |po|de |se |o|por." ,

            "Ao |en|fer|mo |que |es|pe|ra|va |a |li|ber|ta|ção,"+
            "Dis|se: |Fi|lho, |os |teus |pe|ca|dos |per|do|a|dos |es|tão. "+
            "Ho|je, |Cris|to |Je|sus, |à |des|tra |de |Deus, |sen|ta|do |es|tá"+
            "E, |do |ho|mem |que |n'E|le |crer, |se |com|pa|de|ce|rá." ,

            "So|bre |to|das |as |cou|sas |Cris|to |tem |po|der |to|tal;"+
            "N'E|le |ha|bi|ta |a |ple|ni|tu|de |de |Deus, |Pai |ce|les|ti|al."+
            "Es|se |mes|mo |Je|sus |que |foi |pa|ra |os |céus, |re|tor|na|rá;"+
            "Co|ro|a|do |de |gló|ria |e |hon|ra |E|le |vol|ta|rá." ,

            "On|tem, |ho|je |e |e|ter|na|men|te"+
            "É |o |mes|mo, |Cris|to |Je|sus,"+
            "E|le |é |o |Ver|bo |de |Deus,"+
            "Que |nos |trou|xe |gra|ça, |vi|da |e |luz;"+
            "San|to |e |fi|el |é |Je|sus, |Re|den|tor!"+
            "Tu|do |pas|sa, |mas |Cris|to |não;"+
            "Gló|ria |ao |Sal|va|dor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "348": { 
        nome: "Em Cristo espera, sem vacilar",
        compasso: "3/4!4/4",
        velMin: 63,
        velMed: 34.5,
        velMax: 76,
        inicio: 42,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Na |jor|na|da |do |E|van|ge|lho, |ca|mi|nha|mos |com |Je|sus;"+
            "E|le |é |o |Au|tor |de |to|do |o |bem; |a |quem |crê |e |o|be|de|ce,"+
            "O |Se|nhor |sem|pre |en|ri|que|ce |com |os |dons |que |d'E|le |vêm." ,

            "Em |Cris|to |es|pe|ra,"+
            "Sem |va|ci|lar;"+
            "Paz, |fé |e |vir|tu|de"+
            "Tem |pa|ra |nos |dar." ,

            "Se |em |mar |tem|pes|tu|o|so |nos|so |bar|co |pe|ri|gar,"+
            "Em |Cris|to |va|mos |con|fi|ar; |per|to |es|tá |e |nos |a|ten|de,"+
            "Sem|pre |Su|a |mão |es|ten|de |pa|ra |vir |nos |li|ber|tar." ,

            "Nem |os |gran|des |so|fri|men|tos |nos |se|pa|ram |do |a|mor"+
            "Do |Re|den|tor, |o |bom |Je|sus, |que, |nas |lu|tas |des|ta |vi|da,"+
            "Aos |fi|éis |da|rá |guar|ri|da; |E|le |é |a |nos|sa |Luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "349": { 
        nome: "Irmãos amados",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ir|mãos |a|ma|dos, |já |res|ga|ta|dos"+
            "Por |Je|sus |Cris|to, |o |Ver|da|dei|ro,"+
            "Se|guin|do |a|van|te, |com |fé |cons|tan|te,"+
            "Ser|va|mos |ao |Se|nhor |Je|sus." ,

            "Ir|mãos |a|ma|dos, |já |res|ga|ta|dos,"+
            "Por |Cris|to |fo|mos |re|ge|ne|ra|dos,"+
            "Com |o |Seu |san|gue |pu|ri|fi|ca|dos;"+
            "Ben|di|to |é |o |No|me |do |Se|nhor." ,

            "Ir|mãos |a|ma|dos, |pu|ri|fi|ca|dos,"+
            "Je|sus |lou|ve|mos |e |O |a|do|re|mos;"+
            "Re|mi|dos |so|mos, |com|pra|dos |fo|mos"+
            "Com |o |Seu |san|gue |ex|pi|a|dor." ,

            "Ir|mãos |a|ma|dos, |re|ge|ne|ra|dos,"+
            "Por |fé |nos |so|mos |jus|ti|fi|ca|dos;"+
            "Se |com|ba|te|mos, |vi|tó|ria |te|mos"+
            "Em |no|me |do |Se|nhor |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "350": { 
        nome: "A jornada farei",
        compasso: "3/4",
        velMin: 76,
        velMed: 84,
        velMax: 92,
        inicio: 3,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |jor|na|da |fa|rei |com |Je|sus, |meu |Se|nhor,"+
            "Cer|ta|men|te |ao |céu |che|ga|rei;"+
            "Pe|re|gri|no |a|qui |sou, |bus|co |o |lar |de |es|plen|dor,"+
            "On|de |os |bens |ce|les|ti|ais |fru|i|rei." ,

            "Sem|pre |u|ni|do |a |Cris|to |de|vo |es|tar,"+
            "Pa|ra, |nos |pe|ri|gos, |não |va|ci|lar;"+
            "Sin|to |a |voz |di|vi|na |em |meu |co|ra|ção,"+
            "Que |me |o|fe|re|ce |o |ga|lar|dão." ,

            "A |jor|na|da |se|rá, |pa|ra |mim, |um |pra|zer,"+
            "Ca|mi|nhan|do |com |meu |Sal|va|dor;"+
            "Que|ro |ao |mal |re|nun|ci|ar |e |a |gra|ça |re|ter,"+
            "Que|ro |ser, |so|bre |o |mal, |ven|ce|dor." ,

            "A |jor|na|da |fa|rei |com |a |for|ça |de |Deus;"+
            "Nós |pe|ri|gos, |guar|da|do |se|rei,"+
            "Pois |co|mi|go |es|tá |Quem |me |le|va |ao |céu;"+
            "Bem |se|gu|ro, |en|tão, |mar|cha|rei."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "351": { 
        nome: "Senhor, à Tua presença",
        compasso: "6/8",
        velMin: 100,
        velMed: 108,
        velMax: 116,
        inicio: 6,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Se|nhor, |à |Tu|a |pre|sen|ça, |"+
            "Em |paz |va|mos |nos |pros|trar, |\n"+
            "E, |pe|lo Es|pí|ri|to |San|to, |"+
            "Teu |No|me |ce|les|te in|vo|car. |\n\n" ,

            "Se|nhor, |és |Tu |que |co|nhe|ces |"+
            "O |que |sen|te o |co|ra|ção; |\n"+
            "Hu|mil|des, |Te |su|pli|ca|mos: |"+
            "A|ten|de |a |nos|sa o|ra|ção. |\n\n" ,

            "Se|nhor, |com |fé |nós |ro|ga|mos: |"+
            "Con|ce|de|-nos |mais |te|mor |\n"+
            "A |fim |de |per|ma|ne|cer|mos |"+
            "Em |Tu|a |jus|ti|ça |e a|mor. |\n\n" ,

            "Do |tro|no |da |Tu|a |gra|ça, |"+
            "En|vi|a |con|so|la|ção; |\n"+
            "As |bên|ções |nós |es|pe|ra|mos; |"+
            "Res|pon|de |a |nos|sa o|ra|ção. |\n\n" ,

        ],
        temposVersos: [
            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,10,
            2,4,2,2,2,2,6,4,
            2,2,2,2,2,2,2,10,

            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,10,
            2,4,2,2,2,2,6,4,
            2,2,2,2,2,2,2,10,
            
            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,10,
            2,4,2,2,2,2,6,4,
            2,2,2,2,2,2,2,10,
            
            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,10,
            2,4,2,2,2,2,6,4,
            2,2,2,2,2,2,2,10

        ],
        notas: [
            'G4','G4','F4','E4','G4','C5','B4','A4',
            'G4','G4','A4','G4','D4','F4','E4','C4',
            'G4','G4','F4','E4','G4','C5','E5','C5','G4',
            'C5','B4','A4','G4','A4','F4','D4','C4',

            'G4','G4','F4','E4','G4','C5','B4','A4',
            'G4','G4','A4','G4','D4','F4','E4','C4',
            'G4','G4','F4','E4','G4','C5','E5','C5','G4',
            'C5','B4','A4','G4','A4','F4','D4','C4',

            'G4','G4','F4','E4','G4','C5','B4','A4',
            'G4','G4','A4','G4','D4','F4','E4','C4',
            'G4','G4','F4','E4','G4','C5','E5','C5','G4',
            'C5','B4','A4','G4','A4','F4','D4','C4',

            'G4','G4','F4','E4','G4','C5','B4','A4',
            'G4','G4','A4','G4','D4','F4','E4','C4',
            'G4','G4','F4','E4','G4','C5','E5','C5','G4',
            'C5','B4','A4','G4','A4','F4','D4','C4'
        ],
        temposNotas: [
            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,6,4,
            2,4,2,2,2,2,4,2,4,
            2,2,2,2,2,2,2,10,

            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,6,4,
            2,4,2,2,2,2,4,2,4,
            2,2,2,2,2,2,2,10,
            
            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,6,4,
            2,4,2,2,2,2,4,2,4,
            2,2,2,2,2,2,2,10,
            
            2,4,2,2,2,2,6,4,
            2,2,2,2,4,2,6,4,
            2,4,2,2,2,2,4,2,4,
            2,2,2,2,2,2,2,10

        ]
    },
    "352": { 
        nome: "Sinto viva esperança",
        compasso: "3/4!4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |Seu |ban|que|te |de |per|dão"+
            "Me |con|vi|dou |Je|sus;"+
            "Por |gra|ça, |deu|-me |in|tro|du|ção"+
            "No |rei|no |Seu |de |luz." ,

            "Sin|to |vi|va |es|pe|ran|ça |em |mim,"+
            "Es|pe|ran|ça |de |ver |o |Se|nhor"+
            "E |her|dar |as |mo|ra|das |e|ter|nas,"+
            "On|de |é |tu|do |es|plen|dor." ,

            "Do |mun|do |na|da |te|me|rei,"+
            "Pois |vi|vo |com |Je|sus,"+
            "E |con|fun|di|do |não |se|rei,"+
            "An|dan|do |em |Su|a |luz." ,

            "Na |vi|da |de|vo |com|ba|ter"+
            "Com |fé |em |meu |Je|sus;"+
            "Não |te|me|rei |o |mau |po|der,"+
            "Pois |te|nho |a |e|ter|na |luz." ,            
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "353": { 
        nome: "Eleitos nós somos",
        compasso: "2/2",
        velMin: 58,
        velMed: 63,
        velMax: 69,
        inicio: 2.5,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "E|lei|tos |nós |so|mos |por |Deus, |o |Ver|da|dei|ro,"+
            "E |fo|mos |re|mi|dos |por |Seu |gran|de |a|mor;"+
            "Vi|ve|mos |por |Cris|to, |o |di|vi|nal |Cor|dei|ro;"+
            "Oh! |Gló|ria! |A|le|lu|ia! |Ho|sa|na |ao |Se|nhor!" ,

            "Nós |so|mos |e|lei|tos"+
            "Por |Deus, |Cri|a|dor;"+
            "Nós |céus |fru|i|re|mos"+
            "A |he|ran|ça |de |a|mor." ,

            "Do |tro|no |ce|les|te, |po|der |nós |bus|ca|re|mos,"+
            "E |chu|vas |de |bên|ções |da|rá |o |Cri|a|dor;"+
            "Na |gra|ça |glo|ri|o|sa, |por |fé, |nós |cres|ce|re|mos;"+
            "Oh! |Gló|ria! |A|le|lu|ia! |Ho|sa|na |ao |Se|nhor!" ,

            "Es|tá |per|to |a |vol|ta |de |Cris|to, |o |Rei |da |gló|ria;"+
            "Ir|mãos, |a|guar|de|mos |com |fé |e |fer|vor;"+
            "No |céu |can|ta|re|mos |o |hi|no |da |vi|tó|ria;"+
            "Oh! |Gló|ria! |A|le|lu|ia! |Ho|sa|na |ao |Se|nhor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "354": { 
        nome: "Jerusalém celestial!",
        compasso: "3/4",
        velMin: 69,
        velMed: 74,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|ru|sa|lém |ce|les|ti|al,"+
            "Ci|da|de |do |e|ter|no |Deus!"+
            "Mui |bre|ve |a|li |se |en|con|tra|rão"+
            "Os |san|tos |ci|da|dãos |dos |céus." ,

            "Je|ru|sa|lém |ce|les|ti|al,"+
            "Lu|gar |de |paz |e |de |es|plen|dor!"+
            "Por |fé, |po|de|mos |con|tem|plar"+
            "A |ter|ra |que |Deus |nos |vai |dar;"+
            "En|tão |o |e|xí|lio |fin|da|rá,"+
            "O |po|vo |san|to |rei|na|rá." ,

            "Je|ru|sa|lém |ce|les|ti|al"+
            "É |a |ci|da|de |on|de |en|tra|rão"+
            "Os |que |a|ma|ram |o |Se|nhor"+
            "Com |um |sin|ce|ro |co|ra|ção." ,

            "Je|ru|sa|lém |ce|les|ti|al,"+
            "De |in|com|pa|rá|vel |es|plen|dor,"+
            "É |a|dor|na|da |de |a|mor"+
            "E |ma|jes|ta|de |do |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "355": { 
        nome: "A Ti, Deus, eu consagrei-me",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |Ti, |Deus, |eu |con|sa|grei|-me |pa|ra |sem|pre |Te |ser|vir;"+
            "De |Teus |dons |vem |re|ves|tir|-me, |e |de |a|mor |tam|bém |cin|gir."+
            "Vem |man|ter|-me |sem|pre |fir|me, |bem |dis|pos|to |a |Te |ou|vir." ,

            "Ao |bom |Pai, |o |Deus |e|ter|no,"+
            "Con|sa|grei |meu |co|ra|ção;"+
            "Com |su|bli|me |a|mor |su|per|no"+
            "Me |pro|me|teu |o |ga|lar|dão." ,

            "Nes|ta |gra|ça |pre|ci|o|sa |sou |di|to|so |em |vi|ver;"+
            "Que |he|ran|ça |glo|ri|o|sa |do |Se|nhor |vou |re|ce|ber!"+
            "Es|ta |fé |ma|ra|vi|lho|sa |que|ro |sem|pre |em |mim |re|ter." ,

            "Um |fu|tu|ro |mui |glo|ri|o|so |eu |a|chei |em |Ti, |Se|nhor;"+
            "Ó |bom |Deus, |fi|el, |pi|e|do|so, |re|ves|tis|te|-me |de |a|mor."+
            "Eu |a|guar|do, |an|si|o|so, |ver |Teu |ros|to, |ó |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "356": { 
        nome: "Por preço elevado jesus resgatou-me",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Por |pre|ço |e|le|va|do |Je|sus |res|ga|tou|-me,"+
            "Por |pre|ço |que |ou|ro |não |po|de |pa|gar;"+
            "Com |Seu |pró|prio |san|gue |o |Mes|tre |com|prou- |me"+
            "A |fim |de |fa|zer|-me |na |gló|ria |en|trar." ,

            "Não |tem |va|lor |a |pra|ta |e |o |ou|ro"+
            "Pa|ra |dar |a |sal|va|ção;"+
            "Não |há, |na |ter|ra, |al|gum |te|sou|ro"+
            "Que |res|ga|te |e |dê |per|dão." ,

            "O |ou|ro |não |dá |re|mis|são |do |pe|ca|do,"+
            "A |pra|ta |não |le|va |ao |rei|no |dos |céus;"+
            "So|men|te |o |san|gue, |na |cruz |der|ra|ma|do,"+
            "Li|vrou|-me |da |mor|te, |por |gra|ça |de |Deus." ,

            "O |san|gue |pre|ci|o|so |e |i|ma|cu|la|do"+
            "De |Cris|to |Je|sus |con|du|ziu|-me |a |Deus;"+
            "É |ne|le |que |sem|pre |es|tou |a|bri|ga|do,"+
            "Por |e|le |con|ser|vo |a |vi|da |dos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "357": { 
        nome: "Face a face O verei",
        compasso: "3/4",
        velMin: 56,
        velMed: 64,
        velMax: 72,
        inicio: 2.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "A|guar|do |a |vin|da |do |Se|nhor"+
            "Que |re|ve|lou|-Se |em |meu |ser;"+
            "A|guar|do |Cris|to, |o |Re|den|tor,"+
            "Pois |vai |em |bre|ve |a|pa|re|cer." ,

            "E |fa|ce |a |fa|ce |O |ve|rei;"+
            "Con|tem|pla|rei |Je|sus, |meu |Rei,"+
            "Que |pa|ra |Deus |me |le|va|rá;"+
            "A |he|ran|ça |e|ter|na |me |da|rá." ,

            "Je|sus, |o |a|ma|do |Re|den|tor,"+
            "Com |voz |de |Ar|can|jo |i|rá |sur|gir;"+
            "Co|mo |es|co|lhi|do |do |Se|nhor,"+
            "I|rei |os |bens |de |Deus |fru|ir." ,

            "O |céu |a|ber|to |eu |ve|rei,"+
            "Ne|le |en|tra|rei |com |meu |Je|sus."+
            "A|té |que |ven|ha, |es|pe|ra|rei"+
            "Sem |que |se |a|pa|gue |a |mi|nha |luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "358": { 
        nome: "O Teu precioso sangue",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |Teu |pre|ci|o|so |san|gue, |ó |di|vi|nal |Cor|dei|ro,"+
            "Do |mun|do |res|ga|tou|-me, |por |Teu |i|men|so |a|mor;"+
            "Faz |que |em |Ti |es|te|ja |a |mi|nha |con|fi|an|ça,"+
            "Dá|-me |per|se|ve|ran|ça |e |fé, |ó |Re|den|tor." ,

            "Fra|co |eu |sou, |no |mun|do, |pa|ra |en|fren|tar |a |li|da,"+
            "Mas, |com |ce|les|te |for|ça, |o |mal |não |te|me|rei;"+
            "Vin|do |o |i|ni|mi|go |pa|ra |en|la|çar|-me |a |vi|da,"+
            "Sei |que |te|rei |guar|ri|da |em |Ti, |meu |gran|de |Rei." ,

            "Es|tan|do |sem|pre |a|ten|to |à |ce|les|ti|al |Pa|la|vra,"+
            "Nun|ca |se|rei |ven|ci|do |do |mal, |ó |meu |Se|nhor."+
            "O |Teu |fa|lar |di|vi|no |con|for|ta|rá |mi|nh'al|ma,"+
            "Dan|do|-lhe |paz |e |cal|ma, |fir|me|za |e |fer|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "359": { 
        nome: "Ó irmãos, de Deus diletos",
        compasso: "3/4!4/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |ir|mãos, |de |Deus |di|le|tos,"+
            "Fo|mos |já |por |gra|ça |e|lei|tos;"+
            "Cris|to |nos |fa|rá |per|fei|tos"+
            "Se |O |ser|vir|mos |pe|la |fé." ,

            "A |nos|so |Deus |can|te|mos |lou|vor,"+
            "Por |Seu |a|mor, |por |Su|a |mer|cê;"+
            "Va|mos |ser|vir |ao |bom |Cri|a|dor"+
            "E |a |Je|sus, |Au|tor |da |fé." ,

            "Nos|so |Deus |nos |tem |a|ma|do"+
            "E |nos |tem |jus|ti|fi|ca|do"+
            "Por |Je|sus, |o |Con|sa|gra|do,"+
            "O |Cor|dei|ro |re|mi|dor." ,

            "Deus, |o |Pai, |re|ge|ne|rou|-nos;"+
            "Em |Je|sus |pre|des|ti|nou|-nos;"+
            "Seu |Es|pí|ri|to |en|vi|ou|-nos,"+
            "Pa|ra |a |e|ter|na |re|den|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "360": { 
        nome: "Do mal apartados devemos estar",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Do |mal |a|par|ta|dos |de|ve|mos |es|tar"+
            "E |a |to|do |o |mo|men|to |em |Cris|to |pen|sar;"+
            "U|ni|dos |a |E|le |de|ve|mos |an|dar;"+
            "Oh! |Gló|ria! |A|le|lu|ia! |Va|mos |en|to|ar." ,

            "Fir|mes |se|ja|mos |no |Sal|va|dor,"+
            "Na |san|ti|da|de |e |no |fer|vor!"+
            "E|le, |o |For|te, |o |De|fen|sor,"+
            "Da|rá |vi|tó|ria. |A|le|lu|ia!" ,

            "Je|sus |nos |a|mou, |pa|ra |Deus |nos |com|prou,"+
            "O |San|to |Es|pí|ri|to |nos |en|vi|ou;"+
            "Lu|gar |nes|ta |gra|ça |tam|bém |pre|pa|rou;"+
            "Oh! |Gló|ria! |A|le|lu|ia! |Cris|to |nos |sal|vou." ,

            "Es|tá |per|to |o |di|a |em |que |o |Se|nhor"+
            "Vi|rá, |co|mo |Es|po|so, |com |gran|de |es|plen|dor,"+
            "A |to|dos |que |bus|cam |vir|tu|de |e |a|mor;"+
            "Oh! |Gló|ria! |A|le|lu|ia! |Gran|de |é |Seu |fa|vor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "361": { 
        nome: "Tudo entende o Salvador",
        compasso: "6/4",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|tri|bu|la|do |te |en|con|tras, |ir|mão?"+
            "Quer |o |de|sâ|ni|mo |te |do|mi|nar?"+
            "A|bre |a |Cris|to |o |teu |co|ra|ção,"+
            "Tu|do |E|le |en|ten|de |e |te |po|de |a|ju|dar." ,

            "Tu|do |en|ten|de |o |Sal|va|dor:"+
            "O |teu |sen|tir, |tu|a |a|fli|ção;"+
            "Tu |pro|va|rás |o |Seu |gran|de |a|mor;"+
            "E|le |co|nhe|ce |o |teu |co|ra|ção." ,

            "Não |de|sa|ni|mes, |pois |o |Re|den|tor"+
            "É |A|ta|la|ia |de |to|dos |os |Seus;"+
            "E|le, |do |céu, |ou|vi|rá |teu |cla|mor;"+
            "Tu|do |en|ten|de |o |Fi|lho |de |Deus." ,

            "O|bra |per|fei|ta |pro|cu|ra |fa|zer,"+
            "Tem |pa|ci|ên|cia |na |lu|ta |e |na |dor;"+
            "Cris|to |é |con|ti|go |e |d'E|le |é |o |po|der;"+
            "Tu|do |en|ten|de |o |teu |Sal|va|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "362": { 
        nome: "Que bela herança!",
        compasso: "9/8",
        velMin: 112,
        velMed: 132,
        velMax: 152,
        inicio: 7,
        velMinMeiaHora: 75,
        velMedMeiaHora: 77,
        velMaxMeiaHora: 80,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Que |be|la |he|ran|ça |Deus |me |re|ser|va"+
            "Jun|ta |a |Je|sus, |o |bom |Re|den|tor!"+
            "Pa|ra |al|can|çá|-la, |Deus |me |pres|er|va"+
            "De |to|do |o |mal, |por |gran|de |a|mor." ,

            "Bre|ve, |no |céu, |os |san|tos |re|mi|dos"+
            "Re|ce|be|rão |o |rei|no |e |o |po|der;"+
            "Bre|ve |os |fi|éis, |por |Deus |es|co|lhi|dos,"+
            "Vão, |com |Je|sus, |res|plan|de|cer." ,

            "Pró|xi|mo |é |o |di|a |tão |es|pe|ra|do"+
            "Em |que |Je|sus |do |céu |vol|ta|rá;"+
            "Oh! |Que |en|con|tro |tão |de|se|ja|do!"+
            "Quem |for |fi|el, |a |Deus |su|bi|rá." ,

            "É |i|ne|fá|vel, |gran|de |e |su|per|no"+
            "O |ga|lar|dão |que |vou |des|fru|tar;"+
            "Com |Je|sus |Cris|to |no |rei|no |e|ter|no"+
            "Jun|to |a |Deus, |i|rei |ha|bi|tar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "363": { 
        nome: "Aos Teus pés estou Senhor",
        compasso: "3/4",
        velMin: 54,
        velMed: 63,
        velMax: 72,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Aos |Teus |pés |es|tou, |Se|nhor, |"+
            "E|le|van|do o |meu |cla|mor; |\n"+
            "Faz |rai|ar |a |Tu|a |luz |"+
            "Em |mi|nh'al|ma, |Cri|a|dor. |\n\n" ,

            "Jun|to a |Ti |ó |For|ma|dor, |"+
            "Dá|-me |gra|ça |pa|ra es|tar; |\n"+
            "Que|ro, |com |te|mor |e |fé, |"+
            "Teus |con|se|lhos |es|cu|tar. |\n\n" ,

            "A|do|ran|do|-Te, |Se|nhor, |"+
            "Eu |es|pe|ro |re|ce|ber |\n"+
            "For|ças |pa|ra |Te |ser|vir |"+
            "E, |em |re|ti|dão, |cres|cer. |\n\n" ,

            "O |meu |cá|lix |trans|bor|dar |"+
            "Faz |por |gra|ça, |ó |Se|nhor; |\n"+
            "Eu |de|se|jo |a|ten|der |"+
            "Teus |con|se|lhos |de |a|mor.\n\n" ,

        ],
        temposVersos: [
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,

            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,

            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,

            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8
        ],
        notas: [
            'D4','G4','B4','G4','A4','B4','G4',
            'B4','C5','D5','E5','D5','B4','A4',
            'G4','A4','B4','G4','A4','B4','G4',
            'E4','E4','D4','G4','B4','A4','G4',

            'D4','G4','B4','G4','A4','B4','G4',
            'B4','C5','D5','E5','D5','B4','A4',
            'G4','A4','B4','G4','A4','B4','G4',
            'E4','E4','D4','G4','B4','A4','G4',
            
            'D4','G4','B4','G4','A4','B4','G4',
            'B4','C5','D5','E5','D5','B4','A4',
            'G4','A4','B4','G4','A4','B4','G4',
            'E4','E4','D4','G4','B4','A4','G4',
            
            'D4','G4','B4','G4','A4','B4','G4',
            'B4','C5','D5','E5','D5','B4','A4',
            'G4','A4','B4','G4','A4','B4','G4',
            'E4','E4','D4','G4','B4','A4','G4'
        ],
        temposNotas: [
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,

            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,

            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,

            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8,
            2,2,6,2,3,1,8
        ]
    },
    "364": { 
        nome: "Os tempos já chegados são...",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Os |tem|pos |já |che|ga|dos |são,"+
            "Os |di|as |Deus |a|bre|vi|ou;"+
            "Bem |per|to |es|tá |a |con|su|ma|ção"+
            "Das |pro|mes|sas |que |Deus |a|nun|ci|ou." ,

            "O |nos|so |Rei |não |tar|da|rá!"+
            "Vi|rá |do |céu |com |res|plen|dor;"+
            "O |po|vo |san|to, |ao |vê|-Lo |Lhe |di|rá:"+
            "Sim, |vem, |a|ma|do |Se|nhor!" ,

            "Os |que |ser|vi|rem |ao |Se|nhor,"+
            "Com |gló|ria |a|pa|re|ce|rão;"+
            "No |rei|no |e|ter|no |de |a|mor,"+
            "Co|mo |o |sol |e|les |res|plan|de|ce|rão." ,

            "Quem |tem |ou|vi|dos |pa|ra |ou|vir,"+
            "A|ten|da |o |Es|pí|ri|to |de |Deus,"+
            "Que |fa|la |do |fe|liz |por|vir"+
            "Pre|pa|ra|dos |aos |san|tos |lá |nos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "365": { 
        nome: "Contrito venho a Ti",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Ó |Pai |ce|les|ti|al, |vi|ven|te |Cri|a|dor,"+
            "Con|tri|to, |ven|ho |a |Ti |por |Cris|to, |o |Re|den|tor;"+
            "Por |Tu|a |pi|e|da|de, |Deus |de |ca|ri|da|de,"+
            "Per|do|a |os |meus |er|ros, |su|pli|co, |Se|nhor." ,

            "Con|fes|so|-Te, |Se|nhor, |a |mi|nha |im|per|fei|ção;"+
            "De|se|jo |a|pren|der |por |Tu|a |cor|re|ção;"+
            "A|guar|do, |Pai |a|ma|do, |ser |jus|ti|fi|ca|do;"+
            "Com |ar|re|pen|di|men|to |eu |ro|go |per|dão." ,

            "É |vão |o |meu |vi|ver |sem |Teu |su|bli|me |a|mor;"+
            "Com |ze|lo |pa|ter|nal |con|du|ze|-me, |Se|nhor;"+
            "De |Ti, |ó |Deus |ben|di|to, |sem|pre |ne|ces|si|to;"+
            "Se|guir|-te|-ei |de |per|to, |com |to|do |o |fer|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "366": { 
        nome: "Pela fé tereis vitória",
        compasso: "4/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |san|to |E|van|ge|lho |diz: |Mar|chai,"+
            "Ten|de |fé |em |Deus; |n'E|le |con|fi|ai;"+
            "To|das |as |ba|ta|lhas |en|fren|tai,"+
            "Pe|la |fé |te|reis |vi|tó|ria." ,

            "Deus, |por |Cris|to, |tu|do |cum|pri|rá,"+
            "Seu |au|xí|lio |nun|ca |fal|ta|rá;"+
            "Nós |com|ba|tes |vos |a|ju|da|rá;"+
            "Pe|la |fé |te|reis |vi|tó|ria." ,

            "O |cris|tão |não |de|ve |re|cu|ar,"+
            "Mas, |com |fé |em |Deus, |sem|pre |a|van|çar;"+
            "Com |co|ra|gem |i|de |pe|le|jar,"+
            "Pe|la |fé |te|reis |vi|tó|ria." ,

            "O |mal |não |re|sis|te |ao |Seu |po|der,"+
            "Com |a |un|ção |de |Deus, |i|de |com|ba|ter;"+
            "Deus |co|ro|a|rá |ao |que |ven|cer,"+
            "Pe|la |fé |te|reis |vi|tó|ria." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "367": { 
        nome: "Ao que vive para sempre...",
        compasso: "3/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |que |vi|ve |pa|ra |sem|pre, |se|ja |gló|ria |e |lou|vor;"+
            "Ao |Se|nhor, |três |ve|zes |San|to, |Deus, |de |tu|do |o |Cri|a|dor;"+
            "Nes|ta |ter|ra |lou|vem-No |os |san|tos |Seus;"+
            "Nas |al|tu|ras |se|ja |gló|ria |ao |gran|de |Deus." ,

            "Ao |man|da|do |do |E|ter|no |lo|go |tu|do |a|pa|re|ceu;"+
            "E|le |fez |o |sol |e |a |lu|a, |fez |a |ter|ra |e |o |céu;"+
            "Su|a |o|bra |não |se |po|de |es|qua|dri|nhar,"+
            "Su|a |gló|ria |não |se |po|de |i|ma|gi|nar." ,

            "Sal|va|ção |e |vi|da |e|ter|na |pre|pa|rou |o |Cri|a|dor,"+
            "En|vi|an|do |Je|sus |Cris|to, |nos|so |a|ma|do |Re|den|tor."+
            "É |per|fei|ta |to|da |a |o|bra |do |bom |Deus;"+
            "São |per|fei|tos |to|dos |os |ca|mi|nhos |Seus." ,

            "Ao |que |vi|ve |pa|ra |sem|pre, |se|ja |gló|ria |e |lou|vor;"+
            "Ao |Se|nhor, |três |ve|zes |San|to, |Deus |de |tu|do |o |Cri|a|dor;"+
            "Nes|ta |ter|ra |lou|vem-No |os |san|tos |Seus;"+
            "Nas |al|tu|ras |se|ja |gló|ria |ao |gran|de |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "368": { 
        nome: "Deus nos elegeu para Si",
        compasso: "4/4!3/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Não |du|vi|de|mos, |Deus |nos |e|le|geu"+
            "Pa|ra |Si, |em |Je|sus;"+
            "Con|fir|ma|rá |a |nos|sa |sal|va|ção"+
            "Com |po|der, |gra|ça |e |luz."+
            "Sal|vo |não |se|rá |quem |não |com|ba|ter,"+
            "Quem, |na |ca|mi|nha|da, |es|mo|re|cer;"+
            "Os |vi|to|ri|o|sos |rei|na|rão |e |com |Deus |vi|ve|rão." ,

            "Tem |pro|te|ção |o |po|vo |do |Se|nhor,"+
            "Pro|te|ção |e|fi|caz;"+
            "Seu |fun|da|men|to |é |Cris|to, |o |Sal|va|dor,"+
            "Que |lhe |dá |vi|da |e |paz;"+
            "Por |Seu |ver|da|dei|ro |a|do|ra|dor,"+
            "Deus, |o |Cri|a|dor, |tem |pro|fun|do |a|mor;"+
            "Bem |per|to |es|tá |e |cui|da|rá, |guar|da|rá, |sal|va|rá." ,

            "Se |Deus, |o |Pai, |es|tan|do |nós |no |mal,"+
            "Nos |a|mou, |per|do|ou,"+
            "E, |por |Je|sus, |Cor|dei|ro |di|vi|nal,"+
            "Sal|va|ção |nos |man|dou,"+
            "Co|mo |não |da|rá |aos |e|lei|tos |Seus"+
            "Gra|ça |e |po|der |de |che|gar |aos |céus?"+
            "Que |i|ne|fá|vel |a|fei|ção, |ce|les|ti|al |e|lei|ção!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "369": { 
        nome: "Sentes bater em teu coração?",
        compasso: "6/8",
        velMin: 120,
        velMed: 129,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 73,
        velMaxMeiaHora: 76,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |ba|te |e |quer |en|trar,"+
            "Quer |te |re|mir, |por |Seu |a|mor,"+
            "Pa|ra |te |re|con|ci|li|ar"+
            "Com |Deus, |o |Pai, |o |For|ma|dor." ,

            "Sen|tes |ba|ter |em |teu |co|ra|ção?"+
            "Es|se |é |o |cha|ma|do |do |Se|nhor."+
            "Tens |por |E|le, |a |sal|va|ção"+
            "E |o |per|dão |do |Cri|a|dor." ,

            "Je|sus |Cris|to, |o |Rei |da |paz,"+
            "A |sal|va|ção |ven|ho |te |dar;"+
            "Seu |a|mor |fe|liz |te |faz,"+
            "Pois |quer, |em |Ti |sem|pre |ha|bi|tar." ,

            "Vem |a |Cris|to, |o |Re|den|tor,"+
            "Dá|-Lhe, |por |fé |teu |co|ra|ção;"+
            "Re|co|nhe|ce |o |Seu |a|mor;"+
            "Tens, |em |Je|sus, |a |re|den|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "370": { 
        nome: "Têm os santos do Senhor",
        compasso: "4/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nós |a|qui |es|ta|mos |pa|ra, |a |Cris|to, |e|xal|tar,"+
            "Por |Su|a |o|bra |re|den|to|ra;"+
            "O |Seu |No|me |não |ces|se|mos |de |glo|ri|fi|car;"+
            "Su|a |i|gre|ja |O |a|do|ra." ,

            "Têm |os |san|tos |do |Se|nhor, |a|le|gri|a |de |lou|var"+
            "A |Je|sus, |que, |por |a|mor, |ve|io |à |ter|ra |a |sal|var;"+
            "Nos|sas |al|mas |res|ga|tou, |com |Seu |san|gue |nos |la|vou;"+
            "Gló|ria |a |Je|sus , |a|le|lu|ia!" ,

            "A |pro|mes|sa |cum|pri|rá |o |e|ter|no |Rei |dos |reis"+
            "De |nos |fa|zer |her|dar |a |gló|ria;"+
            "O |Pe|nhor |da |he|ran|ça |deu |a |to|dos |os |fi|éis;"+
            "De |Cris|to, |ho|nra|mos |a |me|mó|ria." ,

            "A |es|pe|ran|ça |já |nos |deu |da |re|den|ção |fi|nal,"+
            "Que |fir|me|men|te |a|guar|da|mos;"+
            "Es|sa |bem-|a|ven|tu|ran|ça |e|ter|na |é |re|al;"+
            "Ao |Re|den|tor |nós |e|xal|ta|mos." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "371": { 
        nome: "Aos Teus pés me apresento",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Aos |Teus |pés |me |a|pre|sen|to,"+
            "Ó |Jus|to |Cri|a|dor;"+
            "A |fé |e |o |en|ten|di|men|to"+
            "Con|ce|de|-me, |Se|nhor." ,

            "Em |no|me |de |Je|sus,"+
            "Pros|trar|-me |vou, |Se|nhor;"+
            "Ó |Pai |de |in|fi|ni|ta |luz,"+
            "A|ten|de |ao |meu |cla|mor." ,

            "Eu |Te |im|plo|ro, |ó |Deus |vi|ven|te,"+
            "Em |mi|nha |o|ra|ção:"+
            "Vem, |com |o |a|mor |ar|den|te,"+
            "Su|prir |meu |co|ra|ção." ,

            "Ó |bom |Deus |de |ca|ri|da|de,"+
            "Con|ti|go, |es|tá |o |per|dão;"+
            "Su|por|ta, |por |pi|e|da|de,"+
            "A |mi|nha |im|per|fei|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "372": { 
        nome: "Da igreja fiel Fundamento é Jesus",
        compasso: "6/4",
        velMin: 88,
        velMed: 104,
        velMax: 120,
        inicio: 6,
        velMinMeiaHora: 60,
        velMedMeiaHora: 62,
        velMaxMeiaHora: 64,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Da |i|gre|ja, |fi|el |Fun|da|men|to"+
            "É |Je|sus, |A|li|cer|ce |sem |par;"+
            "A |tor|men|ta |e |o |for|te |ven|to"+
            "Não |a |po|dem |ja|mais |der|ri|bar."+
            "Pe|la |i|gre|ja, |Je|sus |ve|io |ao |mun|do"+
            "E |mor|reu |pa|ra |a |vi|da |lhe |dar;"+
            "Com |a|mor |tão |pre|ci|o|so |e |pro|fun|do,"+
            "E|le |a |quer, |des|de |os |céus, |a|dor|nar." ,

            "A |i|gre|ja |é |sem|pre |for|mo|sa"+
            "Pa|ra |Cris|to, |seu |Rei |e |Se|nhor;"+
            "É |cha|ma|da |a |Su|a |es|po|sa, "+
            "Re|ves|ti|da |de |gra|ça |e |a|mor;"+
            "Com|ba|ti|da |por |seu |i|ni|mi|go,"+
            "Nes|ta |ter|ra |a |i|gre|ja |se|rá,"+
            "Mas, |em |tu|do, |Je|sus |é |con|si|go,"+
            "Vi|to|ri|o|sa |da|qui |sai|rá." ,

            "Sem|pi|ter|no, |fi|el |Fun|da|men|to"+
            "Da |i|gre|ja |é |Cris|to |Je|sus,"+
            "N'E|le, |os |san|tos |en|con|tram |a|len|to,"+
            "Fé |e |gra|ça, |vir|tu|de |e |luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "373": { 
        nome: "Cristo Jesus o Redentor",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 46,
        velMedMeiaHora: 48,
        velMaxMeiaHora: 50,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus, |o |Re|den|tor, |"+
            "Trou|xe|-me |sal|va|ção; |\n"+
            "Por |Seu |su|bli|me e |gran|de a|mor, |"+
            "Te|nho |con|so|la|ção. |\n\n" ,

            "Que|ro |a |Cris|to o|be|de|cer, |"+
            "To|do o |a|mor |Lhe |dar; |\n"+
            "Que|ro en|tre|gar|-Lhe |o |meu |ser, |"+
            "Hon|ra |Lhe |tri|bu|tar. |\n\n" ,

            "Quan|do |fin|dar |o |meu |la|bor, |"+
            "Cer|to |i|rei |ou|vir |\n"+
            "Cris|to |cha|mar|-me |com |a|mor |"+
            "Pa|ra os |Seus |bens |fru|ir."         
        ],
        temposVersos: [
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,

            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,

            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12

        ],
        notas: [
            'C5','C5','C5','Bb4','C5','Db5','G4','Ab4',
            'Eb4','Eb4','Eb4','C5','Bb4','Bb4',
            'Db5','Db5','C5','Bb4','Ab4','G4','F4','Eb4',
            'Eb4','F4','Ab4','C5','Bb4','Ab4',

            'C5','C5','C5','Bb4','C5','Db5','G4','Ab4',
            'Eb4','Eb4','Eb4','C5','Bb4','Bb4',
            'Db5','Db5','C5','Bb4','Ab4','G4','F4','Eb4',
            'Eb4','F4','Ab4','C5','Bb4','Ab4',

            'C5','C5','C5','Bb4','C5','Db5','G4','Ab4',
            'Eb4','Eb4','Eb4','C5','Bb4','Bb4',
            'Db5','Db5','C5','Bb4','Ab4','G4','F4','Eb4',
            'Eb4','F4','Ab4','C5','Bb4','Ab4'
        ],
        temposNotas: [
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,

            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,

            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12,
            4,4,4,8,4,8,4,12,
            4,4,4,8,4,12
        ]
    },
    "374": { 
        nome: "Santo! Santo! Santo!",
        compasso: "4/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "San|to! |San|to! |San|to! |Deus |O|ni|po|ten|te!"+
            "Sem|pre |a|le|gre|men|te |a |Ti |e|xal|ta|rei;"+
            "San|to! |San|to! |San|to! |Deus |O|ni|pre|sen|te"+
            "E |O|ni|ci|en|te! |Eu |Te |hon|ra|rei!" ,

            "San|to! |San|to! |San|to! |To|dos |os |re|mi|dos"+
            "Com |lou|vor |Te |a|do|ram |em |to|do |o |lu|gar."+
            "An|jos |e |ar|can|jo |can|tam |re|u|ni|dos,"+
            "To|dos |se |pros|tram |pa|ra |Te |a|do|rar." ,

            "San|to! |San|to! |San|to! |Deus |de |a|mor, |pi|e|do|so,"+
            "Teu |ful|gor |ex|cel|so |não |po|de |o |ho|mem |ver;"+
            "És |três |ve|zes |San|to, |To|do|-Po|de|ro|so,"+
            "Jus|to |e |Su|bli|me, |Fon|te |do |sa|ber!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "375": { 
        nome: "A paz Eu vos deixo",
        compasso: "2/2",
        velMin: 40,
        velMed: 47,
        velMax: 54,
        inicio: 2.5,
        velMinMeiaHora: 28,
        velMedMeiaHora: 29,
        velMaxMeiaHora: 30,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "A |paz |Eu |vos |dei|xo, |fa|lou |o |Sal|va|dor,"+
            "A |paz |que |o |mun|do |não |dá. "+
            "Fi|el |é |o |Se|nhor |que, |por |gran|de |a|mor,"+
            "A |pa|la|vra |em |nós |cum|pri|rá." ,

            "Ha|ja |paz |des|de |os |céus;"+
            "Ha|ja |paz |so|bre |o |po|vo |de |Deus." ,

            "Ain|da |que |os |mon|tes |se |mo|vam |do |lu|gar"+
            "E |a |ter|ra |não |mais |pro|du|zir"+
            "E |tu|do, |no |mun|do, |pa|re|ça |fa|lhar,"+
            "Os |fi|éis |vão |a |Cris|to |se|guir." ,

            "Re|al |for|ta|le|za |que |não |se |a|ba|la|rá,"+
            "Je|sus |ve|io |em |nós |cons|tru|ir;"+
            "Em |Deus, |nos|sa |cren|ça |fun|da|da |es|tá;"+
            "A|guar|da|mos |glo|ri|o|so |por|vir." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "376": { 
        nome: "Senhor preciso mais...",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor, |pre|ci|so |mais |da |Tu|a |luz,"+
            "Luz |pre|ci|o|sa |que |ao |céu |con|duz,"+
            "Que |po|de |as |tre|vas |dis|si|par"+
            "E |em |re|ti|dão |fa|zer |an|dar."+
            "Ven|ce|dor |so|bre |o |mal, |com |Tu|a |luz, |se|rei;"+
            "Nós |ca|mi|nhos |da |vi|da |e|ter|na |an|da|rei;"+
            "A |Luz, |que |é |Cris|to, |o |Re|den|tor,"+
            "Me |gui|a|rá |a |Ti, |Se|nhor." ,

            "Se|nhor, |pre|ci|so |mais |da |Tu|a |paz,"+
            "Do |Teu |po|der |e|ter|no |e |e|fi|caz;"+
            "For|ta|le|ci|do |em |Ti, |meu |Deus,"+
            "Não |fa|lha|rão |os |pas|sos |meus."+
            "Ven|ce|rei |nes|te |mun|do, |pois |Je|sus |ven|ceu,"+
            "Foi |ten|ta|do |em |tu|do, |mas |pre|va|le|ceu;"+
            "A |Tu|a |paz |e |Teu |po|der"+
            "Por |cer|to |me |fa|rão |ven|cer." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "377": { 
        nome: "No céu Senhor no céu",
        compasso: "2/4",
        velMin: 54,
        velMed: 63,
        velMax: 72,
        inicio: 1.5,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "No |céu, |Se|nhor, |no |céu, |Con|ti|go |lá |em |gló|ria,"+
            "No |Teu |e|ter|no |rei|no, |a|le|gres, |can|ta|re|mos"+
            "Um |hi|no |glo|ri|o|so, |o |hi|no |da |vi|tó|ria;"+
            "Se|nhor, |Teu |es|plen|dor |no |céu |con|tem|pla|re|mos." ,

            "As |por|tas, |lá |no |céu, |são |pé|ro|las |pre|ci|o|sas"+
            "E |a |pra|ça |da |ci|da|de |é |ou|ro |re|lu|zen|te;"+
            "No |céu |é |tu|do |pu|ro; |ri|que|zas |glo|ri|o|sas"+
            "Des|fru|ta|re|mos |com |Je|sus, |e|ter|na|men|te." ,

            "O |pe|re|gri|no |que |al|me|ja, |no |fu|tu|ro,"+
            "Ir |ha|bi|tar |com |o |Se|nhor |Je|sus, |a|ma|do,"+
            "Pro|cu|ra |ser |mais |san|to, |de|se|ja |ser |mais |pu|ro"+
            "E |bus|ca |ser |a |Deus, |o |Pai, |mais |con|sa|gra|do." ,

            "É |gló|ria |e|ter|na |pa|ra |o |san|to |pe|re|gri|no,"+
            "A |ce|les|ti|al |ci|da|de |por |Deus |pre|pa|ra|da;"+
            "Em |bre|ve |che|ga|re|mos |ao |tri|un|fal |des|ti|no,"+
            "On|de |há |re|pou|so |do |la|bor |e |da |jor|na|da." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "378": { 
        nome: "Grandioso és Tu",
        compasso: "4/4",
        velMin: 56,
        velMed: 64,
        velMax: 72,
        inicio: 3.5,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gran|di|o|so |és |Tu, |Je|sus, |Rei |da |ver|da|de,"+
            "Ne|nhu|ma |for|ça |po|de |Te |ven|cer;"+
            "A|ni|qui|las|te |o |ju|go |da |mal|da|de"+
            "E |Te |as|sen|tas|te |à |des|tra |do |Po|der." ,

            "A |Ti |de|ve|mos |nos|sa |gra|ti|dão;"+
            "Gran|di|o|so |és |Tu, |Se|nhor |Je|sus;"+
            "Tu |nos |ti|ras|te |da |es|cra|vi|dão;"+
            "Gran|di|o|so |és |Tu, |Se|nhor |Je|sus." ,

            "Gran|di|o|so |és |Tu, |Je|sus, |ó |Rei |da |gló|ria,"+
            "De |ma|jes|ta|de |co|ro|a|do |es|tás;"+
            "Em |tu|do |o |Pai |Te |con|ce|deu |vi|tó|ria,"+
            "E |a |vi|tó|ria |aos |Teus |fi|éis |da|rás." ,

            "Gran|di|o|so |és |Tu, |ó |di|vi|nal |Cor|dei|ro,"+
            "Teu |No|me |to|dos |hão |de |con|fes|sar;"+
            "Pe|ran|te |Ti, |ó |San|to |e |Ver|da|dei|ro,"+
            "To|do |o |jo|e|lho |há |de |se |do|brar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "379": { 
        nome: "Grande festa haverá nos céus",
        compasso: "4/4",
        velMin: 76,
        velMed: 80,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Per|to |es|tá |o |por|to |da |sal|va|ção,"+
            "Per|to |es|tá |o |lar |e|ter|nal;"+
            "Bre|ve|men|te |os |fi|lhos |de |Deus |ve|rão"+
            "A |Si|ão |ce|les|ti|al." ,

            "Gran|de |fes|ta |ha|ve|rá |nos |céus"+
            "Pa|ra |os |san|tos |do |Se|nhor;"+
            "A|le|lu|ia! |Gló|ria, |gló|ria |ao |nos|so |Deus!"+
            "Quan|to |é |gran|de |Seu |fa|vor!" ,

            "So|bre |as |á|guas |Cris|to |Je|sus |vi|rá,"+
            "Quan|do |o |mar |se |em|bra|ve|cer;"+
            "O |fu|ror |do |ven|to |a|pla|ca|rá"+
            "Pe|lo |i|men|so |Seu |po|der." ,

            "Cris|to, |no |Seu |rei|no, |e|xal|ta|rá"+
            "Quem |vi|ver |com |fé |e |va|lor;"+
            "E |com |gló|ria |e|ter|na |co|ro|a|rá"+
            "O |fi|el |e |ven|ce|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "380": { 
        nome: "Com Jesus eternamente viverei",
        compasso: "4/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eu |es|pe|ro, |fir|me|men|te,|com |Je|sus |ir |des|can|sar"+
            "Lá |no |céu, |a|le|gre|men|te. |A|le|lu|ia!"+
            "Do|ce |paz |mi|nh'al|ma |sen|te |tão |so|men|te |em |pen|sar:"+
            "Que |gló|ria |lá |no |céu |vou |des|fru|tar!" ,

            "Com |Je|sus |e|ter|na|men|te |vi|ve|rei"+
            "No |re|pou|so |on|de |E|le |já |en|trou;"+
            "San|ta |paz |e |a|le|gri|a |sem |i|gual |des|fru|ta|rei;"+
            "Na |pá|tria |dos |fi|éis |ha|bi|ta|rei." ,

            "De |Je|sus, |o |ros|to |san|to,|eu |no |céu |vou |con|tem|plar,"+
            "On|de |não |há |dor |nem |pran|to, |A|le|lu|ia!"+
            "Um |su|bli|me |e |no|vo |can|to |vão |os |san|tos |en|to|ar;"+
            "Que |gló|ria |lá |no |céu |vou |des|fru|tar!" ,

            "Quan|do, |no |céu |de|se|ja|do, |vi|to|ri|o|so |eu |en|trar,"+
            "Lá |ve|rei |Cris|to |e|xal|ta|do. |A|le|lu|ia!"+
            "Pa|ra |sem|pre |con|so|la|do, |ou|vi|rei |o |Seu |fa|lar;"+
            "Que |gló|ria |lá |no |céu |des|fru|tar!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "381": { 
        nome: "Mui breve virá mui breve virá",
        compasso: "6/8",
        velMin: 100,
        velMed: 113,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bre|ve |vi|rá |Je|sus |Cris|to, |o |Cor|dei|ro;"+
            "Pre|mi|a|rá |com |o |Seu |ga|lar|dão"+
            "To|do |o |fi|el |e |sin|ce|ro |o|brei|ro"+
            "Que |Lhe |con|sa|gra |o |seu |co|ra|ção." ,

            "Mui |bre|ve |vi|rá, |mui |bre|ve |vi|rá,"+
            "A|que|le |que |e|xer|ce |o |ju|í|zo, |mui |bre|ve |vi|rá;"+
            "Aos |san|tos |da|rá |o |pa|ra|í|so, |Je|sus, |Rei |dos |reis;"+
            "No |tem|po |es|pe|ra|do |e |pre|ci|so, |sim, |Cris|to |vi|rá." ,

            "Pró|xi|mo |é |o |di|a |da |vol|ta |glo|ri|o|sa"+
            "De |Je|sus |Cris|to, |o |Fi|lho |de |Deus;"+
            "Su|a |i|gre|ja |es|tá |an|si|o|sa"+
            "Por |en|con|trar|-se |com |E|le |nos |céus." ,

            "Quem, |su|as |ves|tes, |no |san|gue |pre|ci|o|so"+
            "De |Je|sus |Cris|to, |por |fé, |bran|que|ar,"+
            "Ha|bi|ta|rá |no |pa|ís |glo|ri|o|so"+
            "E |po|de|rá, |com |os |san|tos, |rei|nar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "382": { 
        nome: "Creio nas fiéis promessas do meu Deus",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cre|io |nas |fi|éis |pro|mes|sas |do |meu |Deus,"+
            "Que |se |cum|pri|rão |na |ter|ra |e |nos |céus;"+
            "Gló|ria |ao |Al|tís|si|mo |da|rão |os |Seus;"+
            "Cre|io |nas |pro|mes|sas |do |Se|nhor." ,

            "Cre|io, |cre|io"+
            "No |e|ter|no |Deus |e |em |Je|sus, |eu |cre|io;"+
            "Cre|io, |cre|io,"+
            "Fi|éis |são |as |pro|mes|sas |do |Se|nhor." ,

            "Cre|io |no |Se|nhor |que |já |me |res|ga|tou,"+
            "Pe|la |fé |em |Cris|to, |pa|ra |o |céu |eu |vou;"+
            "To|dos |meus |pe|ca|dos |E|le |can|ce|lou;"+
            "Cre|io |nas |pro|mes|sas |do |Se|nhor." ,

            "Sei |que |a |Pa|la|vra |do |meu |Cri|a|dor"+
            "Cum|pre|-Se |com|i|go, |cre|io |com |fer|vor;"+
            "E|le |não |me |dei|xa, |gran|de |é |Seu |a|mor;"+
            "Cre|io |nas |pro|mes|sas |do |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "383": { 
        nome: "Cristo é a Estrela",
        compasso: "6/8",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus |é |a |Es|tre|la"+
            "Que, |lá |dos |céus, |con|duz"+
            "O |san|to |pe|re|gri|no"+
            "Ao |rei|no |da |e|ter|na |luz." ,

            "Cris|to |é |a |Es|tre|la,"+
            "Gui|a |dos |Seus |fi|éis;"+
            "So|mos |os |Seus |re|mi|dos."+
            "Gló|ria |ao |Rei |dos |reis!" ,

            "É |Je|sus |Cris|to |a |Sen|da"+
            "Da |ce|les|ti|al |Si|ão,"+
            "Pá|tria |mui |de|se|ja|da,"+
            "On|de |te|re|mos |ga|lar|dão." ,

            "Ca|mi|nho, |e |Ver|da|de,"+
            "E |Vi|da |é |Je|sus;"+
            "Por |E|le, |nós |te|re|mos"+
            "In|tro|du|ção |no |lar |de |luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "384": { 
        nome: "Nos resgatou e nos lavou",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |Cris|to, |o |Cor|dei|ro, |du|ra |mor|te |su|por|tou;"+
            "Por |a|mor |de |nos|sas |al|mas, |Su|a |vi|da |não |pou|pou;"+
            "Com |o |Seu |pre|ci|o|so |san|gue |nos |la|vou |e |li|ber|tou;"+
            "Gló|ria |a |Je|sus, |o |Jus|to |que |nos |res|ga|tou!" ,

            "Nos |res|ga|tou |e |nos |la|vou"+
            "Com |Seu |pre|ci|o|so |san|gue, |Cris|to, |o |Re|den|tor;"+
            "Nos |li|ber|tou |e |nos |sal|vou"+
            "Do |mun|do |e |do |pe|ca|do, |Cris|to, |o |Sal|va|dor." ,

            "Pe|lo |san|gue |do |Con|cer|to, |li|ber|da|de |te|mos |nós"+
            "De |en|trar |no |san|tu|á|rio |e |ou|vir, |de |Deus, |a |voz;"+
            "Es|se |san|gue |nos |con|fir|ma |quan|to |Cris|to |nos |a|mou;"+
            "Gló|ria |a |Je|sus, |o |Jus|to |que |nos |res|ga|tou!" ,

            "So|mos, |por |Je|sus, |se|la|dos |pa|ra |a |nos|sa |re|den|ção;"+
            "Sem|pre |a|van|te, |ca|mi|nhe|mos |nes|ta |gran|de |vo|ca|ção;"+
            "Pe|lo |san|gue |i|no|cen|te, |Cris|to, |a |Deus, |nos |a|do|tou;"+
            "Gló|ria |a |Je|sus, |o |Jus|to |que |nos |res|ga|tou!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "385": { 
        nome: "Vinde após Mim",
        compasso: "3/4",
        velMin: 66,
        velMed: 77,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 48,
        velMedMeiaHora: 50,
        velMaxMeiaHora: 52,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vin|de a|pós |Mim, |fa|lou |o |Se|nhor;"+
            "Quem |O |se|guir, |na |luz |an|da|rá;"+
            "Gran|des |mis|té|rio |do |Cri|a|dor,"+
            "Cris|to |Je|sus |lhe |mos|tra|rá." ,

            "Vin|de a|pós |Mim, |con|vi|da |Je|sus,"+
            "O |Sal|va|dor, |A|mi|go |le|al,"+
            "Que, |ao |fi|el, |en|vi|a |a |luz"+
            "Pa|ra o |li|vvar |de |to|do o |mal." ,

            "En|con|tra|rá |a |sen|da |do |bem"+
            "Quem |a|ten|der |ao |Fi|lho |de |Deus;"+
            "Pre|ci|o|si|da|des |o |Mes|tre |tem"+
            "Pa|ra |do|ar |aos |san|tos |Seus." ,

            "No|bres |na |fé |por |Cris|to, |se|rão"+
            "Os |Seus |fi|éis |her|dei|ros |dos |céus,"+
            "Que, |pa|ra |sem|pre, |e|xul|ta|rão,"+
            "Con|tem|pla|rão |o |gran|de |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "386": { 
        nome: "Pela morte de Jesus",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pe|la |mor|te |de |Je|sus,"+
            "Deu|-nos |vi|da |o |Cri|a|dor,"+
            "Trou|xe |paz |e |trou|xe |luz,"+
            "Nos|so |ben|di|to |Sal|va|dor." ,

            "Não |foi |com |ou|ro |que |Cris|to |nos |com|prou,"+
            "Mas |com |Seu |san|gue |pre|ci|o|so |e |re|mi|dor,"+
            "E, |por |Su|a |gra|ça, |nos |vi|vi|fi|cou;"+
            "So|mos |co-|her|dei|ros |do |Re|den|tor." ,

            "Su|a |gra|ça |nos |do|ou,"+
            "Je|sus |Cris|to, |o |Se|nhor;"+
            "Dos |pe|ca|dos |nos |la|vou;"+
            "Va|mos |ser|vi|-Lo |com |fer|vor." ,

            "Hon|ra |e |gló|ria |ao |Se|nhor,"+
            "O |Au|tor |de |to|do |o |bem,"+
            "Que |nos |gui|a |ao |Cri|a|dor,"+
            "À |e|ter|nal |Je|ru|sa|lém." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "387": { 
        nome: "Ó Salvador, que recebeste poder",
        compasso: "4/4",
        velMin: 104,
        velMed: 115,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Sal|va|dor, |que |de |Deus |re|ce|bes|te"+
            "To|do |o |po|der |so|bre |a |ter|ra |e |os |céus,"+
            "Vem |au|men|tar |a |vir|tu|de |ce|les|te"+
            "Nes|te |meu |ser, |pa|ra |gló|ria |de |Deus." ,

            "Ó |Re|den|tor, |que |a|bris|te |a |por|ta"+
            "Do |san|tu|á|rio |e|ter|no |de |Deus,"+
            "Dá |ao |Teu |ser|vo |a |paz |que |con|for|ta,"+
            "Que |pro|me|tes|te |a |to|dos |os |Teus." ,

            "Fi|lho |de |Deus, |Tu |ven|ces|te |a |mor|te"+
            "E |vi|vo |es|tás |pa|ra |sem|pre, |Se|nhor;"+
            "De |Ti |es|pe|ro |tam|bém |es|ta |sor|te:"+
            "Res|sus|ci|tar |pa|ra |o |rei|no |de |a|mor." ,

            "No |trans|cor|rer |des|ta |mi|nha |e|xis|tên|cia,"+
            "Que|ro |hon|rar|-Te, |ó |meu |Re|den|tor;"+
            "Que|ro |um |di|a |es|tar |na |pre|sen|ça"+
            "Do |gran|de |Deus |e |fi|el |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "388": { 
        nome: "Na cidade santa",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Na |ci|da|de |san|ta |do |e|ter|no |Deus,"+
            "Pe|ca|dor |não |po|de|rá |en|trar;"+
            "Lá |só |en|tra|rão |os |es|co|lhi|dos |Seus"+
            "Pa|ra |os |bens |e|ter|nos |des|fru|tar." ,

            "Na |ci|da|de |san|ta, |por |Deus |pre|pa|ra|da,"+
            "Um |re|pou|so |e|ter|no |o |fi|el |te|rá;"+
            "De |e|ter|nais |ri|que|zas |e|la |é |a|dor|na|da"+
            "E |seu |bri|lho |não |se |a|pa|ga|rá." ,

            "A |ci|da|de |san|ta |do |e|ter|no |Rei"+
            "É |de |in|com|pa|rá|vel |es|plen|dor;"+
            "Ne|la |ha|bi|ta|rá |quem |ca|mi|nha |na |lei,"+
            "Na |per|fei|ta |lei |do |Re|den|tor." ,

            "Gran|de |a|le|gri|a, |ao |en|trar|mos |lá,"+
            "Sen|ti|rá |o |nos|so |co|ra|ção;"+
            "To|da |a |tris|te|za |a|qui |se |dei|xá|rá,"+
            "To|dos |os |com|ba|tes |ces|sa|rão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "389": { 
        nome: "Cristo Jesus chama os Seus",
        compasso: "6/8",
        velMin: 100,
        velMed: 119,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 64,
        velMedMeiaHora: 66,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus, |o |di|vi|no |Pas|tor,"+
            "Com |do|ce |voz, |cha|ma |os |Seus;"+
            "Quer |con|du|zi|-los |a |Deus, |Cri|a|dor,"+
            "Pa|ra |vi|ve|rem |nos |céus." ,

            "Cris|to |Je|sus"+
            "Cha|ma |os |Seus"+
            "Pa|ra |a |luz"+
            "Que |os |gui|a |ao |rei|no |dos |céus." ,

            "Pa|ra |lhes |dar |a |he|ran|ça |e|ter|nal,"+
            "Cris|to |Je|sus |cha|ma |os |Seus;"+
            "E|le |é |o |A|mi|go |que |não |tem |i|gual,"+
            "E|le |é |o |Fi|lho |de |Deus." ,

            "Cris|to |Je|sus, |Su|mo |Sá|bio |e |Fi|el,"+
            "Com |voz |de |a|mor, |cha|ma |os |Seus;"+
            "Su|as |pa|la|vras, |mais |do|ces |que |o |mel,"+
            "Fa|zem |que |a|me|mos |a |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "390": { 
        nome: "Eis que vem o Verdadeiro",
        compasso: "3/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eis |que |vem, |por |so|bre |as |nu|vens,"+
            "Cris|to,|nos|so |Rei |po|ten|te;"+
            "To|do |o |lho |há |de |vê|-Lo |em |Seu |gran|de |es|plen|dor,"+
            "Pois |se|rá |co|mo |o |re|lâm|pa|go |que |se |mos|tra |no |o|rien|te,"+
            "E |a|té |no |o|ci|den|te |a|pa|re|ce |o |seu |ful|gor." ,

            "Eis |que |vem |o |Ver|da|dei|ro,"+
            "O |Ju|iz |e |Con|se|lhei|ro:"+
            "Jul|ga|rá |o |mun|do |in|tei|ro"+
            "Com |jus|ti|ça |e |re|ti|dão." ,

            "Co|mo |o |sol |é |o |Seu |ros|to, |Seu |ves|ti|do |é |res|plen|den|te;"+
            "Fla|me|jan|tes |co|mo |o |fo|go |são |Seus |o|lhos |di|vi|nais;"+
            "Co|mo |a |voz |de |mui|tas |á|guas |é |a |Su|a |voz |po|ten|te;"+
            "São |mais |al|vos |do |que |a |ne|ve |Seus |ca|be|los |ce|les|ti|ais." ,

            "Nes|se |di|a |glo|ri|o|so, |que |se |en|con|tra |já |bem |per|to,"+
            "Quem, |de |pé, |pe|ran|te |Cris|to, |po|de|rá |per|ma|ne|cer?"+
            "Só |os |jus|tos |e |fi|éis |a |Deus, |que |guar|da|ram |o |Con|cer|to,"+
            "Su|bi|rão |à |e|ter|na |gló|ria |pa|ra |o |rei|no |re|ce|ber." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "391": { 
        nome: "Um peregrino sou aqui",
        compasso: "3/4",
        velMin: 58,
        velMed: 65,
        velMax: 72,
        inicio: 2.5,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Um |pe|re|gri|no |sou |a|qui,"+
            "Pois |o |meu |lar |es|tá |no |céus;"+
            "Em |bre|ve |i|rei |vi|ver |a|li,"+
            "U|ni|do |aos |fi|éis |de |Deus." ,

            "Que |a|le|gri|a |sem |i|gual"+
            "Há |de |sen|tir |meu |co|ra|ção!"+
            "Te|rei |re|pou|so |e|ter|nal"+
            "No |fim |da |pe|re|gri|na|ção." ,

            "I|ni|gua|lá|vel |ga|lar|dão"+
            "Es|pe|ro |em |bre|ve |al|can|çar;"+
            "Da |di|vi|nal |con|so|la|ção,"+
            "Jun|to |aos |fi|éis |vou |des|fru|tar." ,

            "Fin|dan|do |o |meu |pe|re|gri|nar,"+
            "I|rei |à |pá|tria |e|ter|nal;"+
            "Da|rei |lou|vo|res |sem |ces|sar"+
            "A |Deus, |o |Pai |ce|les|ti|al." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "392": { 
        nome: "Com Jesus, a Esperança",
        compasso: "4/4",
        velMin: 53,
        velMed: 68,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com |Je|sus, |a |Es|pe|ran|ça, |ca|mi|nhe|mos |com |fer|vor,"+
            "To|dos |fir|mes, |ju|bi|lan|do |em |Seu |a|mor;"+
            "Com |o |dom |da |fé |i|re|mos, |jun|to |a |Cris|to, |o |Re|den|tor,"+
            "À |e|ter|nal |Je|ru|sa|lém." ,

            "No|vo |hi|no |can|ta|re|mos |ao |Cor|dei|ro |di|vi|nal"+
            "No |su|bli|me |lar, |pá|tria |e|ter|nal;"+
            "Su|a |fa|ce |lá |ve|re|mos |e |Seu |bri|lho |sem |i|gual,"+
            "Na |e|ter|nal |Je|ru|sa|lém." ,

            "Com |Je|sus, |fi|el |Guer|rei|ro, |pe|le|je|mos |com |va|lor,"+
            "Re|sis|tin|do |ao |as|tu|to |ten|ta|dor;"+
            "Sus|ten|ta|dos |pe|la |fé, |si|ga|mos |nos|so |Re|den|tor"+
            "À |e|ter|nal |Je|ru|sa|lém." ,

            "Com |Je|sus, |a |nos|sa |For|ça, |lu|ta|re|mos |sem |te|mor,"+
            "Ven|ce|re|mos |es|te |mun|do |en|ga|na|dor;"+
            "Te|mos |vi|va |es|pe|ran|ça, |Quem |nos |gui|a |é |o |Se|nhor"+
            "À |e|ter|nal |Je|ru|sa|lém." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "393": { 
        nome: "Ó bom Jesus, meu caro Jesus",
        compasso: "6/8",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 62,
        velMedMeiaHora: 65,
        velMaxMeiaHora: 68,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |bom |Je|sus, |Teu |san|to |fa|lar"+
            "Sem|pre |co|mo|ve |meu |co|ra|ção;"+
            "Faz|-me |um |va|so |pa|ra |Te |hon|rar;"+
            "Dá|-me |Se|nhor |a |Tu|a |un|ção." ,

            "Ó |bom |Je|sus, |meu |ca|ro |Je|sus,"+
            "Faz |des|te |va|so, |ó |Re|den|tor,"+
            "Va|so |de |hon|ra, |gra|ça |e |luz,"+
            "Pa|ra |lou|var|-Te, |ó |meu |Se|nhor." ,

            "Nes|te |de|ser|to, |ca|ro |Je|sus,"+
            "Sou |pe|re|gri|no, |por |Teu |a|mor;"+
            "Vem |di|ri|gir|-me |com |Tu|a |luz,"+
            "Sê, |ó |Je|sus, |o |meu |Con|du|tor." ,

            "Pe|la |Pa|la|vra, |vem |re|ve|lar"+
            "Tu|a |von|ta|de, |o |Teu |que|rer,"+
            "Pois |eu |de|se|jo |no |céu |en|trar"+
            "Pa|ra, |ao |fim, |Con|ti|go |vi|ver." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "394": { 
        nome: "Nas moradas do Senhor",
        compasso: "4/4",
        velMin: 69,
        velMed: 74,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nas |mo|ra|das |do |Se|nhor |não |há |pran|to, |não |há |dor,"+
            "To|dos |lá |des|fru|ta|rão |o |bem |su|per|no;"+
            "Lá |tam|bém |de|se|jo |es|tar |e |a |Cris|to |en|to|ar,"+
            "Com |os |san|tos |hi|nos, |de |lou|vor |e|ter|no." ,

            "Lá |no |céu |can|ta|rei"+
            "No|vos |hi|nos |a |Je|sus, |fi|el |Cor|dei|ro."+
            "To|do |o |pran|to |fin|da|rá, |To|da |an|gús|tia |ces|sa|rá."+
            "Gló|ria |a |Deus |que, |por |a|mor, |me |fez |her|dei|ro!" ,

            "Meu |pra|zer |se|rá |sem |par |lá |no |céu, |ao |con|tem|plar,"+
            "De |Je|sus, |a |san|ta |fa|ce, |glo|ri|o|sa;"+
            "Sin|to |jú|bi|lo |em |pen|sar |que, |com |Cris|to, |i|rei |mo|rar,"+
            "Pois |te|rei |no |céu |a |he|ran|ça |pre|ci|o|sa." ,

            "Na |e|ter|nal |Je|ru|sa|lém, |on|de |e|xis|te |só |o |bem,"+
            "En|tra|rei |com |Je|sus |Cris|to, |a|le|gre|men|te;"+
            "Jun|to |aos |san|tos |can|ta|rei: |Gló|ria! |Gló|ria |ao |meu |Rei!"+
            "Re|go|zi|jo |sen|ti|rei |e|ter|na|men|te." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "395": { 
        nome: "'Eis-Me aqui', dirá o Criador",
        compasso: "4/4",
        velMin: 92,
        velMed: 102,
        velMax: 112,
        inicio: 1,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eis|-Me |a|qui, |di|rá |o |Cri|a|dor"+
            "Aos |Seus |fi|éis |que |ro|gam |Seu |fa|vor;"+
            "Deus |man|da|rá |po|der |ce|les|ti|al"+
            "Pa|ra |que os |Seus |tri|un|fem |so|bre |o |mal." ,

            "A |ge|ra|ção |dos |san|tos |do |Se|nhor"+
            "Tem, |em |seu |Deus, |po|ten|te |De|fen|sor;"+
            "Só |E|le é |Deus, |Au|tor |da |cri|a|ção;"+
            "Tu|do E|le |fez |com |luz |e |per|fei|ção." ,

            "Va|mos, |ir|mãos, |a |Deus |nos |a|che|gar,"+
            "E |nos|sa |fé |em |Deus |de|po|si|tar;"+
            "E|le |é |Pai |de |gran|de |com|pai|xão;"+
            "Te|mos |tam|bém |de |Cris|to a in|ter|ces|são." ,

            "Voz |ce|les|ti|al |o |jus|to |sen|ti|rá"+
            "Den|tro |de |si |e |re|ju|bi|la|rá;"+
            "Eis|-Me |a|qui, |di|rá |o |Cri|a|dor"+
            "Ao |Seu |fi|el |e |san|to |ser|vi|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "396": { 
        nome: "Vamos, ó irmãos, marchar",
        compasso: "4/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Va|mos, |ó |ir|mãos, |mar|char |Sem|pre |a|van|te |pa|ra |o |céu,"+
            "Con|fi|an|tes, |nas |pi|sa|das |de |Je|sus,"+
            "Pois |à |fren|te |E|le |es|tá |e |por |nós |com|ba|te|rá,"+
            "Des|fa|rá |as |tre|vas |com |a |Su|a |luz." ,

            "Com |Je|sus |mar|che|mos |à |e|ter|nal |Si|ão,"+
            "Bem |cin|gi|dos |de |jus|ti|ça |e |re|ti|dão,"+
            "Pois |à |fren|te |E|le |es|tá |e |ao |céu |nos |le|va|rá,"+
            "On|de |i|re|mos |re|ce|ber |ga|lar|dão." ,

            "Cris|to |nos |con|duz |a |Deus |com |a |Su|a |for|te |mão,"+
            "Va|lo|ro|sos, |ca|mi|nhe|mos |nes|sa |luz,"+
            "Pois |à |fren|te |E|le |es|tá, |nos|sos |pas|sos |gui|a|rá;"+
            "Con|fie|mos |em |Je|sus, |que |nos |con|duz." ,

            "Sem|pre |u|ni|dos, |ó |ir|mãos, |em |a|mor |e |co|mu|nhão,"+
            "Pros|si|ga|mos |nas |pi|sa|das |de |Je|sus,"+
            "Pois |à |fren|te |E|le |es|tá, |a |vi|tó|ria |nos |da|rá,"+
            "Se |an|dar|mos, |ó |ir|mãos, |em |Su|a |luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "397": { 
        nome: "Paz, sublime paz",
        compasso: "3/4",
        velMin: 66,
        velMed: 73,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 44,
        velMedMeiaHora: 45,
        velMaxMeiaHora: 46,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Paz , |su|bli|me |paz, |sen|ti|mos"+
            "Nós, |po|vo |do |Se|nhor,"+
            "Re|mi|dos |por |a|mor."+
            "Por |Je|sus, |a |Quem |ser|vi|mos,"+
            "Te|mos |paz |do |Cri|a|dor." ,

            "Fi|lhos |des|sa |paz |glo|ri|o|sa"+
            "Nos |fez |o |Cri|a|dor,"+
            "Por |Cris|to, o |Re|den|tor;"+
            "Pa|ra |nós |é |paz |pre|ci|o|sa,"+
            "Pois |é |bên|ção |do |Se|nhor." ,

            "Paz |ex|cel|sa en|con|tra|re|mos"+
            "No |rei|no |di|vi|nal,"+
            "Na |gló|ria |e|ter|nal;"+
            "Fa|ce a |fa|ce |lá |ve|re|mos"+
            "Deus, |o |Pai |ce|les|ti|al" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "398": { 
        nome: "Não tardará a volta do Senhor",
        compasso: "2/2",
        velMin: 50,
        velMed: 56,
        velMax: 63,
        inicio: 2.5,
        velMinMeiaHora: 32,
        velMedMeiaHora: 33,
        velMaxMeiaHora: 34,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Mar|che|mos |ir|mãos, |pe|la |sen|da |da |ver|da|de!"+
            "O |fi|el |Sal|va|dor |nos |da|rá, |do |céu, |a |pro|te|ção,"+
            "Fer|vor |e |va|lor, |e |tam|bém |a |san|ti|da|de;"+
            "Do |Se|nhor, |nos|so |Deus, |al|can|ça|mos |o |per|dão."+
            "Je|sus |mor|reu |so|bre |a |cruz |pa|ra |dar|-nos |li|ber|da|de"+
            "De |an|dar |e |O |ser|vir |em |san|ti|fi|ca|ção." ,

            "Não |tar|da|rá |a |vol|ta |do |Se|nhor |Je|sus!"+
            "Vi|rá, |ir|mãos, |pre|mi|ar |os |seus |com |ga|lar|dão;"+
            "Mas, |os |que |rei|ei|ta|rem |Su|a |luz,"+
            "Con|de|na|ção |e|ter|na |en|con|tra|rão."+
            "An|dai, |ir|mãos,"+
            "Na |fé, |na |paz, |no |a|mor |do |Rei |dos |reis." ,

            "Ir|mãos, |em |a|mor, |bem |u|ni|dos |ca|mi|nhe|mos"+
            "Com |Je|sus, |Sal|va|dor, |que |da|rá |o |ga|lar|dão |fi|nal."+
            "Lou|vor |pe|re|nal |e |ve|raz |lhe |tri|bu|te|mos"+
            "Pe|lo |bem |que |nos |fez |nos|so |Rei |ce|les|ti|al;"+
            "Por |es|se |bem |di|vi|nal |de |a|mor, |re|ce|be|re|mos"+
            "No |céu, |nos|so |lar, |a |gló|ria |e|ter|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "399": { 
        nome: "Sou a videira",
        compasso: "9/8",
        velMin: 120,
        velMed: 132,
        velMax: 144,
        inicio: 7,
        velMinMeiaHora: 75,
        velMedMeiaHora: 77,
        velMaxMeiaHora: 80,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "So|u |a |Vi|dei|ra, |dis|se |Je|sus,"+
            "Nos|so |a|ma|do, |bom |Sal|va|dor;"+
            "A |Su|a |sei|va |em |nós |pro|duz"+
            "Vi|da |ce|les|te, |e |vi|da |de |a|mor." ,

            "És |a |Vi|dei|ra, |ó |Rei |dos |reis;"+
            "So|mos |as |va|ras, |nós, |Teus |fi|éis;"+
            "Pro|du|zi|re|mos, |por |Teu |a|mor,"+
            "Fru|tos |à |gló|ria |do |Cri|a|dor." ,

            "So|u |a |Vi|dei|ra, |dis|se |Je|sus;"+
            "So|mos |re|no|vos |do |Seu |lou|vor;"+
            "A |Su|a |sei|va |vi|da |nos |dá,"+
            "Pa|ra |an|dar|mos |em |Seu |te|mor." ,

            "So|u |a |Vi|dei|ra, |dis|se |Je|sus;"+
            "N'E|la |en|xer|ta|dos |fo|mos |por |Deus;"+
            "E|le |é |Sá|bio, |bom |La|vra|dor,"+
            "Pe|la |Pa|la|vra |lim|pa |os |Seus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "400": { 
        nome: "Divina Fonte é Jesus",
        compasso: "3/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Di|vi|na |Fon|te |é |Je|sus, |de |pu|ri|fi|ca|ção,"+
            "Pois, |so|bre |a |cruz, |por |nós |ver|teu |o |san|gue |da |as|per|são;"+
            "E |nes|se |san|gue |tem |per|dão"+
            "Quem |n'E|le |crer |e |se |en|tre|gar"+
            "E, |com |sin|ce|ro |co|ra|ção, |Seu |san|to |No|me |con|fes|sar." ,

            "Cons|ci|ên|cia |em |paz,"+
            "Je|sus |nos |deu |pe|ran|te |o |gran|de |Deus;"+
            "Vir|tu|de |e |gra|ça |lá |do |céu |têm |os |re|mi|dos |Seus;"+
            "De |glo|ri|o|sa |sal|va|ção, |her|dei|ros |so|mos |por |Je|sus;"+
            "Não |res|ta |mais |con|de|na|ção. |Ben|di|to |se|ja |o |Deus |da |Luz!" ,

            "O |Sal|va|dor |res|sus|ci|tou |e |pa|ra |o |Pai |su|biu;"+
            "Do |ca|ti|vei|ro |li|ber|tou |a|que|les |que |re|miu;"+
            "Ao |céu |su|biu |o |Re|mi|dor |e |os |sal|vos |su|bi|rão |tam|bém;"+
            "Con|tem|pla|rão |o |Cri|a|dor |na |ce|les|ti|al |Je|ru|sa|lém."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "401": { 
        nome: "Revela Teu querer",
        compasso: "3/4",
        velMin: 63,
        velMed: 75,
        velMax: 88,
        inicio: 3,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Re|ve|la,|Cri|a|dor, |ao |nos|so |co|ra|ção,"+
            "O |san|to |Teu |que|rer, |a |Tu|a |in|ten|ção;"+
            "Ri|que|zas |pe|re|nais |de |di|vi|nal |ful|gor,"+
            "Con|ce|de|-nos, |Se|nhor." ,

            "Re|ve|la, |ó |bom |Pai, |ro|ga|mos |com |fer|vor,"+
            "Teus |pla|nos |e|ter|nais, |por |Teu |Con|so|la|dor."+
            "Pre|ci|o|so, |pa|ra |nós, |é |o |san|to |Teu |sa|ber"+
            "Que |nos |fa|rá |ven|cer." ,

            "Oh! |Fa|ze|-nos |cres|cer |na |i|ma|gem |de |Je|sus;"+
            "Que|re|mos |pros|pe|rar |na |gra|ça |e |na |luz."+
            "Des|ven|da, |ó |Se|nhor, |mis|té|rios |lá |dos |céus"+
            "E |pen|sa|men|tos |Teus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "402": { 
        nome: "Ó irmãos a Deus devemos...",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |ir|mãos, |a |Deus |de|ve|mos |nos|sas |fal|tas |con|fes|sar;"+
            "E|le |tem |mi|se|ri|cór|dia |e |nos |po|de |per|do|ar;"+
            "O|cul|tar |ja|mais |de|ve|mos |nos|sos |er|ros |ao |Se|nhor;"+
            "Con|fes|se|mos |nos|sas |fal|tas, |pois |é |gran|de |o |Seu |a|mor." ,

            "E|le|ve|mos |ao |E|ter|no |nos|sa |voz |em |o|ra|ção,"+
            "Com |fer|vor |hu|mil|de, |com |sin|ce|ro |co|ra|ção;"+
            "Cris|to |por |nós, |in|ter|ce|de; |E|le |é |o |nos|so |Me|di|a|dor;"+
            "Ó |ir|mãos |não |o|cul|te|mos |nos|sas |fal|tas |ao |Se|nhor." ,

            "Pe|lo |san|gue |do |Con|cer|to, |Deus |nos |quer |jus|ti|fi|car;"+
            "Nos|sas |ves|tes |sem|pre |bran|cas |po|de|re|mos |con|ser|var;"+
            "Con|fes|se|mos |nos|sas |fal|tas, |rei|ei|te|mos |to|do |o |mal,"+
            "E, |ao |fim, |re|ce|be|re|mos |a |co|ro|a |e|ter|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "403": { 
        nome: "Pefa fé uma vez...",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pe|la |fé |u|ma |vez |por |Je|sus |da|da |aos |san|tos,"+
            "Fé |per|fei|ta |que |fez |vi|to|ri|o|sos |a |tan|tos,"+
            "Não |te|me|ram |hor|ro|res |nem |es|pan|tos"+
            "Os |fi|éis |que |se|gui|ram |ao |Se|nhor." ,

            "Nas |tris|te|zas, |nas |lu|tas |e |dor,"+
            "Re|cor|ri|am |a |Cris|to |Je|sus,"+
            "Que |lhes |da|va |vir|tu|de |e |va|lor,"+
            "Pe|la |fé |que |os |gui|a|va |na |luz." ,

            "Os |cris|tãos |fo|ram, |nos |tri|bu|nais, |con|de|na|dos,"+
            "Nas |pri|sões |e|les |fo|ram, |sem |cul|pa, |lan|ça|dos,"+
            "E, |de |seus |bens |ter|res|tres, |des|po|ja|dos;"+
            "Tu|do |is|so |so|fre|ram |pe|la |fé." ,

            "Nes|sa |fé |é |que |nós, |cren|tes, |sem|pre |de|ve|mos"+
            "Ca|mi|nhar |bem |fir|ma|dos, |e |as|sim |ven|ce|re|mos;"+
            "E |um |di|a, |no |céu, |en|con|tra|re|mos"+
            "Os |fi|éis |que |a|ma|ram |ao |Se|nhor." ,

            "Lá |no |céu |não |te|re|mos |mais |dor"+
            "E |o |pran|to |tam|bém |ces|sa|rá,"+
            "Pois |o |nos|so |a|ma|do |Se|nhor,"+
            "Nos|sas |lá|gri|mas, |en|xu|ga|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "404": { 
        nome: "Por fé, recebe o grande Mestre",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Na |por|ta |do |teu |co|ra|ção,"+
            "Ba|ten|do |es|tá |o |Re|den|tor,"+
            "Je|sus, |Au|tor |da |sal|va|ção,"+
            "Que |traz |per|dão |ao |pe|ca|dor." ,

            "Por |fé, |re|ce|be |o |gran|de |Mes|tre"+
            "Que |pa|ra |Deus |te |la|va|rá."+
            "O |Dom |pre|ci|o|so |e |ce|les|te"+
            "A |tu|a |al|ma |pro|va|rá." ,

            "Em |vão |ba|ten|do |não |es|tá"+
            "A|que|le |que |mor|reu |na |cruz;"+
            "Teu |co|ra|ção |pul|san|do |es|tá?"+
            "De|pres|sa |a|bre, |é |Je|sus." ,

            "A |paz, |a |vi|da, |o |a|mor, |por |Cris|to,"+
            "Em |ti |ha|bi|ta|rão;"+
            "Por |ti |mor|reu |o |Re|mi|dor,"+
            "Pa|ra |te |dar |a |sal|va|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "405": { 
        nome: "Só por Cristo temos salvação",
        compasso: "4/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Só |o |san|gue |de |Je|sus |tem |po|der |de |nos |li|var"+
            "E |de |to|da |a |man|cha |nos |lim|par;"+
            "To|do |o |que |la|va|do |for |nes|se |san|gue |ex|pi|a|dor,"+
            "O |per|dão |te|rá |do |Cri|a|dor." ,

            "Só |por |Cris|to |te|mos |sal|va|ção,"+
            "Di|vi|nal |re|den|ção;"+
            "En|tra|re|mos |na |Si|ão |ce|les|te,"+
            "Rei|no |e|ter|no |do |bom |Deus." ,

            "Só |o |san|gue |de |Je|sus |tem |po|der |de |nos |sal|var"+
            "E |da |ten|ta|ção |nos |li|ber|tar;"+
            "Es|se |san|gue |tem |va|lor, |pois |é |o |pre|ço |do |a|mor"+
            "Com |que |nos |re|miu |o |Sal|va|dor." ,

            "Só |o |san|gue |de |Je|sus |tem |po|der |de |res|ga|tar"+
            "To|da |a |al|ma |que |se |quer |sal|var;"+
            "Vi|tu|pé|rio |e |gran|de |dor |fo|ram |pre|ço |do |fa|vor"+
            "Que |al|can|ça|mos |do |bom |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "406": { 
        nome: "A voz de Cristo te convida: Vem!",
        compasso: "4/4",
        velMin: 72,
        velMed: 78,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |voz |de |Cris|to |te |con|vi|da:"+
            "Vem! |Se|den|to, |a |Cris|to |vem!"+
            "Cha|man|do |con|ti|nu|a |o |Sal|va|dor,"+
            "Ao |ho|mem |pe|ca|dor." ,

            "Gló|ria |ao |gran|de |e |po|de|ro|so |Deus,"+
            "Que |man|dou |a |re|den|ção |dos |céus"+
            "Em |Je|sus, |a |Fon|te |do |per|dão,"+
            "E|ter|na |Sal|va|ção." ,

            "Se|den|tos, |vin|de |ao |Ma|an|ci|al"+
            "De |vi|da |e|ter|nal;"+
            "Quem |ao |con|vi|te |não |se |re|cu|sar,"+
            "Com |Cris|to |i|rá |rei|nar." ,

            "Quem |quer |à |gló|ria |ir |com |o |Se|nhor"+
            "E |ver |Seu |es|plen|dor,"+
            "Con|tri|to, |de|ve |re|ce|ber |a |luz"+
            "Pro|vin|da |de |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "407": { 
        nome: "És bendito eternamente!",
        compasso: "4/4",
        velMin: 66,
        velMed: 77,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Oh! |Quan|to |a|mo |Tu|a |lei |e|ter|na |e |di|vi|nal!"+
            "E |ne|la |eu |me|di|to |di|a |e |noi|te, |ó |Se|nhor;"+
            "Por |teus |con|se|lhos |an|do |na |jus|ti|ça |ce|les|ti|al,"+
            "Nas |ve|re|das |de |a|mor." ,

            "És |ben|di|to |e|ter|na|men|te,"+
            "Glo|ri|o|so |Cri|a|dor!"+
            "Mi|nha |al|ma, |re|ve|ren|te,"+
            "Te |a|do|ra, |ó |Se|nhor." ,

            "Teus |san|tos |tes|te|mu|lhos |me |a|le|gram,|ó |Se|nhor,"+
            "As |tu|as |sãs |pa|la|vras |são |mais |do|ces |que |o |mel,"+
            "Pois |fa|lam |das |ri|que|zas |do |Teu |rei|no |de |es|plen|dor,"+
            "Pre|pa|ra|das |ao |fi|el." ,

            "Por |Teu |ce|les|te |Es|pí|ri|to |en|si|na|-me, |ó |Deus,"+
            "E |dá|-me |as |vir|tu|des |pa|ra |Te |o|be|de|cer;"+
            "De|se|jo |ar|den|te|men|te |con|tem|plar|-Te |lá |nos |céus"+
            "E, |Con|ti|go, |en|tão |vi|ver." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "408": { 
        nome: "Jesus Cristo é o Pão celeste",
        compasso: "3/2",
        velMin: 46,
        velMed: 50,
        velMax: 54,
        inicio: 3,
        velMinMeiaHora: 32,
        velMedMeiaHora: 33,
        velMaxMeiaHora: 35,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |Cris|to |é |o |Pão |ce|les|te |que,"+
            "Por |nós,|des|ceu |dos |céus"+
            "E, |de |bên|ções, |nos |re|ves|te,"+
            "Nos |con|ce|de |paz |com |Deus."+
            "Es|te |pão |nos |traz |lem|bran|ça"+
            "Da |bon|da|de |do |Sal|va|dor,"+
            "Nos|sa |Bem-|a|ven|tu|ran|ça,"+
            "Nos|sa |Paz |e |nos|so |A|mor." ,

            "Co|mu|nhão |há |nes|te |cá|lix,"+
            "No |Seu |san|gue |ex|pi|a|dor"+
            "Que, |por |nós, |foi |der|ra|ma|do |so|bre |a |cruz,"+
            "Com |gran|de |dor;"+
            "A|nun|ci|e|mos, |pois, |a |mor|te |do |Cor|dei|ro"+
            "Do |e|ter|no |Deus,"+
            "Que |to|mou |a |du|ra |sor|te"+
            "Pa|ra |nos |le|var |aos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "409": { 
        nome: "Breve voltará Jesus Cristo",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Que |Jú|bi|lo |sem |par |ha|ve|re|mos |de |sen|tir,"+
            "Quan|do, |so|bre, |as |nu|vens, |nos|so |Rei |sur|gir!"+
            "A |Si |a|tra|i|rá |os |e|lei|tos |do |bom |Deus"+
            "Que, |com |gran|de |re|go|zi|jo, |en|tra|rão |nos |céus" ,

            "Bre|ve |vol|ta|rá |Je|sus |Cris|to, |o |Se|nhor,"+
            "Bre|ve |vol|ta|rá |em |Seu |gran|de |es|plen|dor,"+
            "Com |os |san|tos |an|jos, |que |re|co|lhe|rão"+
            "Os |que |já |ins|cri|tos |lá |no |céu |es|tão." ,

            "Do |mun|do |a |i|lu|são |não |nos |de|ve |se|du|zir,"+
            "Pois |he|ran|ça |e|ter|na |te|mos |no |por|vir;"+
            "A |gló|ria |pe|re|nal |que |i|re|mos |des|fru|tar,"+
            "To|do |o |ou|ro |des|te |mun|do |não |nos |po|de |dar." ,

            "Com |gló|ria, |en|tra|rão |na |ci|da|de |e|ter|nal"+
            "Os |a|ma|dos |do |Cor|dei|ro |di|vi|nal;"+
            "Ao |que |ven|cer, |por |fé, |es|te |mun|do |en|ga|na|dor,"+
            "No|vo |no|me |lhe |da|rá |no |céu, |o |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "410": { 
        nome: "O sangue precioso",
        compasso: "2/2",
        velMin: 46,
        velMed: 53,
        velMax: 60,
        inicio: 2.5,
        velMinMeiaHora: 30,
        velMedMeiaHora: 31,
        velMaxMeiaHora: 32,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |san|gue |pre|ci|o|so, |ver|ti|do |do |Se|nhor,"+
            "Re|di|me |e |jus|ti|fi|ca |quem |crer |no |Sal|va|dor." ,

            "Com |Seu |san|gue,"+
            "Cris|to |nos |la|vou |e |nos |pu|ri|fi|cou;"+
            "Na |cruz, |as |nos|sas |dí|vi|das |pa|gou." ,

            "Se|ja|mos |sem|pre |gra|tos, |Seu |san|gue |nos |la|vou;"+
            "Em |co|mu|nhão, |lou|ve|mos |Je|sus, |que |nos |sal|vou." ,

            "Em |bre|ve |nós |ve|re|mos, |em |gran|de |es|plen|dor,"+
            "De |gló|ria |co|ro|a|do, |Je|sus, |o |Re|mi|dor." ,
        
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "411": { 
        nome: "O vitupério de Jesus",
        compasso: "3/4",
        velMin: 54,
        velMed: 61,
        velMax: 69,
        inicio: 3,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Fe|ri|do |foi |o |Sal|va|dor, |Je|sus, |o |nos|so |Rei,"+
            "Foi |ti|do |co|mo |mal|fei|tor |e |trans|gres|sor |da |lei;"+
            "Le|va|do |foi |á |mor|te |a|troz, |de |na|da |re|cla|mou;"+
            "O |san|to |e |jus|to |Re|mi|dor |pa|gou |pe|ran|te |Deus"+
            "A |trans|gres|são |de |to|dos |nós, |a|brin|do|-nos |os |céus." ,

            "Cru|el |mar|tí|rio |su|por|tou |o |a|ma|do |Re|den|tor;"+
            "Na |mor|te |a |al|ma |der|ra|mou, |o |gran|de |Ben|fei|tor,"+
            "E, |pa|ra |o |nos|so |Deus |e |Pai, |com |san|gue |nos |com|prou;"+
            "Sal|vou|-se |gran|de |mul|ti|dão |na |o|bra |de |Je|sus;"+
            "Ben|di|to |se|ja |o |Rei |da |paz, |que |é |a |nos|sa |Luz." ,

            "Mor|reu |o |Jus|to |pe|los |maus, |por |gran|de |a|mor |de |Deus;"+
            "Saiu |da |mor|te |com |po|der, |é |Me|di|a|dor |nos |céus;"+
            "O |bom |pra|zer |do |Cri|a|dor |em |Cris|to |pros|pe|rou;"+
            "A|mai|-vos |co|mo |Eu |vos |a|mei, |fa|lou |o |Re|den|tor;"+
            "A|mou|-nos |Deus, |o |Pai |dos |céus, |man|dan|do |o |Sal|va|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "412": { 
        nome: "Senhor, recordamos aqui...",
        compasso: "3/4",
        velMin: 46,
        velMed: 52,
        velMax: 58,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se|nhor, |re|cor|da|mos |a|qui"+
            "O |Teu |sa|cri|fí|ci|o |a|troz;"+
            "Par|tin|do |o |pão |nos |lem|bra|mos |de |Ti;"+
            "Mar|tí|rio |so|fres|te |por |nós." ,

            "O |cá|lix |nos |dá |co|mu|nhão"+
            "Do |Teu |san|gue, |Cris|to |Je|sus;"+
            "So|men|te |em |Ti |há |re|al |sal|va|ção,"+
            "Tu |és |Quem |ao |céu |nos |con|duz." ,

            "Faz|-nos |dig|nos, |ó |Re|den|tor,"+
            "Da |ce|les|ti|al |co|mu|nhão"+
            "Do |Teu |cor|po e |san|gue |pre|ci|o|so, |Se|nhor;"+
            "Con|ser|va|-nos |nes|ta u|ni|ão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "413": { 
        nome: "Foi por mim que morreste",
        compasso: "4/4",
        velMin: 50,
        velMed: 59,
        velMax: 69,
        inicio: 4,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Foi |por |mim |que |mor|res|te, |Je|sus |Re|den|tor,"+
            "Por |a|mor, |pa|ra |dar|-me |a |fé;"+
            "Fé |em |Deus, |que |me |li|vra |do |mal, |ó |Se|nhor,"+
            "E |con|ser|va|-me |sem|pre |de |pé." ,

            "Ao |Cor|dei|ro |de |Deus, |sem|pre |gló|ria |da|rei,"+
            "Pois, |do |céu, |ve|io |pa|ra |sal|var;"+
            "Ao |meu |bom |Sal|va|dor |sem|pre |e|xal|ta|rei;"+
            "San|tas |bên|ções |me |faz |des|fru|tar." ,

            "Pe|lo |Teu |sa|cri|fí|ci|o, |Je|sus |Re|mi|dor,"+
            "Me |a|bis|te |o |ca|mi|nho |dos |céus;"+
            "Los |pe|ca|dos |la|vas|te |mi|nh'al|ma, |Se|nhor,"+
            "Co|mu|nhão |te|nho |a|go|ra |com |Deus." ,

            "Bom |Je|sus, |por |Teu |a|to |su|bli|me |de |a|mor"+
            "Me |trou|xes|te, |de |Deus, |o |per|dão;"+
            "Le|va|rás |mi|nha |al|ma |ao |lar |de |es|plen|dor,"+
            "On|de |re|ce|be|rei |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "414": { 
        nome: "Teu sangue imaculado",
        compasso: "4/4",
        velMin: 54,
        velMed: 61,
        velMax: 69,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Teu |san|gue i|ma|cu|la|do, |ben|di|to |Re|den|tor,"+
            "Dá |ple|na |con|fi|an|ça |de |ir |ao |Cri|a|dor;"+
            "É |um |re|fú|gio |for|te |Teu |san|gue, |ó |Se|nhor." ,

            "Ne|le |eu |fui |la|va|do |e |na|da |te|me|rei,"+
            "Sem|pre |a|gra|de|ci|do, |por |e|le, a |Deus |se|rei;"+
            "No |san|gue |do |con|cer|to, |so|cor|ro en|con|tra|rei." ,

            "Eu |fui |jus|ti|fi|ca|do |no |san|gue |Teu, |Se|nhor,"+
            "Com |e|le |vem |co|brir|-me, |por |Teu |i|men|so a|mor;"+
            "Por |e|le, |nes|ta |vi|da |pos|so |ser |ven|ce|dor." ,

            "So|b |o |pre|ci|o|so |san|gue |de |Cris|to, o |Re|mi|dor,"+
            "Eu |vi|vo |pro|te|gi|do |e |não |te|rei |pa|vor;"+
            "Ca|mi|nha|rei |a|van|te, |fir|me |no |Sal|va|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "415": { 
        nome: "Na cruz morreu o Cordeiro",
        compasso: "9/8!6/8",
        velMin: 80,
        velMed: 90,
        velMax: 100,
        inicio: 1,
        velMinMeiaHora: 55,
        velMedMeiaHora: 57,
        velMaxMeiaHora: 60,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Na |cruz |mor|reu |o |Cor|dei|ro |i|no|cen|te,"+
            "Por |meus |pe|ca|dos |ver|teu |o |Seu |san|gue;"+
            "O |Fi|lho |a|ma|do |do |O|ni|po|ten|te,"+
            "Por |mim |so|freu |a|ma|gu|ra |e |dor."+
            "A|go|ni|zan|do, |bra|dou |a |seu |Pai,"+
            "Com |for|te |voz |fez |ou|vir |Seu |cla|mor;"+
            "Che|gou |a |ho|ra |de |tu|do |cum|prir"+
            "Pa|ra |dar |vi|da |ao |pe|ca|dor." ,

            "Sin|to |um |gran|de |pe|sar |em |mi|nh'al|ma"+
            "Ao |re|cor|dar|-me |do |Seu |so|fri|men|to;"+
            "Cris|to, |o |Cor|dei|ro, |so|freu, |ten|do |cal|ma,"+
            "Pa|ra |que |o |ho|mem |pu|des|se |vi|ver."+
            "Co|mo |o|fer|ta |le|va|da |ao |al|tar,"+
            "Foi |Je|sus |Cris|to |Se |o|fe|re|cer"+
            "Em |sa|cri|fí|ci|o |a |Deus, |Pai |de |a|mor,"+
            "Pa|ra |cum|prir |to|do |o |Seu |que|rer." ,

            "Cris|to |Je|sus |ex|pi|rou |no |ma|dei|ro,"+
            "Foi |o |Seu |cor|po |le|va|do |à |ter|ra;"+
            "Mas, |des|pon|tan|do |o |di|a |ter|cei|ro,"+
            "Não |mais |a |mor|te |O |pô|de |re|ter."+
            "Ten|do |des|ci|do |um |an|jo, |dos |céus,"+
            "Não |se |pu|de|ram |os |guar|das |sus|ter;"+
            "A|pa|re|cen|do |Je|sus |Cris|to |aos |Seus,"+
            "Dis|se: |Me |é |da|do |to|do |o |po|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "416": { 
        nome: "No Calvário...",
        compasso: "4/4",
        velMin: 52,
        velMed: 57,
        velMax: 63,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |por |nós |so|freu, |"+
            "mor|reu |cru|ci|fi|ca|do, |"+
            "Foi |gran|de a |dor |do |Sal|va|dor, |"+
            "Cris|to |Je|sus, |o |Se|nhor." ,

            "No |Cal|vá|rio |mor|reu, |"+
            "cra|va|do |no |ma|dei|ro; |"+
            "Cá|lix |de |fel, |de |a|mar|gor, |"+
            "por |nós |pro|vou |o |Se|nhor." ,

            "'Per|do|a|-lhes, |ó |Pai', |"+
            "Je|sus |mor|reu, |di|zen|do. |"+
            "Gran|de |a|mor |E|le |mos|trou |"+
            "quan|do |na |cruz |ex|pi|rou." ,

            "Je|sus |res|sus|ci|tou, |"+
            "po|der |Lhe |foi |do|a|do; |"+
            "Rei|na, |nos |céus, |o |Re|den|tor, |"+
            "à |des|tra |do |Cri|a|dor." 

        ],
        temposVersos: [
            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4,

            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4,

            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4,

            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4
        ],
        notas: [
            'Eb4','G4','Bb4','Ab4','F4','G4',
            'Eb4','C5','Bb4','Ab4','G4','F4','Bb4',
            'Eb5','D5','C5','Bb4','C5','Bb4','Ab4','G4',
            'Eb4','F4','Ab4','F4','Eb4','D4','Eb4',

            'Eb4','G4','Bb4','Ab4','F4','G4',
            'Eb4','C5','Bb4','Ab4','G4','F4','Bb4',
            'Eb5','D5','C5','Bb4','C5','Bb4','Ab4','G4',
            'Eb4','F4','Ab4','F4','Eb4','D4','Eb4',

            'Eb4','G4','Bb4','Ab4','F4','G4',
            'Eb4','C5','Bb4','Ab4','G4','F4','Bb4',
            'Eb5','D5','C5','Bb4','C5','Bb4','Ab4','G4',
            'Eb4','F4','Ab4','F4','Eb4','D4','Eb4',

            'Eb4','G4','Bb4','Ab4','F4','G4',
            'Eb4','C5','Bb4','Ab4','G4','F4','Bb4',
            'Eb5','D5','C5','Bb4','C5','Bb4','Ab4','G4',
            'Eb4','F4','Ab4','F4','Eb4','D4','Eb4',
        ],
        temposNotas: [
            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4,

            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4,

            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4,

            4,4,4,4,4,12,
            4,4,4,4,4,8,8,
            4,2,2,8,4,2,2,8,
            4,2,2,8,4,4,4
        ]
    },
    "417": { 
        nome: "Recordemo-nos sempre do Mestre",
        compasso: "6/4",
        velMin: 84,
        velMed: 96,
        velMax: 108,
        inicio: 6,
        velMinMeiaHora: 56,
        velMedMeiaHora: 58,
        velMaxMeiaHora: 60,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Re|cor|de|mo|-nos |sem|pre |do |Mes|tre,"+
            "Que, |sem |cul|pa, |o |mar|tí|rio |so|freu;"+
            "Sen|do |Fi|lho |de |Deus, |Pai |ce|les|te,"+
            "Pe|los |nos|sos |pe|ca|dos |mor|reu." ,

            "Co|mo|vi|dos |por |Seu |so|fri|men|to |a|troz"+
            "E|xal|te|mos |o |Fi|lho |de |Deus;"+
            "Re|lem|bran|do |o |a|mor |que |E|le |te|ve |por |nós,"+
            "O|ra|ções |e|le|va|mos |aos |céus." ,

            "Je|sus |Cris|to |o|rou |re|ve|ren|te,"+
            "A |mis|são |já |che|ga|va |ao |fim;"+
            "Se |pos|sí|vel, |cla|mou |tris|te|men|te,"+
            "Faz |pas|sar |es|te |cá|lix |de |Mim. ",

            "A |an|gús|tia, |en|tão, |foi |mui |gran|de,"+
            "Que, |por |nós, |o |Se|nhor |su|por|tou;"+
            "Seu |su|or |trans|for|mou|-se |em |san|gue;"+
            "A |von|ta|de |do |Pai |a|cei|tou." ,
        
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "418": { 
        nome: "Só Jesus Cristo, santo Cordeiro",
        compasso: "9/8",
        velMin: 112,
        velMed: 125,
        velMax: 138,
        inicio: 7,
        velMinMeiaHora: 75,
        velMedMeiaHora: 77,
        velMaxMeiaHora: 80,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Só |Je|sus |Cris|to, |san|to |Cor|dei|ro,"+
            "Re|con|ci|li|ou|-nos |com |nos|so |Deus;"+
            "Ver|ten|do |san|gue |so|bre |o |ma|dei|ro,"+
            "Nos |pre|pa|rou |a |gló|ria |dos |céus." ,

            "Pe|lo |Seu |san|gue, |cer|tos |es|ta|mos"+
            "Que, |nos|sas |fal|tas, |a |Deus |pa|gou;"+
            "Com |re|ve|rên|cia |nós |e|xal|ta|mos"+
            "A |Je|sus |Cris|to, |que |nos |li|vrou." ,

            "Cris|to |foi |mor|to |e |se|pul|ta|do,"+
            "Mas, |tri|un|fan|te, |res|sus|ci|tou;"+
            "Fo|mos, |por |E|le, |jus|ti|fi|ca|dos,"+
            "Na |o|bra |que, |na |cruz, |con|su|mou." ,

            "A |Je|sus |Cris|to |sem|pre |lou|ve|mos,"+
            "Pois, |des|te |mun|do, |nos |se|pa|rou;"+
            "To|da |a |gló|ria |Lhe |tri|bu|te|mos,"+
            "Da |pe|na |e|ter|na |nos |li|ber|tou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "419": { 
        nome: "Fazei isto em memória de Mim",
        compasso: "2/2",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 49,
        velMedMeiaHora: 50,
        velMaxMeiaHora: 52,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sem|pre |lem|bre|mo-|no |da |mor|te"+
            "Do |nos|so |a|ma|do |e |bom | Je|sus;"+
            "Su|a |me|mó|ria |ce|le|bre|mos,"+
            "Seu |sa|cri|fí|ci|o |so|bre |a |cruz."+
            "To|ma|re|mos, |co|mo|vi|dos,"+
            "A |San|ta |Ceia |do |Se|nhor;"+
            "So|mos, |a|go|ra, |Seus |re|mi|dos"+
            "Por |Su|a |o|bra |de |gran|de |a|mor." ,

            "Nes|te |mo|men|to |o |pão |par|ti|mos,"+
            "Co|mo |Je|sus |de|ter|mi|nou,"+
            "E, |nes|ta |co|mu|nhão,"+
            "Sen|ti|mos |quan|to |o |Mes|tre |nos |a|mou;"+
            "Ao |be|ber|mos |des|te |cá|lix,"+
            "Por |man|da|men|to |do |Se|nhor,"+
            "A|nun|ci|a|mos |Su|a |mor|te"+
            "A|té |que |ven|ha |o |Re|den|tor." ,

            "Re|me|mo|re|mos |o |mar|tí|rio,"+
            "A |hu|mi|lha|ção |que |su|por|tou;"+
            "Sen|do, |de |Deus, |o |a|ma|do |Fi|lho,"+
            "Do |céu |des|ceu |e |nos |sal|vou."+
            "Re|tor|nou |ao |Pai |e|ter|no,"+
            "Mas |den|tro |em |bre|ve |vol|ta|rá"+
            "Pa|ra |nos |dar |per|pé|tua |gló|ria"+
            "No |rei|no |que |pre|pa|ra|do |es|tá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "420": { 
        nome: "Foi no Calvário...",
        compasso: "4/4",
        velMin: 50,
        velMed: 58,
        velMax: 66,
        inicio: 4,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Foi |no |Cal|vá|rio |que |Je|sus"+
            "As |nos|sas |cul|pas |can|ce|lou;"+
            "So|fren|do |gran|de |dor |na |cruz,"+
            "Com |Deus |nos |re|con|ci|li|ou." ,

            "Pe|la |mor|te |na |cruz, |nos |res|ga|tou"+
            "O |Se|nhor, |que |a |Deus |nos |a|do|tou;"+
            "Os |Seus |dons |ve|io |dar"+
            "Pa|ra |O |po|der|mos |e|xal|tar." ,

            "À |des|tra |de |Deus |Pai |es|tá"+
            "Je|sus, |fi|el |in|ter|ces|sor,"+
            "Que |sem|pre |nos |de|fen|de|rá,"+
            "Por |Seu |glo|ri|o|so |e |san|to |a|mor." ,

            "Lou|vor |e |hon|ra |ao |Cri|a|dor,"+
            "Por |ter |man|da|do |o |Sal|va|dor"+
            "Jus|ti|fi|car |o |pe|ca|dor"+
            "E |dar|-lhe |o |rei|no |de |es|plen|dor." ,
        
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "421": { 
        nome: "Recorda, por fé, minha alma",
        compasso: "6/8",
        velMin: 80,
        velMed: 96,
        velMax: 112,
        inicio: 6,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "S",
        velX3: "N",
        versos: [
            "Re|cor|da, |por |fé, |mi|nha |al|ma,"+
            "A |an|gús|tia |do |teu |Re|den|tor;"+
            "Re|cor|da |que |mui|to |te |a|ma;"+
            "Por |ti |pa|de|ceu |o |Se|nhor." ,

            "Lou|ve|mos |a |Deus, |Pai |e|ter|no,"+
            "Que |Su|as |pro|mes|sas |nos |deu;"+
            "Lou|ve|mos |Je|sus |Sem|pi|ter|no,"+
            "O |Se|nhor |do |u|ni|ver|so |e |do |céu." ,

            "O|ran|do, |e|le|vo |ao |al|to,"+
            "Ao |tro|no |do |bom |Re|den|tor,"+
            "O |meu |co|ra|ção |que, |mui |gra|to,"+
            "Ju|bi|la |por |Seu |gran|de |a|mor." ,

            "Oh! |Gló|ria |a |Deus |nas |al|tu|ras,"+
            "Pois |nos |en|vi|ou |o |Se|nhor,"+
            "A|fim |de |so|frer |a|ma|gu|ras"+
            "E |dar|-nos |Seu |rei|no |de |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "422": { 
        nome: "Jesus Cristo, fiel Cordeiro",
        compasso: "6/8!4/4",
        velMin: 80,
        velMed: 90,
        velMax: 100,
        inicio: 4,
        velMinMeiaHora: 58,
        velMedMeiaHora: 60,
        velMaxMeiaHora: 62,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |Cris|to, |fi|el |Cor|dei|ro,"+
            "Por |a|mor, |des|ceu |do |céu;"+
            "San|to, |Pu|ro |e |Ver|da|dei|ro,"+
            "Pa|ra |nos |res|ga|tar, |mor|reu." ,

            "Hu|mi|lhou|-Se |as|sim |Je|sus,"+
            "Vi|tu|pé|rio, |por |nós, |so|freu;"+
            "Pe|los |nos|sos |pe|ca|dos |pa|de|ceu;"+
            "Vi|da, |ao |res|sur|gir, |nos |deu." ,

            "Je|sus |Cris|to, |fi|el |Cor|dei|ro,"+
            "Pa|de|ceu |na |cruz |por |nós;"+
            "Mal|di|ção |se |fez |no |ma|dei|ro,"+
            "On|de |te|ve |u|ma |mor|te |a|troz." ,

            "Je|sus |Cris|to, |fi|el |Cor|dei|ro,"+
            "So|bre |a |mor|te |tri|un|fou;"+
            "U|ni|gê|ni|to |e |Ver|da|dei|ro,"+
            "O |po|der, |Deus |Lhe |ou|tor|gou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "423": { 
        nome: "Só o sangue precioso e expiador",
        compasso: "4/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Só |san|gue |pre|ci|o|so |e |ex|pi|a|dor,"+
            "Que |Je|sus |der|ra|mou |so|bre |a |cruz,"+
            "É |a|cei|to |pe|lo |nos|so |Cri|a|dor"+
            "Pa|ra |nos |con|ce|der |gra|ça |e |luz." ,

            "O |per|dão, |sal|va|ção,"+
            "Não |se |po|de |com |o |ou|ro |al|can|çar;"+
            "Só |no |san|gue |de |Je|sus |há |re|mis|são;"+
            "Só |Je|sus |po|de |a |to|dos |sal|var." ,

            "Pe|lo |san|gue |pre|ci|o|so |de |Je|sus,"+
            "A|che|gar|-nos |po|de|mos |a |Deus"+
            "E |ha|bi|tar |no |rei|no |da |di|vi|na |luz,"+
            "E|ter|nal |san|tu|á|rio |dos |céus." ,

            "Ou|ro |e |pra|ta |não |con|ce|dem |sal|va|ção;"+
            "Só |o |san|gue |de |Cris|to, |o |Se|nhor,"+
            "É |o |pre|ço |do |res|ga|te |e |do |per|dão"+
            "Con|ce|di|dos |por |Deus, |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "424": { 
        nome: "Ó Jesus, por nós morreste",
        compasso: "4/4",
        velMin: 58,
        velMed: 69,
        velMax: 80,
        inicio: 2,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Je|sus, |por |nós |mor|res|te, |com |Teu |san|gue"+
            "Nos |com|pas|te,"+
            "Do |pe|ca|do |nos |sal|vas|te, |den|tre |po|vos |e |na|ções."+
            "So|mos |reis |e |sa|cer|do|tes |ao |Au|tor |do |u|ni|ver|so;"+
            "Tu |trou|xes|te |a|mor |ex|cel|so |pa|ra |os |nos|sos |co|ra|ções,"+
            "Tu |trou|xes|te |a|mor |ex|cel|so |pa|ra |os |nos|sos |co|ra|ções." ,

            "Ó |Je|sus, |Tu |és |o |For|te, |a|bo|lis|te |a |pró|pria |mor|te;"+
            "Pre|pa|ras|te |a |gran|de |sor|te |aos |Teus |san|tos |e |fi|éis;"+
            "Vol|ta|rás |com |ma|jes|ta|de, |tri|un|fan|te |e |glo|ri|o|so;"+
            "Vol|ta|rás, |ce|les|te |Es|po|so, |Tu |vol|ta|rás, |ó |Rei |dos |reis,"+
            "Vol|ta|rás, |ce|les|te |Es|po|so, |Tu |vol|ta|rás, |ó |Rei |dos |reis." ,

            "Vol|ta|rás |com |gran|de |gló|ria, |aos |fi|éis |da|rá |vi|tó|ria,"+
            "Pois |ho|ra|ram |a |me|mó|ria |do |Teu |No|me, |ó |Se|nhor."+
            "Já |se |cum|prem |as |pro|mes|sas |do |fi|el |Con|cer|to |e|ter|no;"+
            "Gló|ria! |Gló|ria |ao |Su|per|no! |Gló|ria |a |Deus, |o |Cri|a|dor!"+
            "Gló|ria! |Gló|ria |ao |Su|per|no! |Gló|ria |a |Deus, |o |Cri|a|dor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "425": { 
        nome: "Cristo Supremo",
        compasso: "9/8",
        velMin: 108,
        velMed: 117,
        velMax: 126,
        inicio: 7,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |Su|pre|mo, |do |céu |ve|io |ao |mun|do"+
            "E |trou|xe |gra|ça, |vir|tu|de |e |paz;"+
            "Deu |vi|da |aos |mor|tos, |cu|rou |os |en|fer|mos,"+
            "Ma|ni|fes|tan|do |po|der |e|fi|caz." ,

            "Foi |sem|pre |hu|mil|de |e |o|be|di|en|te"+
            "A|té |a |mor|te, |Je|sus, |o |Se|nhor;"+
            "Ressus|ci|tou |por |jus|ti|ça |di|vi|na"+
            "E |é, |no |céu, |o |fi|el |Me|di|a|dor." ,

            "E|ra |i|no|cen|te, |mas |foi |con|de|na|do"+
            "Ao |sa|cri|fí|ci|o |da |cruz |e |da |dor;"+
            "Não |de|fen|deu|-Se, |man|te|ve|-Se |hu|mil|de;"+
            "Cá|lix |a|mar|go |pro|vou |o |Se|nhor." ,

            "Já |des|pon|ta|va |o |di|a |ter|cei|ro,"+
            "Quan|do |o |Mes|tre |à |vi|da |vol|tou."+
            "A|pre|sen|tou|-Se |aos |Seus |se|gui|do|res,"+
            "Deu|-lhes |a |paz |e |os |a|ben|ço|ou." ,

            "Foi |e|le|va|do |o |Rei |e|ter|no"+
            "E |a|sen|tou|-Se |à |des|tra |de |Deus;"+
            "Com |gran|de |gló|ria |se|rá |Seu |re|tor|no"+
            "Pa|ra |le|var |os |e|lei|tos |aos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "426": { 
        nome: "Lá no céu, o lar de amor",
        compasso: "3/4",
        velMin: 44,
        velMed: 52,
        velMax: 60,
        inicio: 3,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Es|te |mun|do |en|ga|na|dor |só |tris|te|zas |nos |dá;"+
            "Ne|le |há |pran|to, |mor|te |e |dor, |que |na |gló|ria |não |há." ,

            "Lá |no |céu, |o |lar |de |a|mor,"+
            "Não |há |mor|te, |não |há |dor,"+
            "Não |há |pran|to |e |nem |tris|te|za,"+
            "Mas |há |paz |e |es|plen|dor." ,

            "Nos|sas |lá|gri|mas, |ao |fim, |en|xu|ga|das |se|rão"+
            "Por |Deus |Pai, |o |Cri|a|dor, |na |ce|les|te |Si|ão." ,

            "Na |ci|da|de |do |Se|nhor, |on|de |é |e|ter|na |a |luz,"+
            "Os |fi|éis |con|tem|pla|rão |nos|so |a|ma|do |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "427": { 
        nome: "Os que no Senhor dormiram",
        compasso: "4/4",
        velMin: 44,
        velMed: 51,
        velMax: 58,
        inicio: 1,
        velMinMeiaHora: 36,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 38,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Os |que |no |Se|nhor |dor|mi|ram,"+
            "Des|can|san|do |já |es|tão;"+
            "Aos |he|róis |se |re|u|ni|ram"+
            "A |a|guar|dam |a |res|sur|rei|ção." ,

            "Nós |nos |re|en|con|tra|re|mos"+
            "Lá |na |pá|tria |do |Se|nhor;"+
            "Pa|ra |sem|pre |lou|va|re|mos"+
            "A |Je|sus, |o |fi|el |Re|den|tor" ,

            "So|mos |po|vo |pe|re|gri|no,"+
            "Te|mos |que |nos |se|pa|rar;"+
            "No |céu, |e|ter|nal |des|ti|no,"+
            "Nós |i|re|mos |com |Deus |ha|bi|tar." ,

            "Os |que, |com |Je|sus, |já |fo|ram,"+
            "Ter|mi|na|ram |de |lu|tar;"+
            "Com |os |san|tos |já |re|pou|sam,"+
            "Es|pe|ran|do |a |trom|be|ta |so|ar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "428": { 
        nome: "O dia de Cristo bem perto está",
        compasso: "3/4",
        velMin: 56,
        velMed: 58,
        velMax: 60,
        inicio: 3,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "O |di|a |de |Cris|to |bem |per|to |es|tá;"+
            "Aos |san|tos |que |dor|mem, |res|sus|ci|ta|rá;"+
            "Se|rão |con|so|la|dos |os |fi|lhos |de |Deus,"+
            "Por |tem|po |e|ter|no |no |rei|no |dos |céus." ,

            "As|sim |co|mo |Cris|to |su|biu |pa|ra |os |céus,"+
            "Fa|rá |que |O |si|gam |os |san|tos |de |Deus."+
            "É |E|le |o |pri|mei|ro |da |Res|sur|rei|ção;"+
            "A |mes|ma |vi|tó|ria |os |jus|tos |te|rão." ,

            "Vi|ven|tes |e|ter|nos |se|rão, |com |Je|sus,"+
            "Os |que |ca|mi|nha|ram |na |sen|da |de |luz;"+
            "No |so|no |dos |jus|tos |a|dor|me|ce|rão;"+
            "I|mor|ta|li|da|de |de |Deus |her|da|rão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "429": { 
        nome: "A trombeta soará",
        compasso: "4/4",
        velMin: 50,
        velMed: 55,
        velMax: 60,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |trom|be|ta |so|a|rá |e |do |so|no |a|cor|da|rá,"+
            "Pa|ra |o |rei|no |de |es|plen|dor, |os |que |dor|mem |no |Se|nhor;"+
            "E|les |se |le|van|ta|rão |e, |nos |céus, |en|con|tra|rão"+
            "Nos|so |e|ter|no |Sal|va|dor, |Je|sus |Cris|to, |o |Re|den|tor." ,

            "Ver|-nos|-e|mos |lá |nos |céus, |jun|to |do |vi|ven|te |Deus;"+
            "Lá |não |há |se|pa|ra|ção, |mas |e|ter|na |u|ni|ão."+
            "Mor|te |lá |não |en|tra|rá, |pois |ven|ci|da |já |es|ta|rá;"+
            "Não |há |pran|to, |não |há |dor |nas |mo|ra|das |do |Se|nhor." ,

            "Nem |a |mor|te, |nem |a |dor |nos |se|pa|ram |do |a|mor"+
            "Quem |em |nós |Deus |der|ra|mou, |por |Je|sus, |que |nos |a|mou."+
            "Nem |pre|sen|te, |nem |por|vir, |na|da |po|de |des|tru|ir"+
            "A |es|pe|ran|ça |de |en|trar, |com |Je|sus, |no |e|ter|no |lar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "430": { 
        nome: "Preciosa é, aos olhos do Criador...",
        compasso: "6/8",
        velMin: 96,
        velMed: 104,
        velMax: 112,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Pre|ci|o|sa |é, |aos |o|lhos |do |Cri|a|dor,"+
            "A |mor|te |dos |Seus |fi|lhos |a|ma|dos;"+
            "Se|rão |por |Cris|to, |res|sus|ci|ta|dos"+
            "Quan|do |a|pa|re|cer, |chei|o |de |es|plen|dor." ,

            "Bem-|a|ven|tu|ra|do"+
            "Quem |dor|me |no |Se|nhor,"+
            "Dor|me |na |es|pe|ran|ça"+
            "Do |rei|no |de |es|plen|dor." ,

            "Pre|ci|o|sa |é, |aos |o|lhos |do |Cri|a|dor,"+
            "A |mor|te |dos |que |fin|dam |a |li|da;"+
            "Se|rão |des|per|tos |pa|ra |a |vi|da,"+
            "Vi|da |e|ter|nal |com |o |Sal|va|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "431": { 
        nome: "Ó meninos, estamos reunidos",
        compasso: "4/4",
        velMin: 63,
        velMed: 75,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |me|ni|nos, |nós |es|ta|mos"+
            "Re|u|ni|dos |an|te |o |bom |Pas|tor;"+
            "An|si|o|sos, |es|pe|ra|mos"+
            "Seus |con|se|lhos |de |a|mor." ,

            "Nós |es|ta|mos |na |pre|sen|ça"+
            "Do |ve|raz, |fi|el |e |bom |Pas|tor,"+
            "Des|fru|tan|do |Su|as |bên|ções"+
            "Que |pro|vêm |do |Seu |a|mor." ,

            "Ó |me|ni|nos, |a|ten|da|mos"+
            "A |Je|sus, |di|vi|no |Sal|va|dor,"+
            "Pois |é |d'E|le |que |es|pe|ra|mos"+
            "A |vir|tu|de |e |o |vi|gor." ,

            "Ó |me|ni|nos, |com |fir|me|za"+
            "Nós |de|ve|mos |sem|pre |ca|mi|nhar;"+
            "É |e|ter|na |a |ri|que|za"+
            "Que |Je|sus |nos |ve|io |dar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "432": { 
        nome: "Vem, ó divino Mestre",
        compasso: "4/4",
        velMin: 84,
        velMed: 96,
        velMax: 108,
        inicio: 4,
        velMinMeiaHora: 56,
        velMedMeiaHora: 58,
        velMaxMeiaHora: 60,
        MeiaHora: "N",
        velX3: "N",
        versos: [
        "Se|nhor |Je|sus, |bom |Re|den|tor,"+
        "En|vi|a |Teu |po|der;"+
        "Re|ves|te |os |san|tos |Teus, |Se|nhor,"+
        "De |for|ça |e |sa|ber." ,

        "Vem, |ó |di|vi|no |Mes|tre,"+
        "Dá|-nos |sa|ber |ce|les|te;"+
        "Nós |so|mos |pe|que|ni|nos,"+
        "Mas |Tu |és |nos|so |Rei" ,

        "Je|sus |Cor|dei|ro |di|vi|nal,"+
        "I|men|so |é |Teu |a|mor;"+
        "E |nes|se |a|mor |ce|les|ti|al"+
        "Vi|ve|mos, |ó |Se|nhor." ,

        "Nas |nu|vens, |ó |Se|nhor |Je|sus,"+
        "Que|re|mos |Te |en|con|trar"+
        "E, |no |glo|ri|o|so |lar |de |luz,"+
        "Con|ti|go |ha|bi|tar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "433": { 
        nome: "Na santa escola",
        compasso: "3/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 3,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Es|ta|mos, |ó |me|ni|nos, |na es|co|la |do |Se|nhor;"+
            "Can|te|mos |san|tos |hi|nos |a |Deus, |o |Cri|a|dor."+
            "Na |san|ta es|co|la |do |Mes|tre e|ter|no |há |bem |su|per|no." ,

            "Je|sus, |o |nos|so |Mes|tre, |en|si|na |com |a|mor"+
            "A e|ter|na |lei |ce|les|te, |que |le|va ao |Cri|a|dor."+
            "Na |san|ta es|co|la |o |Mes|tre a|ma|do |é |a|do|ra|do." ,

            "O |san|to |E|van|ge|lho |vi|e|mos |a|pren|der;"+
            "De |Cris|to |o |con|se|lho |que|re|mos |a|ten|der."+
            "Na |san|ta es|co|la |o |mes|tre en|si|na |a |sã |dou|tri|na." ,

            "Ó |jo|vens |e |me|ni|nos, |de|ve|mos |con|ser|var"+
            "Os |di|vi|nais |en|si|nos |e |ne|les |ca|mi|nhar."+
            "Na |san|ta es|co|la |ao |Mes|tre ou|vi|mos |e |O |ser|vi|mos." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "434": { 
        nome: "A minha alma sente paz no Senhor",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 3.5,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |mi|nha |al|ma |sen|te |paz |no |Se|nhor, |"+
            "Paz |e|ter|nal, |paz |sem |i|gual; |\n"+
            "Por |es|sa |paz |i|rei |ao |rei|no |de a|mor, |"+
            "Rei|no |ce|les|ti|al. |\n\n" ,

            "Meu |co|ra|ção |já |sen|te o |gran|de |a|mor |"+
            "Que |vem |dos |céus, |que |vem |dos |céus; |\n"+
            "E|ter|na|men|te |eu |se|rei |do |Se|nhor; |"+
            "Gran|de é |o a|mor |de |Deus! |\n\n" ,

            "Por |Seu |a|mor |Je|sus |tor|nou|-me |fe|liz, |"+
            "Mui|to |fe|liz, |mui|to |fe|liz. |\n"+
            "I|rei |com |E|le |ao |e|ter|no |pa|ís, |"+
            "Ce|les|ti|al |pa|ís."

        ],
        temposVersos: [
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,8,2,4,2,2,
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,4,4,8,

            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,8,2,4,2,2,
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,4,4,8,

            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,8,2,4,2,2,
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,4,4,8,
        ],
        notas: [
            'G4','A4','B4','C5','B4','A4','G4','E4','E4','D4','C4',
            'D5','D5','B4','G4','E5','E5','D5','C5',
            'G4','A4','B4','C5','B4','A4','G4','E4','E4','D4','C4',
            'D5','D5','B4','G4','D5','C5',

            'G4','A4','B4','C5','B4','A4','G4','E4','E4','D4','C4',
            'D5','D5','B4','G4','E5','E5','D5','C5',
            'G4','A4','B4','C5','B4','A4','G4','E4','E4','D4','C4',
            'D5','D5','B4','G4','D5','C5',

            'G4','A4','B4','C5','B4','A4','G4','E4','E4','D4','C4',
            'D5','D5','B4','G4','E5','E5','D5','C5',
            'G4','A4','B4','C5','B4','A4','G4','E4','E4','D4','C4',
            'D5','D5','B4','G4','D5','C5'
        ],
        temposNotas: [
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,8,2,4,2,2,
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,4,4,8,

            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,8,2,4,2,2,
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,4,4,8,

            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,8,2,4,2,2,
            2,2,2,4,4,4,4,2,4,2,8,
            2,4,2,4,4,8,
        ]
    },
    "435": { 
        nome: "Ó Jesus, quanto és piedoso!",
        compasso: "3/4",
        velMin: 63,
        velMed: 69,
        velMax: 76,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Je|sus, |quan|to és |pi|e|do|so,"+
            "In|fi|ni|to é |Teu |a|mor!"+
            "Com |o |Teu |po|der |glo|ri|o|so,"+
            "Faz |de |mim |Teu |ser|vi|dor;"+
            "De|di|ca|do e |fer|vo|ro|so,"+
            "Que|ro a|mar|-Te, |ó |Se|nhor." ,

            "Nes|te |mun|do |sou |cri|an|ça,"+
            "Só |por |mim |não |pos|so an|dar,"+
            "Mas |eu |te|nho |con|fi|an|ça"+
            "De |po|der |no |céu |en|trar;"+
            "Tu|a |voz |su|a|ve e |man|sa"+
            "Sem|pre |vem |me |en|si|nar." ,

            "Te|nho em |mim |a |es|pe|ran|ça"+
            "De al|can|çar, |ó |Sal|va|dor,"+
            "A |su|bli|me e e|ter|na he|ran|ça"+
            "No |Teu |rei|no |de es|plen|dor;"+
            "Dá|-me |fé |e |se|gu|ran|ça,"+
            "Luz, |vir|tu|de |e |vi|gor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "436": { 
        nome: "Alegria sinto em servir Jesus",
        compasso: "4/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|le|gri|a |sin|to |em |ser|vir |Je|sus,"+
            "A|le|gri|a |que, |no |mun|do, |não |há |i|gual;"+
            "Bem |por |is|so |si|go |a |e|ter|na |luz"+
            "Da |jus|ti|ça |di|vi|nal." ,

            "Pri|vi|lé|gio |san|to, |sem |i|gual, |é |an|dar |com |meu |Se|nhor,"+
            "Ca|mi|nhar |em |Seu |a|mor, |e|xal|tan|do |ao |Cri|a|dor!"+
            "De|se|ja|mos |ver |re|tor|nar |dos |céus"+
            "Cris|to, |o |Rei |e |Sal|va|dor." ,

            "Re|go|zi|jo |e |re|al |con|so|la|ção,"+
            "Paz |di|vi|na |e |ce|les|ti|al |a|mor,"+
            "Me |pres|er|vam |des|te |mun|do |de |i|lu|são"+
            "E |me |u|nem |ao |Se|nhor." ,

            "Ó |a|ma|dos, |ca|mi|nhe|mos |com |Je|sus,"+
            "N'E|le |te|mos |vi|da |e|ter|na |e |sal|va|ção;"+
            "Se |a|qui |ma|ni|fes|tar|mos |Su|a |luz,"+
            "Nós |te|re|mos |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "437": { 
        nome: "Os meninos viram Jesus passar",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Os |me|ni|nos |vi|ram |Je|sus |pas|sar;"+
            "Lo|go |O |se|gui|ram |pa|ra |pro|cla|mar:"+
            "Gló|ria |ao |que |ve|io em |no|me |do |Se|nhor!"+
            "Foi |en|gran|de|ci|do |o |Re|den|tor." ,

            "Va|mos |e|xal|tar |a |Je|sus, |en|tão,"+
            "Com |os |nos|sos |lá|bios |e |o |co|ra|ção;"+
            "Ó |me|ni|nos, |va|mos |ao |Se|nhor |ser|vir"+
            "E |a |lei |per|fei|ta |de |Deus |cum|prir." ,

            "Eis |que, |en|tre |nós, |Je|sus |Cris|to es|tá;"+
            "E|le, |que |nos |vê, |nos |a|ben|ço|a|rá;"+
            "As |vir|tu|des |san|tas |quer |nos |con|ce|der,"+
            "Pa|ra |que |pos|sa|mos |o |mal |ven|cer." ,

            "Em |si|lên|ci|o ou|ça|mos |o |que |di|rá"+
            "Cris|to, o |nos|so |Mes|tre, |que |en|si|na|rá"+
            "A |dou|tri|na |san|ta |que |con|duz |aos |céus;"+
            "Ó |me|ni|nos, |va|mos |a|mar |a |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "438": { 
        nome: "Oh! Que amor celeste!",
        compasso: "6/8",
        velMin: 100,
        velMed: 119,
        velMax: 138,
        inicio: 6,
        velMinMeiaHora: 68,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bem |per|to |es|tá |dos |Seus |fi|éis"+
            "Je|sus, |o |gran|de |Mes|tre;"+
            "Ja|mais |nos |dei|xa |o |Rei |dos |reis,"+
            "Oh! |Que |a|mor |ce|les|te!" ,

            "Per|to |es|tá |o |Sal|va|dor"+
            "Los |que |O |têm |por |seu |Pas|tor;"+
            "Não |nos |dei|xa |o |Re|den|tor;"+
            "Oh! |Que |a|mor |ce|les|te!" ,

            "Je|sus, |o |nos|so |Re|den|tor,"+
            "Do |al|to |nos |re|ves|te;"+
            "Nas |pro|vas, |lu|tas |ou |na |dor,"+
            "Pre|sen|te |es|tá |o |Mes|tre." ,

            "Na |nos|sa |pe|re|gri|na|ção"+
            "É |Cris|to |Quem |nos |gui|a;"+
            "Es|ten|de |sem|pre |a |Su|a |mão,"+
            "Nos |guar|da |noi|te |e |di|a." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "439": { 
        nome: "Somos jovens",
        compasso: "4/4",
        velMin: 66,
        velMed: 79,
        velMax: 92,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 45,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "So|mos |jo|vens, |mas |de|ve|mos |sem|pre |an|dar"+
            "No |te|mor |do |Cri|a|dor;"+
            "O |Mo|de|lo |san|to |va|mos |i|mi|tar:"+
            "Je|sus |Cris|to, |o |Sal|va|dor." ,

            "Em |a|mor, |com |vi|gor,"+
            "Nós, |jo|vens, |va|mos |ca|mi|nhar!"+
            "Mos|tran|do |a |luz |do |Sal|va|dor"+
            "E |hon|ran|do |ao |Cri|a|dor." ,

            "Cris|to |é |a |Luz |di|vi|na |pa|ra |nós,"+
            "Ve|mos |n'E|le |a |per|fei|ção;"+
            "Ou|vi|re|mos , |sem|pre |a|ten|tos, |Su|a |voz,"+
            "Que |con|so|la |o |co|ra|ção." ,

            "Se |se|guir|mos |sem|pre |fir|mes |ao |Se|nhor,"+
            "Com |sin|ce|ro |co|ra|ção,"+
            "E|le |nos |da|rá, |no |rei|no |de |es|plen|dor,"+
            "O |glo|ri|o|so |ga|lar|dão." ,
        
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "440": { 
        nome: "Lembra-te do teu Criador!",
        compasso: "4/4",
        velMin: 63,
        velMed: 77,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nós |di|as |da |tu|a |pe|re|gri|na|ção,"+
            "U|sa |o |tem|po |ser|vin|do |ao |Se|nhor"+
            "E, |com |a|le|gri|a, |cum|pre |a |mis|são;"+
            "Lem|bra|-te |do |Cri|a|dor!" ,

            "De|bai|xo |do |sol |tu|do |é |vai|da|de,"+
            "Re|cor|re |a |Deus, |o |For|ma|dor;"+
            "Nós |bre|ves |di|as |da |mo|ci|da|de,"+
            "Não |te |es|que|ças |do |Se|nhor!" ,

            "Os |pre|di|tos |di|as |lo|go |hão |de |vir,"+
            "Ser|ve, |pois, |a |Deus, |o |For|ma|dor;"+
            "Vin|de, |ó |ben|di|tos, |tu |i|rás |ou|vir"+
            "De |Je|sus, |teu |Re|den|tor." ,

            "Mes|mo |ten|do, |nes|te |mun|do, |mui|tos |bens"+
            "E |a |vi|da |chei|a |de |vi|gor,"+
            "É |maior |a |he|ran|ça |que, |na |gló|ria, |tens"+
            "Com |o |san|to |Cri|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "441": { 
        nome: "Eu sou um cordeirinho",
        compasso: "2/2",
        velMin: 52,
        velMed: 60,
        velMax: 69,
        inicio: 2.5,
        velMinMeiaHora: 34,
        velMedMeiaHora: 35,
        velMaxMeiaHora: 37,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Eu |sou |um |cor|dei|ri|nho, |Je|sus |é |o |meu |Pas|tor;"+
            "Des|fru|to |Seu |ca|ri|nho |e |Seu |su|bli|me |a|mor;"+
            "Nas|ci |no |Seu |re|ba|nho, |por |gra|ça |di|vi|nal;"+
            "Não |si|go |a |voz |do |es|tra|nho, |mas |só |a |Pa|ter|nal." ,

            "Eu |sou |um |cor|dei|ri|nho, |Je|sus |é |o |meu |Pas|tor;"+
            "Sou |um |fe|liz |me|ni|no |nos |bra|ços |do |Se|nhor;"+
            "A |Su|a |voz |co|nhe|ço, |tam|bém |o |Seu |que|rer;"+
            "A |E|le |o|be|de|ço, |dis|pos|to |e |com |pra|zer." ,

            "So|zi|nho |no |de|ser|to, |ja|mais |eu |pos|so |an|dar;"+
            "Je|sus |es|tá |bem |per|to |a |fim |de |me |guar|dar;"+
            "É |gran|de |o |cu|da|do |que |E|le |tem |por |mim;"+
            "O |meu |Pas|tor |a|ma|do |me |gui|a |a|té |o |fim." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "442": { 
        nome: "Bênçãos, bênçãos Deus derramará",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 41,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Bên|ções |co|mo |chu|va |se |der|ra|ma|rão"+
            "So|bre |a|que|les |que |a |Deus |ser|vir,"+
            "E, |dos |céus, |as |por|tas |não |se |fe|cha|rão,"+
            "Bens |ce|les|tes |po|de|rá |fru|ir." ,

            "Bên|ções, |bên|ções |Deus |der|ra|ma|rá,"+
            "Bên|ções |que, |no |mun|do, |i|guais |não |há;"+
            "E|le, |a|qui, |te |dá |as |bên|ções |tem|po|rais"+
            "E, |por |fim, |no |céu, |as |e|ter|nais." ,

            "Se |o|be|de|ceres |ao |teu |Cri|a|dor,"+
            "Tu |se|rás |ben|di|to |do |Se|nhor;"+
            "O |Seu |for|te |bra|ço |E|le |es|ten|de|rá"+
            "E |em |teu |fa|vor |tra|ba|lha|rá." ,

            "O |que |Deus |te |pe|de, |de|ves |tu |fa|zer"+
            "E |so|men|te |a |E|le |o|be|de|cer,"+
            "Pois |Deus |é |con|ti|go, |te |a|ju|da|rá"+
            "E |dos |céus |te |a|ben|ço|a|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "443": { 
        nome: "Ó meninos, Deus vos convida",
        compasso: "4/4",
        velMin: 60,
        velMed: 74,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ò |me|ni|nos, |Deus |vos |con|vi|da"+
            "Pa|ra |a |gran|de |fes|ta |nos |céus;"+
            "Re|go|zi|jo |e|ter|no |e |vi|da"+
            "A|cha|reis |no |rei|no |de |Deus."+
            "Gran|de |gló|ria |lá |vos |a|guar|da,"+
            "Bên|ção |que |a|qui |não |te|reis"+
            "A|ten|dei, |pois |Cris|to |não |tar|da;"+
            "Bre|ve|men|te |vós |O |ve|reis." ,

            "Des|lum|bran|te |é |a |be|le|za"+
            "Das |mo|ra|das |do |Cri|a|dor,"+
            "Que |re|ser|va |es|sa |ri|que|za"+
            "Aos |re|mi|dos |por |Seu |a|mor."+
            "Vós |ve|reis |na |gló|ria |ce|les|te,"+
            "Gló|ria |on|de |tu|do |é |es|plen|dor,"+
            "To|dos |quan|tos |se|guem |ao |Mes|tre,"+
            "Je|sus |Cris|to, |nos|so |Se|nhor." ,

            "Tão |so|men|te |san|ti|fi|cai|-vos"+
            "Pe|la |for|ça |do |nos|so |Deus;"+
            "De |jus|ti|ça |sem|pre |a|dor|nai|-vos,"+
            "Pa|ra |a |gran|de |fes|ta |nos |céus."+
            "To|dos |jun|tos |nós |su|bi|re|mos,"+
            "Com |Je|sus, |ao |Pai |ce|les|ti|al;"+
            "Di|an|te |d'E|le |en|to|a|re|mos"+
            "Hi|nos |de |lou|vor |e|ter|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "444": { 
        nome: "Ó meninos, exaltemos",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ò |me|ni|nos, |e|xal|te|mos |a |Je|sus, |o |Sal|va|dor;"+
            "Sem|pre |a|le|gres, |se|gui|re|mos |ao |a|ma|do |e |bom |Pas|tor,"+
            "Pois |na |bo|ca |das |cri|an|ças |é |per|fei|to |lou|vor"+
            "A |Je|sus, |nos|sa |Es|pe|ran|ça, |e |a |Deus, |o |Cri|a|dor." ,

            "Nes|ta |ter|ra |pro|cla|me|mos |que |Je|sus |é |o |Sal|va|dor;"+
            "Com |fer|vor, |ma|ni|fes|te|mos |Seu |su|bli|me |e |gran|de |a|mor;"+
            "Quan|do |jun|tos |es|ti|ver|mos |na |ci|da|de |de |es|plen|dor,"+
            "To|dos |nós |con|tem|pla|re|mos |nos|so |a|ma|do |Re|den|tor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "445": { 
        nome: "Ajuntemos um tesouro eterno",
        compasso: "4/4",
        velMin: 72,
        velMed: 82,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 44,
        velMedMeiaHora: 45,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|jun|te|mos, |ó |me|ni|nos, |nos|so |bom |te|sou|ro"+
            "Lá |nos |céus |de |a|mor,"+
            "On|de |ha|bi|ta |nos|so |Mes|tre"+
            "E |o |Pai |e|ter|no, |nos|so |Cri|a|dor." ,

            "A|jun|te|mos |um |te|sou|ro |e|ter|no"+
            "On|de |ha|bi|ta |nos|so |Deus |su|per|no."+
            "Nós |céus |os |bens |ja|mais |se |a|ca|ba|rão." ,

            "Ri|cos |das |e|ter|nas |bên|ções |e |do |dons |ce|les|tes"+
            "Que |nos |vêm |de |Deus,"+
            "Ca|mi|nhe|mos |nas |ve|re|das |da |jus|ti|ça |e|ter|na,"+
            "Que |nos |le|va |aos |céus." ,

            "Ao |sair|mos |des|te |mun|do, |tu|do |dei|xa|re|mos,"+
            "Tu|do |fin|da|rá;"+
            "O |te|sou|ro |a|jun|ta|do |na |e|ter|na |gló|ria"+
            "Sem|pre |du|ra|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "446": { 
        nome: "Vós, ó jovens do Senhor",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vós, |ó |jo|vens |do |Se|nhor, |dai|-Lhe |hon|ra |e |lou|vor,"+
            "Es|for|çai|-vos |por |ser|vir |ao |Rei |dos |reis;"+
            "Re|ves|ti|-vos, |pois, |de |fé |e |do |Seu |i|men|so |a|mor;"+
            "O |que |d'E|le |pre|ci|sar|des |vós |te|reis." ,

            "Vós, |ó |jo|vens |do |Se|nhor, |oh! |a|mai|-O |com |fer|vor,"+
            "O |que |E|le |vos |man|dar, |pro|cu|rai |e|xu|cu|tar;"+
            "Mo|ra|reis |com |Deus |em |Seu |lar;"+
            "Di|li|gen|tes |se|de |vós, |E|le |não |vos |dei|xa |sós,"+
            "Mas |con|vos|co |es|ta|rá |e |as |for|ças |vos |da|rá,"+
            "Pois |a |gra|ça |n'E|le |es|tá." ,

            "Sois |re|mi|dos, |ó |ir|mãos, |sois |a|ma|dos |de |Je|sus"+
            "E |sois |for|tes |pa|ra |su|plan|tar |o |mal;"+
            "Pe|lo |bom |con|so|la|dor |vós |te|reis |vir|tu|de |e |luz;"+
            "Sim, |cres|cei |na |es|ta|tu|ra |di|vi|nal." ,

            "Se |vi|er |o |ten|ta|dor |com |o|fer|tas |vos |ten|tar,"+
            "In|ci|tan|do|-vos |a |ma|les |com|te|ter,"+
            "Re|cor|rei |ao |Sal|va|dor, |E|le |vos |vi|rá |li|vrar;"+
            "Vós, |ó |jo|vens, |não |de|veis |ja|mais |ce|der." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "447": { 
        nome: "Brilha mais e mais",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Es|tás |na |sen|da |di|vi|nal |que |te |faz |bri|lhar;"+
            "O |teu |lu|gar |ce|les|ti|al, |Deus |i|rá |te |dar."+
            "Bri|lha |mais |e |mais." ,

            "Bri|lha |mais |e |mais,"+
            "Ca|mi|nha |com |Je|sus;"+
            "Te|rás |em |ti |a |Su|a |luz,"+
            "Bri|lhan|do |sem|pre |mais." ,

            "É |teu |de|se|jo |re|ce|ber |dons"+
            "Do |teu |Se|nhor?"+
            "Ve|rás |que |há |no |Seu |sa|ber"+
            "San|to |res|plen|dor." ,

            "Re|pou|so |e|ter|no |há |no |céus"+
            "Jun|to |ao |bom |Je|sus;"+
            "Por |fim |ve|rás |o |gran|de |Deus"+
            "On|de |ha|bi|ta |a |luz." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "448": { 
        nome: "Sou criança, Senhor",
        compasso: "6/8",
        velMin: 92,
        velMed: 109,
        velMax: 126,
        inicio: 6,
        velMinMeiaHora: 58,
        velMedMeiaHora: 61,
        velMaxMeiaHora: 64,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sou |cri|an|ça, |Se|nhor, |mas |de|se|jo |se|guir"+
            "Os |Teus |pas|sos |na |sen|da |de |luz;"+
            "Teus |con|se|lhos |de |a|mor |eu |al|me|jo |ou|vir"+
            "Aos |Teus |pés, |ó |a|má|vel |Je|sus." ,

            "Sou |cri|an|ça, |mas |cren|te |em |Je|sus,"+
            "Meu |a|ma|do |e |di|vi|no |Pas|tor,"+
            "Que |em |mim |faz |bri|lhar |Su|a |luz,"+
            "Con|du|zin|do|-me |ao |rei|no |de |a|mor." ,

            "Sou |cri|an|ça, |Se|nhor, |mas |fi|el |que|ro |ser"+
            "À |Pa|la|vra |que |li|vra |do |mal;"+
            "Com |a|mor |e |fer|vor |eu |al|me|jo |cres|cer"+
            "Nas |vir|tu|des |da |vi|da |e|ter|nal." ,

            "Sou |cri|an|ça, |Se|nhor, |mas |ze|lo|so |do |bem,"+
            "Tu|as |bên|ções |es|tão |so|bre |mim;"+
            "Ca|mi|nhan|do |em |a|mor, |em |jus|ti|ça |tam|bém,"+
            "Eu |se|rei |co|ro|a|do |ao |fim." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "449": { 
        nome: "O meu nome no céu escreveste, Senhor",
        compasso: "3/4",
        velMin: 66,
        velMed: 79,
        velMax: 92,
        inicio: 3,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "As |ri|que|zas |ce|les|tes |eu |al|me|jo, |Se|nhor,"+
            "Os |te|sou|ros |da |ter|ra |têm |pe|que|no |va|lor."+
            "Com |fer|vor |eu |Te |ro|go, |ó |e|ter|no |Deus |meu,"+
            "Que |con|ser|ves |es|cri|to |o |meu |no|me |no |céu." ,

            "O |meu |no|me |no |céu |es|cre|ves|te, |Se|nhor,"+
            "No |Teu |li|vro |da |vi|da, |por |Teu |gran|de |a|mor." ,

            "Que |ven|tu|ra |su|bli|me! |Que |te|sou|ro |sem |par!"+
            "Pois |ve|rei |Teu |sem|blan|te, |ou|vi|rei |Teu |fa|lar;"+
            "O |meu |no|me |não |ris|ques, |eu |im|plo|ro, |Se|nhor;"+
            "En|tre |os |Teus |es|co|lhi|dos |que|ro |es|tar, |Cri|a|dor." ,

            "Tu |me |pre|des|ti|nas|te |pa|ra |ser |fi|lho |Teu,"+
            "Pa|ra |ser |Teu |her|dei|ro, |com |os |san|tos, |no |céu;"+
            "Co|mo |pos|so |pa|gar|-Te |es|sa |gran|de |mer|cê?"+
            "Pois |em |mim |co|lo|cas|te |a |es|pe|ran|ça |e |a |fé." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "450": { 
        nome: "Vamos, queridos, escolher a boa parte",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 44,
        velMaxMeiaHora: 46,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Va|mos, |que|ri|dos, |es|co|lher"+
            "A |bo|a |par|te |pa|ra |nós,"+
            "Sem|pre |ou|vin|do, |com |pra|zer,"+
            "De |Je|sus |Cris|to, |a |do|ce |voz." ,

            "Gran|de |bem, |sem |i|gual,"+
            "É |es|tar |di|an|te |do |Se|nhor;"+
            "Su|a |voz |di|vi|nal"+
            "Nos |en|si|na |com |su|bli|me |a|mor." ,

            "Não |há |no |mun|do |na|da |i|gual"+
            "Ao |re|go|zi|jo |de |es|tar"+
            "Aos |pés |do |Mes|tre |di|vi|nal,"+
            "A |Quem |de|ve|mos |sem|pre |a|mar." ,

            "A |bo|a |par|te |que |nos |dá"+
            "Cris|to |Je|sus, |o |Re|den|tor,"+
            "Na|da |de |nós |a |to|ma|rá,"+
            "Se |a|guar|dar|mos |com |a|mor."

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "451": { 
        nome: "Jamais esquecerei Tua mercê",
        compasso: "6/8",
        velMin: 104,
        velMed: 118,
        velMax: 132,
        inicio: 1,
        velMinMeiaHora: 65,
        velMedMeiaHora: 67,
        velMaxMeiaHora: 70,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Não |po|de|rei |ja|mais |es|que|cer"+
            "Tu|a |mer|cê, |Se|nhor;"+
            "Des|te |aos |pe|que|nos |de |co|nhe|cer"+
            "Tu|a |gran|de|za |e |a|mor." ,

            "Ja|mais |es|que|ce|rei"+
            "Tu|a |mer|cê, |ó |Cri|a|dor;"+
            "Por |Cris|to |al|can|ça|rei"+
            "Gran|de |te|sou|ro |de |a|mor." ,

            "Oh! |Que |te|sou|ro |de |es|plen|dor"+
            "Tu |me |da|rás |nos |céus;"+
            "Não |há |he|ran|ça |de |i|gual |va|lor"+
            "Pa|ra |Teus |fi|lhos, |ó |Deus." ,

            "Se |eu |an|dar |sem|pre |em |Teu |te|mor,"+
            "Ao |fim |eu |en|tra|rei"+
            "No |rei|no |e|ter|no |de |es|plen|dor,"+
            "On|de |o |re|pou|so |te|rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "452": { 
        nome: "Jesus, ó divinal Pastor",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus, |ó |di|vi|nal |Pas|tor,"+
            "O |Teu |re|ba|nho |quer |Te |ou|vir;"+
            "Com |teu |Es|pí|ri|to, |ó |Se|nhor,"+
            "Vem |es|te |cul|to |pre|si|dir."+
            "Nós |so|mos |to|dos |cor|dei|ri|nhos"+
            "Do |Teu |a|pris|co, |ó |Re|den|tor;"+
            "Só |Tu |nos |tra|tas |com |ca|ri|nho,"+
            "Ó |glo|ri|o|so |Sal|va|dor." ,

            "Je|sus, |glo|ri|o|so |e |fi|el,"+
            "Em |Ti |es|tá |o |nos|so |bem;"+
            "Tu |és |o |nos|so |E|ma|nu|el,"+
            "És |Quem |na |gra|ça, |nos |sus|tém."+
            "A|qui |es|ta|mos |re|u|ni|dos"+
            "Ao |Teu |re|dor, |fi|el |Se|nhor,"+
            "Pois, |on|de |es|tão |os |Teus |re|mi|dos,"+
            "Tam|bém |es|tás, |ó |bom |Pas|tor." ,

            "Nós |Te |se|gui|mos, |Re|den|tor,"+
            "Pois |co|nhe|ce|mos |Tu|a |voz,"+
            "Voz |que |nos |fa|la |com |a|mor, |di|zen|do:"+
            "Não |vos |dei|xo |sós. "+
            "A |pas|tos |sem|pre |ver|de|jan|tes"+
            "Tu |nos |con|du|zes, |ó |Se|nhor."+
            "Por |is|so |es|ta|mos |con|fi|an|tes,"+
            "Sen|ti|do |a |Tu|a |paz |e |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "453": { 
        nome: "Consagrados sejamos a Deus",
        compasso: "6/4",
        velMin: 88,
        velMed: 102,
        velMax: 116,
        inicio: 6,
        velMinMeiaHora: 56,
        velMedMeiaHora: 58,
        velMaxMeiaHora: 60,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se |qui|ser|mos, |ir|mãos, |do |Se|nhor |re|ce|ber"+
            "As |vir|tu|des |da |vi|da |e|ter|nal,"+
            "Se|ja |a |nos|sa |a|fei|ção |e |o |nos|so |pra|zer"+
            "Em |Je|sus |e |na |lei |ce|les|ti|al." ,

            "Con|sa|gra|dos |se|ja|mos |a |Deus, |Cri|a|dor,"+
            "E |E|le, |de |nós, |Se |a|gra|da|rá;"+
            "A|bri|rá |Su|a |mão |e, |com |gran|de |a|mor,"+
            "Bo|as |dá|di|vas |nos |man|da|rá." ,

            "Se |qui|ser|mos, |ir|mãos, |ser |ben|di|tos |de |Deus,"+
            "A|do|re|mo|-Lo |com |de|vo|ção;"+
            "Seus |pre|cei|tos |de |a|mor |E|le |en|vi|a |dos |céus;"+
            "Se|ja |E|le |a |nos|sa |por|ção." ,

            "Se |hon|rar|mos |a |Deus, |E|le |nos |hon|ra|rá"+
            "Nes|ta |ter|ra |e |na |pá|tria |e|ter|nal;"+
            "Um |di|a|de|ma, |nos |céus, |E|le |con|ce|de|rá,"+
            "Ao |en|trar|mos |no |lar |di|vi|nal." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "454": { 
        nome: "Cidadão dos céus",
        compasso: "6/8",
        velMin: 104,
        velMed: 115,
        velMax: 126,
        inicio: 1,
        velMinMeiaHora: 68,
        velMedMeiaHora: 71,
        velMaxMeiaHora: 74,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Deus |ben|di|to, |sou |pe|que|ni|no,"+
            "Mas |já |ca|mi|nho |pe|lo |Teu |en|si|no;"+
            "Sou |nes|te |mun|do |um |pe|re|gri|no;"+
            "Já |me |fi|zes|te |ci|da|dão |dos |céus;" ,

            "Vi|vo |a|le|gre, |em |paz |Te |si|go,"+
            "Na|da |re|cei|o, |pois |es|tou |Con|ti|go;"+
            "Nes|te |de|ser|to, |em |Ti |me a|bri|go;"+
            "Já |me |fi|zes|te |ci|da|dão |dos |céus." ,

            "És |mi|nha |For|ça |e |Se|gu|ran|ça,"+
            "És |meu |A|poi|o, |mi|nha |Es|pe|ran|ça,"+
            "És |mi|nha |Vi|da |e |Con|fi|an|ça;"+
            "Já |me |fi|zes|te |ci|da|dão |dos |céus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "455": { 
        nome: "Quão ditoso é caminhar com Jesus!",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|le|gre|men|te |se|gui|mos |os |pas|sos"+
            "Do |nos|so |bom |Sal|va|dor, |nos|so |Rei,"+
            "Pois |a|co|lheu|-nos |em |Seus |san|tos |bra|ços,"+
            "Des|de |cri|an|ças |nos |fez |Su|a |grei." ,

            "Quão |di|to|so |é |ca|mi|nhar |com |Je|sus, |ó |me|ni|nos!"+
            "So|mos |Su|a |grei, |E|le |é |o |bom |Pas|tor;"+
            "Se|gui|mos, |com |a|mor, |os |pre|ci|o|sos |en|si|nos"+
            "De |Deus, |Cri|a|dor." ,

            "Nes|ta |jor|na|da, |u|ni|dos |de|ve|mos,"+
            "Sem|pre |dis|pos|tos, |a |Cris|to |se|guir;"+
            "E, |no |Seu |No|me, |vi|tó|ria |te|re|mos,"+
            "Des|fru|ta|re|mos |os |bens |do |por|vir." ,

            "O |Sal|va|dor |nos |con|duz |nes|ta |vi|da"+
            "Pa|ra |fa|zer|-nos |mo|rar |lá |nos |céus;"+
            "E, |nes|sa |pá|tria, |glo|ri|o|sa |e |que|ri|da,"+
            "Con|tem|pla|re|mos |a |fa|ce |de |Deus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "456": { 
        nome: "Somos jóias preciosas",
        compasso: "3/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ao |vol|tar, |com |gran|de |gló|ria,"+
            "Je|sus |Cris|to, |o |Re|den|tor,"+
            "Le|va|rá |as |Su|as |joi|as"+
            "Pa|ra |o |rei|no |de |es|plen|dor." ,

            "So|mos |joi|as |pre|ci|o|sas"+
            "Do |te|sou|ro |do |Se|nhor;"+
            "So|mos |be|las, |mui |for|mo|sas,"+
            "So|mos |joi|as |de |va|lor." ,

            "Des|tas |joi|as |pre|ci|o|sas"+
            "Cris|to |sem|pre |cui|da|rá;"+
            "Sem|pre |be|las |e |bri|lhan|tes"+
            "E|le |as |con|ser|va|rá." ,

            "Re|ves|ti|dos |de |pu|re|za,"+
            "Ca|mi|nhan|do |em |a|mor,"+
            "A|guar|de|mos |bem |a|ten|tos"+
            "O |re|tor|no |do |Se|nhor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "457": { 
        nome: "Comigo está Jesus",
        compasso: "6/8",
        velMin: 104,
        velMed: 124,
        velMax: 144,
        inicio: 6,
        velMinMeiaHora: 72,
        velMedMeiaHora: 74,
        velMaxMeiaHora: 76,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com|i|go |es|tá |Je|sus,"+
            "Meu |bom |Mes|tre |e |Sal|va|dor,"+
            "Me |gui|a |com |a |luz, |pe|lo |Seu |i|men|so |a|mor;"+
            "Mis|té|rios |ce|les|ti|ais |Je|sus |re|ve|la|rá;"+
            "No |Seu |bom |ca|mi|nho |an|dar |me |fa|rá." ,

            "Quem |me |se|pa|ra|rá |do |su|bli|me |a|mor |de |Deus?"+
            "Quem |me |con|de|na|rá?"+
            "Pois |Je|sus |de|fen|de |os |Seus."+
            "U|ni|do |ao |Se|nhor |por |ce|les|ti|al |a|mor,"+
            "Ca|mi|nho |a|van|te |com |fé |e |va|lor." ,

            "Das |sen|das |ce|les|ti|ais |eu |não |me |a|fas|ta|rei,"+
            "Pois |a|mo |sem|pre |mais"+
            "A |dou|tri|na |do |meu |Rei;"+
            "Je|sus |me |gui|a|rá |e |for|ças |me |da|rá."+
            "O |Mes|tre |a|ma|do |com|i|go |es|tá." ,

            "Es|tou |com |Je|sus, |meu |Se|nhor: |vou |ven|cer!"+
            "Je|sus |a|ma |os |Seus |e |as |cou|sas |de |Deus"+
            "Lhes |faz |sa|ber."+
            "A |na|da |a|qui |te|me|rei, |pois |eu |bem |sei"+
            "Que |tu|do |es|tá |so|b |as |or|dens |do |meu |Rei." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "458": { 
        nome: "Cristo me ama",
        compasso: "2/4",
        velMin: 56,
        velMed: 66,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 35,
        velMedMeiaHora: 36,
        velMaxMeiaHora: 37,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Sou |a|ma|do |por |Je|sus,"+
            "A |Pa|la|vra as|sim |me |diz;"+
            "E|le |é |a |mi|nha |Luz"+
            "E |me |le|va ao |Seu |pa|ís." ,

            "Cris|to |me |a|ma,"+
            "Sei |que |me |a|ma,"+
            "Mui|to |me |a|ma,"+
            "Em |Cris|to |sou |fe|liz." ,

            "Sou |a|ma|do |por |Je|sus,"+
            "Pois, |por |mim, |na |cruz |mor|reu;"+
            "E|le a|go|ra |me |con|duz"+
            "Pa|ra o |lar |que |pro|me|teu." ,

            "Sou |a|ma|do |por |Je|sus,"+
            "Pois |com|i|go |sem|pre es|tá;"+
            "Seu |con|se|lho em |mim |pro|duz"+
            "For|ça, |que |me |sus|te|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "459": { 
        nome: "Vamos nos preparar!",
        compasso: "12/8",
        velMin: 112,
        velMed: 128,
        velMax: 144,
        inicio: 10,
        velMinMeiaHora: 74,
        velMedMeiaHora: 76,
        velMaxMeiaHora: 78,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cris|to |Je|sus |bre|ve |vol|ta|rá, |va|mos |nos |pre|pa|rar!"+
            "E|le |à |gló|ria |nos |le|va|rá, |pa|ra |nos |co|ro|ar!"+
            "Re|ce|be|rá |os |re|mi|dos |Seus"+
            "Pa|ra |ha|bi|ta|rem |no |céu |dos |céus,"+
            "Jun|to |aos |an|jos |e |a |Deus. |Va|mos |nos |pre|pa|rar!" ,

            "Não |ce|de|re|mos |à |ten|ta|ção; |va|mos, |com |fé, |lu|tar;"+
            "Re|jei|ta|re|mos |a |i|lu|são, |pa|ra |não |va|ci|lar."+
            "Quan|do |vol|tar |Cris|to, |o |Sal|va|dor,"+
            "Vi|to|ri|o|so, |com |es|plen|dor,"+
            "En|con|tra|rá |em |nós |va|lor. |Va|mos |nos |pre|pa|rar!" ,

            "Gló|ria! |Gló|ria |a |Cris|to, |o |Rei |dos |reis!"+
            "Gló|ria! |Gló|ria! |Can|tam |os |Seus |fi|éis;"+
            "Gló|ria! |Gló|ria |na |ter|ra |e |nos |céus;"+
            "Gló|ria! |Gló|ria |ao |po|de|ro|so |Deus!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "460": { 
        nome: "Vamos todos juntos cantar",
        compasso: "4/4",
        velMin: 69,
        velMed: 78,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 45,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Va|mos |to|dos |jun|tos |can|tar:"+
            "Gló|ria a |Je|sus! |Gló|ria a |Je|sus!"+
            "Va|mos |to|dos |jun|tos |lou|var"+
            "Ao |Se|nhor |Je|sus!"+
            "E|le é a |nos|sa |Paz, |E|le é a |nos|sa |Luz;"+
            "E|xal|te|mos, |com |de|vo|ção,"+
            "Ao |Se|nhor |Je|sus!" ,

            "So|mos |sal|vos |por |Seu |a|mor;"+
            "Gló|ria a |Je|sus! |Gló|ria a |Je|sus!"+
            "Su|por|tou, |por |nós, |gran|de |dor"+
            "O |Se|nhor |Je|sus."+
            "Quem |nos |dá |per|dão, |Quem |ao |céu |con|duz"+
            "É |o |san|to |Fi|lho |de |Deus,"+
            "O |Se|nhor |Je|sus." ,

            "Mui |fe|li|zes |so|mos |en|tão;"+
            "Gló|ria a |Je|sus! |Gló|ria a |Je|sus!"+
            "Re|ce|be|mos |con|so|la|ção"+
            "Do |Se|nhor |Je|sus."+
            "No |Seu |lar |de a|mor, |no |Seu |lar |de |luz,"+
            "No|vo |hi|no |va|mos |can|tar"+
            "Ao |Se|nhor |Je|sus." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "461": { 
        nome: "Abrigado em Jesus",
        compasso: "4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 44,
        velMedMeiaHora: 46,
        velMaxMeiaHora: 48,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|bri|ga|do |em |Je|sus,"+
            "Lu|tas |não |mais |te|me|rei;"+
            "E|le |é |a |mi|nha |Luz"+
            "E |por |e|la |an|da|rei." ,

            "A |Je|sus, |meu |Se|nhor,"+
            "Mi|nha |vi|da |con|sa|grei;"+
            "Em |meu |bom |Re|den|tor,"+
            "For|te |a|bri|go |en|con|trei." ,

            "A|bri|ga|do |em |Je|sus,"+
            "Pos|so |sem|pre |ca|mi|nhar"+
            "Pe|la |sen|da |que |con|duz"+
            "Ao |su|bli|me, |e|ter|no |lar." ,

            "A|bri|ga|do |em |Je|sus,"+
            "Mes|mo |quan|do |em |a|fli|ção,"+
            "Sin|to |em |mim |a |Su|a |luz,"+
            "Que |i|lu|mi|na |o |co|ra|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "462": { 
        nome: "Gloriosa é a história",
        compasso: "3/4!4/4",
        velMin: 69,
        velMed: 76,
        velMax: 84,
        inicio: 3,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Glo|ri|o|sa |é |a |his|tó|ria"+
            "Que |nos |fa|la |de |Je|sus;"+
            "Sen|do |Rei, |Se|nhor |da |gló|ria,"+
            "Pa|de|ceu |por |nós |na |cruz." ,

            "Quão |glo|ri|o|sa |é |a |his|tó|ria"+
            "De |Je|sus, |o |Sal|va|dor,"+
            "Que |al|can|çou |fi|nal |vi|tó|ria"+
            "E |no |céu |é |In|ter|ces|sor." ,

            "Ve|io |ao |mun|do, |sem |pe|ca|do,"+
            "O |di|vi|no |Sal|va|dor;"+
            "Con|ser|vou|-Se |i|ma|cu|la|do"+
            "E |ven|ceu |o |ten|ta|dor." ,

            "O |Se|nhor, |cru|ci|fi|ca|do,"+
            "No |ma|dei|ro |ex|pi|rou;"+
            "Tu|do |es|ta|va |con|su|ma|do;"+
            "Seu |es|pí|ri|to |en|tre|gou." ,

            "Foi |Je|sus |glo|ri|fi|ca|do,"+
            "Pois |da |mor|te |re|tor|nou;"+
            "Pa|ra |o |céu |foi |e|le|va|do"+
            "E |Deus |Pai |O |e|xal|tou." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "463": { 
        nome: "Mocidade! Vamos combater!",
        compasso: "4/4",
        velMin: 66,
        velMed: 77,
        velMax: 88,
        inicio: 1,
        velMinMeiaHora: 40,
        velMedMeiaHora: 42,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com |va|lor, |ó |jo|vens, |san|tos |do |Se|nhor,"+
            "Va|mos |pro|cla|mar |que |Cris|to |é |o |Sal|va|dor;"+
            "Os |que |n'E|le |cre|rem, |cer|to |al|can|ça|rão"+
            "Vi|da |e|ter|na |e |per|dão." ,

            "Mo|ci|da|de! |Va|mos |com|ba|ter!"+
            "Va|lo|ro|sos |so|mos |por |Je|sus!"+
            "Ven|ce|re|mos |pe|lo |Seu |po|der,"+
            "Ma|ni|fes|ta|re|mos |Su|a |luz." ,

            "Sem|pre |a|van|te, |ó |jo|vens, |va|mos, |com |va|lor,"+
            "Com|ba|ter, |por |fé, |o |as|tu|to |ten|ta|dor;"+
            "Cris|to, |com |Seu |bra|ço, |nos |sus|ten|ta|rá"+
            "E |vi|tó|ria |nos |da|rá." ,

            "Bem-|a|ven|tu|ra|dos |so|mos |no |Se|nhor,"+
            "Te|mos |al|can|ça|do |a |un|ção |do |Cri|a|dor,"+
            "Pe|la |qual |sen|ti|mos |paz |e |co|mu|nhão,"+
            "Pa|ra |e|ter|na |sal|va|ção." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "464": { 
        nome: "Reunidos nós estamos",
        compasso: "3/4",
        velMin: 60,
        velMed: 66,
        velMax: 72,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
        "Re|u|ni|dos |nós |es|ta|mos |aos |Teus |pés, |ó |Cri|a|dor,"+
        "An|si|o|sos |es|pe|ra|mos |Tu|as |bên|ções, |Teu |fa|vor;"+
        "Glo|ri|fi|ca|do |se|ja |sem|pre |Teu |san|to |No|me, |ó |Se|nhor,"+
        "E |Teu |rei|no |a|nun|ci|a|do |pa|ra |to|do |o |pe|ca|dor." ,

        "Ó |Se|nhor, |só |Tu |co|nhe|ces |nos|sa |men|te |e |co|ra|ção,"+
        "E|le|va|mos |nos|sas |pre|ces |com |sin|ce|ra |de|vo|ção."+
        "Nós |in|vo|ca|mos |o |Teu |No|me |e |de|se|ja|mos |Te |hon|rar;"+
        "Dá|-nos |for|ça, |Pai |e|ter|no, |pa|ra |Te |glo|ri|fi|car." ,

        "Faz |que |nós |con|si|de|re|mos |que |pre|sen|te |es|tás, |ó |Deus,"+
        "Pa|ra |que |nos |a|le|gre|mos |nos |fi|éis |con|se|lhos |Teus;"+
        "Tu|a |Pa|la|vra |de |vir|tu|de |nós |es|pe|ra|mos, |ó |Se|nhor,"+
        "N'E|la |es|tá |a |ple|ni|tu|de |do |Teu |san|to |e |i|men|so |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "465": { 
        nome: "Deus tem por nós imenso amor",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Nes|ta |ho|ra |re|u|ni|dos |nós |es|ta|mos |an|te |Deus"+
            "E |em |no|me |de |Je|sus, |o |Sal|va|dor;"+
            "Quer|-nos |to|dos |re|ve|ren|tes"+
            "Nos|so |Pai |que |es|tás |nos |céus;"+
            "Deus |tem |por |nós |i|men|so |a|mor." ,

            "Co|mo |fi|lhos |re|ve|ren|tes |que |o|be|de|cem |a |seu |pai,"+
            "A|ten|da|mos |ao |su|bli|me |Cri|a|dor;"+
            "Lá |no |céu |os |Seus |te|sou|ros |con|ce|der|-nos |E|le |vai;"+
            "Deus |tem |por |nós |i|men|so |a|mor." ,

            "Se |an|dar|mos |pe|la |sen|da |da |jus|ti|ça |e |da |luz,"+
            "Tem |pra|zer |em |nos|sas |al|mas, |o |Se|nhor;"+
            "Se |a|qui |nós |i|mi|ta|mos |o |Mo|de|lo, |que |é |Je|sus,"+
            "Deus |tem |por |nós |i|men|so |a|mor." ,

            "Ao |e|ter|no |Pai |ce|les|te |hon|ra |e |gló|ria |va|mos |dar"+
            "E, |a|ten|tos, |Seus |con|se|lhos |es|cu|tar;"+
            "Su|as |bên|ções |glo|ri|o|sas |nos |da|rá |o |Cri|a|dor;"+
            "Deus |tem |por |nós |i|men|so |a|mor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "466": { 
        nome: "A criança consagrada",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |cri|an|ça |con|sa|gra|da |"+
            "A |Je|sus |o |Sal|va|dor, |\n"+
            "É, |por |E|le, |en|si|na|da |"+
            "A |ser|vir |ao |Cri|a|dor. |\n\n" ,

            "Cris|to |cha|ma os |pe|que|ni|nos |"+
            "Com |ter|nu|ra |e |a|mor; |\n"+
            "Quan|do a |Deus |en|to|am |hi|nos |"+
            "É |a|cei|to o |seu |lou|vor. |\n\n" ,

            "Cris|to |é |a |Luz |di|vi|na |"+
            "En|vi|a|da |lá |dos |céus; |\n"+
            "E|le |trou|xe a |sã |dou|tri|na |"+
            "Que |con|duz, |por |fé, |a |Deus." ,

        ],
        temposVersos: [
            3,1,4,4,3,1,4,4,
            3,1,4,4,3,1,8,
            3,1,4,4,2,2,4,4,
            3,1,4,4,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,4,4,3,1,8,
            3,1,4,4,2,2,4,4,
            3,1,4,4,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,4,4,3,1,8,
            3,1,4,4,2,2,4,4,
            3,1,4,4,2,2,8,
        ],
        notas: [
            'G4','G4','G4','G4','B4','B4','B4','B4',
            'D5','E5','D5','C5','B4','B4','A4',
            'B4','B4','A4','A4','C5','A4','B4','B4',
            'G4','B4','A4','G4','F#4','F#4','G4',

            'G4','G4','G4','G4','B4','B4','B4','B4',
            'D5','E5','D5','C5','B4','B4','A4',
            'B4','B4','A4','A4','C5','A4','B4','B4',
            'G4','B4','A4','G4','F#4','F#4','G4',

            'G4','G4','G4','G4','B4','B4','B4','B4',
            'D5','E5','D5','C5','B4','B4','A4',
            'B4','B4','A4','A4','C5','A4','B4','B4',
            'G4','B4','A4','G4','F#4','F#4','G4'
        ],
        temposNotas: [
            3,1,4,4,3,1,4,4,
            3,1,4,4,3,1,8,
            3,1,4,4,2,2,4,4,
            3,1,4,4,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,4,4,3,1,8,
            3,1,4,4,2,2,4,4,
            3,1,4,4,2,2,8,

            3,1,4,4,3,1,4,4,
            3,1,4,4,3,1,8,
            3,1,4,4,2,2,4,4,
            3,1,4,4,2,2,8,

        ]
    },
    "467": { 
        nome: "Vamos com Jesus",
        compasso: "2/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 2.5,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Si|ga|mos |com |fer|vor, |Je|sus, |o |Sal|va|dor,"+
            "Que |por |a|mor |nos |li|vrou |da |con|de|na|ção;"+
            "É |E|le |o |nos|so |Rei, |nos |so|mos |Su|a |grei,"+
            "Que |i|rá, |no |céu, |re|ce|ber |o |gran|de |ga|lar|dão." ,

            "Va|mos |com |Je|sus, |E|le |nos |con|duz"+
            "Ao |Seu |rei|no |de |a|mor;"+
            "Mar|che|mos |com |va|lor |à |pá|tria |ce|les|ti|al,"+
            "O |nos|so |Rei |nos |da|rá |a |gló|ria |e|ter|nal." ,

            "Oh! |Va|mos |com|ba|ter |e, |pe|la |fé, |ven|cer"+
            "O |ten|ta|dor |que |nos |quer |pa|ra |o |mal |le|var;"+
            "Si|ga|mos |ao |Se|nhor |com |to|do |fer|vor;"+
            "Só |E|le |tem |ar|mas |que |nos |fa|zem |tri|un|far." ,

            "Mis|té|rios |ce|les|ti|ais, |ri|que|zas |e|ter|nais,"+
            "Je|sus, |o |Rei, |por |a|mor |nos |des|va|da|rá;"+
            "Fe|li|zes, |pois, |nos |céus |se|re|mos |jun|to |a |Deus;"+
            "Na|que|le |lar |nos|so |co|ra|ção |ju|bi|la|rá." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "468": { 
        nome: "Toda a criança",
        compasso: "2/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "To|da |a |cri|an|ça |que, |com |fé |e a|mor,"+
            "Ser|ve ao |Deus |vi|ven|te, |san|to |Cri|a|dor,"+
            "Cres|ce |na |jus|ti|ça |e |na |re|ti|dão,"+
            "Com |a |lei |de |Cris|to |em |seu |co|ra|ção." ,

            "To|da |a |cri|an|ça |de|ve |co|nhe|cer"+
            "Quan|to é |glo|ri|o|so |jun|to a |Deus |vi|ver."+
            "Gran|de |a|le|gri|a |lhe |da|rá |Je|sus;"+
            "E|le |a |pro|te|ge, |E|le |a |con|duz." ,

            "Deus, |o |Pai |e|ter|no, |ou|ve a |o|ra|ção"+
            "Que |to|da a |cri|an|ça |faz |com |de|vo|ção."+
            "Cris|to, |com |Seu |bra|ço, |fir|me |a |sus|tém,"+
            "Pa|ra |que |al|can|ce |o |e|ter|no |bem." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "469": { 
        nome: "Pai nosso, que estás nos céus",
        compasso: "4/4",
        velMin: 76,
        velMed: 80,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ó |Pai |nos|so, |que |es|tás |nos |céus,"+
            "In|fi|ni|to |em |po|der,"+
            "San|to |é |Teu |No|me, |ó |gran|de |Deus,"+
            "Sem |li|mi|te |é |o |Teu |po|der." ,

            "Gló|ria, |gló|ria, |gló|ria |e|ter|na"+
            "Te |da|re|mos, |ó |Deus, |Pai |de |a|mor!"+
            "Pois |her|dei|ros |nos |fi|zes|te, |ó |Se|nhor,"+
            "Do |Teu |rei|no |de |es|plen|dor." ,

            "Ven|ha |a |nós |Teu |rei|no, |ó |gran|de |Deus,"+
            "Se|ja |fei|to |o |Teu |que|rer"+
            "Nes|ta |ter|ra, |co|mo |é |nos |céus"+
            "Pe|lo |i|men|so |Teu |po|der." ,

            "Ca|da |di|a |dá|-nos |nos|so |pão,"+
            "E |per|do|a |nos|so |mal;"+
            "O|fen|di|dos, |da|mos |o |per|dão,"+
            "Com |ca|ri|nho |fra|ter|nal." ,

            "Ó |Se|nhor, |pres|er|va|-nos |do |mal ,"+
            "E |da |ten|ta|ção |tam|bém,"+
            "Pois |Teu |é |o |rei|no |e|ter|nal,"+
            "Gló|ria |e |po|der. |A|mém!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "470": { 
        nome: "Jesus Cristo, Seus fiéis, ensina",
        compasso: "4/4",
        velMin: 69,
        velMed: 80,
        velMax: 92,
        inicio: 1,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Je|sus |Cris|to, |Seus |fi|éis, |en|si|na;"+
            "Va|mos |to|dos |jun|tos |a|pren|der;"+
            "Com |a |Su|a |ce|les|ti|al |dou|tri|na"+
            "E|le |nos |re|ves|te |de |sa|ber;"+
            "E|le |gui|a |os |pe|que|ni|nos"+
            "Com |ca|ri|nho |e |com |a|mor;"+
            "So|mos |d'E|le |os |cor|dei|ri|nhos,"+
            "Je|sus |Cris|to |é |o |bom |Pas|tor."+
            "São |mui |sá|bios |os |en|si|nos"+
            "Do |di|vi|no |Re|den|tor." ,

            "Je|sus |Cris|to |pa|ra |o |céu |nos |le|va, |va|mos,"+
            "Pois, |com |E|le |ca|mi|nhar;"+
            "Nes|ta |gra|ça, |Seu |po|der |con|ser|va"+
            "Quem |i|rá |com |E|le |ha|bi|tar."+
            "No |Seu |rei|no |de |gran|de |gló|ria,"+
            "Nas |mo|ra|das |do |e|ter|no |Deus,"+
            "Can|ta|re|mos |a |vi|tó|ria |jun|to"+
            "Aos |re|mi|dos |Seus."+
            "Quão |su|pre|ma |é |a |gló|ria"+
            "Que |te|re|mos |lá |nos |céus!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "471": { 
        nome: "Que grande bem é andar com Cristo!",
        compasso: "4/4",
        velMin: 58,
        velMed: 67,
        velMax: 76,
        inicio: 3.5,
        velMinMeiaHora: 38,
        velMedMeiaHora: 39,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Que |gran|de |bem |é |an|dar |com |Cris|to, |o |Mes|tre!"+
            "Que |pri|vi|lé|gio |é |ser|vir |a |Deus!"+
            "Su|bli|me |bên|ção |é |a |paz |ce|les|te,"+
            "A |paz |que |Cris|to |dá |aos |Seus." ,

            "Que |gran|de |bem,"+
            "E|ter|no |bem,"+
            "Re|ce|be|mos |de |Deus!" ,

            "É |mui |fe|liz |a|que|le |que |pro|cu|ra,"+
            "A|qui |no |mun|do, |a|gra|dar |a |Deus;"+
            "O|be|de|cen|do |à |Pa|la|vra |pu|ra,"+
            "Se|rá |ho|na|do |lá |nos |céus." ,

            "Deus |nos |da|rá |a |bem-|a|ven|tu|ran|ça;"+
            "In|ex|pli|cá|vel |é |tão |gran|de |a|mor!"+
            "Seu |rei|no |e|ter|no |é |a |nos|sa |he|ran|ça;"+
            "Ben|di|to |se|ja |o |Cri|a|dor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "472": { 
        nome: "Glorificarei, glorificarei",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 1,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Des|de |pe|que|ni|no, |Deus, |o |Cri|a|dor,"+
            "Fez|-me |co|nhe|cer |a |Cris|to, |o |Sal|va|dor;"+
            "Tem |ma|ni|fes|ta|do |em |mim |o |Seu |a|mor,"+
            "Pe|lo |bom |Con|so|la|dor." ,

            "Glo|ri|fi|ca|rei, |glo|ri|fi|ca|rei"+
            "Ao |Se|nhor |Je|sus |e |a |Deus, |o |Cri|a|dor;"+
            "Sen|do |eu |pe|que|no, |se|pa|ra|do |es|tou,"+
            "Pa|ra |a |gló|ria |do |Se|nhor." ,

            "Com |per|se|ve|ran|ça |cla|mo |ao |Se|nhor,"+
            "Es|pe|ran|do |d'E|le |for|ça |e |fer|vor;"+
            "Nas |tri|bu|la|ções |se|rei |um |ven|ce|dor,"+
            "Pois |Deus |ou|ve |o |meu |cla|mor." ,

            "A |glo|ri|o|sa |pá|tria |hei |de |al|can|çar,"+
            "Se |se|guir |a |Cris|to |sem |de|sa|ni|mar;"+
            "Na|da |nes|te |mun|do |po|de |se |i|gua|lar"+
            "Com |a|que|le |e|ter|no |lar." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "473": { 
        nome: "Forasteiro sou no mundo",
        compasso: "4/4",
        velMin: 66,
        velMed: 75,
        velMax: 84,
        inicio: 4,
        velMinMeiaHora: 42,
        velMedMeiaHora: 43,
        velMaxMeiaHora: 44,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "For|as|tei|ro |sou |no |mun|do,"+
            "Nes|te |mun|do |de |i|lu|são;"+
            "Pa|ra |o |céu |vou |ca|mi|nhan|do,"+
            "On|de |os |fi|éis |en|tra|rão." ,

            "Vi|ve|rei |com |os |fi|éis"+
            "Pa|ra |sem|pre |lá |nos |céus,"+
            "Pois, |no |nú|me|ro |dos |san|tos,"+
            "Eu |se|rei |con|ta|do |por |Deus." ,

            "An|si|o|so |eu |es|pe|ro"+
            "Ver |a |fa|ce |do |Se|nhor,"+
            "Con|tem|plar |a |for|mo|su|ra"+
            "E |a |gló|ria |do |Re|den|tor." ,

            "Com |a |mul|ti|dão |can|tan|do"+
            "E |lou|van|do |ao |Se|nhor,"+
            "En|tra|rei, |com |re|go|zi|jo,"+
            "No |ce|les|te |lar |de |es|plen|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "474": { 
        nome: "Oh! Glória! Bendito é o Senhor!",
        compasso: "4/4",
        velMin: 60,
        velMed: 72,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Com |a|le|gri|a |de|ve|mos |ser|vir"+
            "A |Cris|to |Je|sus, |o |Sal|va|dor,"+
            "Que |nos |fa|rá |bens |e|ter|nos |fru|ir;"+
            "Oh! |Gló|ria! |Ben|di|to |é |o |Se|nhor!" ,

            "Vi|da |e|ter|na |cer|to |al|can|ça|rão"+
            "Lá |no |céu, |os |fi|éis;"+
            "Co|ro|a|dos, |e|les |ben|di|rão"+
            "A |Je|sus, |o |Rei |dos |reis." ,

            "Com |to|da |a |al|ma |de|ve|mos |a|mar"+
            "A |Cris|to |Je|sus, |o |Sal|va|dor;"+
            "E|le, |nas |pro|vas, |nos |faz |tri|un|far;"+
            "Oh! |Gló|ria! |Ben|di|to |é |o |Se|nhor!" ,

            "Quan|do |es|ti|ver|mos |no |lar |di|vi|nal,"+
            "Com |Cris|to |Je|sus, |o |Sal|va|dor,"+
            "Des|fru|ta|re|mos |o |bem |ce|les|ti|al;"+
            "Oh! |Gló|ria! |Ben|di|to |é |o |Se|nhor!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "475": { 
        nome: "Se eu for aqui provado",
        compasso: "4/4",
        velMin: 60,
        velMed: 72,
        velMax: 84,
        inicio: 4.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Se |eu |for |a|qui |pro|va|do, |cla|ma|rei |a |Ti, |Se|nhor;"+
            "Tu |és |o |meu |so|cor|ro |e |tam|bém |meu |De|fen|sor;"+
            "E |só |por |Teu |po|der, |fa|rei |o |Teu |que|rer"+
            "E |ven|ce|rei |por |fé |o |mun|do |en|ga|na|dor." ,

            "Se |eu |for |a|qui |ten|ta|do, |cla|ma|rei |a |Ti, |Se|nhor,"+
            "Con|fi|an|te |que |ou|vi|rás |e |a|ten|de|rás |ao |meu |cla|mor;"+
            "Se |jun|to |a |Ti |vi|ver |e |Te |o|be|de|cer,"+
            "Por |cer|to |eu |se|rei |em |tu|do |ven|ce|dor." ,

            "Se |eu |for |a|qui |o|pri|mi|do, |cla|ma|rei |a |Ti, |Se|nhor;"+
            "O |san|to |E|van|ge|lho |me |da|rá |o |Teu |va|lor;"+
            "Com |Tu|a |pro|te|ção |te|rei |a |sal|va|ção"+
            "E |e|xal|ta|rei |Teu |gran|de |No|me, |ó |Sal|va|dor." ,

            "Já |des|de |a |mi|nha |in|fân|cia |cla|mo |a |Ti, |Se|nhor,"+
            "De |to|do |o |co|ra|ção |e |com |sin|ce|ro |a|mor;"+
            "E |Tu, |meu |bom |Je|sus, |és |sem|pre |a |mi|nha |Luz"+
            "E |me |con|du|zi|rás |ao |lar |de |es|plen|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "476": { 
        nome: "Deixai a Mim vir os pequeninos...",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3.5,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Cri|an|ças |e|ram |en|ca|mi|nha|das"+
            "Aos |pés |do |bom |Je|sus, |o |Re|den|tor,"+
            "A |fim |de |se|rem |a|ben|ço|a|das"+
            "E |co|nhe|ce|rem |o |Seu |a|mor." ,

            "Dei|xai |a |mim |vir |os |pe|que|ni|nos"+
            "E |não |os |im|pei|çais, |fa|lou |Je|sus;"+
            "Quem |não |se |tor|na |tam|bém |me|ni|no"+
            "Não |tem |en|tra|da |no |lar |de |luz." ,

            "Dou|tri|na |san|ta |e |ex|ce|len|te"+
            "En|si|na o |Re|den|tor |aos |Seus |fi|éis."+
            "A |Deus |ser|va|mos |hu|mil|de|men|te,"+
            "Pois |foi |hu|mil|de |o |Rei |dos |reis" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "477": { 
        nome: "Vinde, crianças",
        compasso: "4/4",
        velMin: 63,
        velMed: 73,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Vin|de, |cri|an|ças, |vin|de |a |Je|sus,"+
            "E|le |vos |cha|ma |com |voz |de |a|mor"+
            "Pa|ra |gui|ar|-vos |com |Su|a |luz"+
            "Ao |rei|no |de |es|plen|dor." ,

            "Gran|de |te|sou|ro |re|ve|lou |Je|sus"+
            "Aos |que |ca|mi|nham |na |di|vi|na |luz;"+
            "Es|se |te|sou|ro |Deus |pro|me|teu"+
            "Dar |aos |fi|éis |no |céu." ,

            "Se|de |pru|den|te |e |es|pe|rai"+
            "Os |ri|cos |bens |do |lar |de |es|plen|dor,"+
            "On|de |ha|bi|ta |Deus, |nos|so |Pai,"+
            "E |Cris|to, |o |Sal|va|dor." ,

            "Vós, |nes|te |mun|do, |en|con|tra|reis"+
            "Mui|ta |vai|da|de, |mui|ta |i|lu|são;"+
            "San|ti|fi|cai|-vos |e |al|can|ça|reis,"+
            "No |céu, |o |ga|lar|dão." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "478": { 
        nome: "Cedo retorna o Senhor",
        compasso: "4/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 39,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ce|do |vem |a |fim |de |pre|mi|ar |os |san|tos |Seus,"+
            "Je|sus |Cris|to, |nos|so |Sal|va|dor;"+
            "Re|com|pen|sa |pa|ra |os |jus|tos |ha|ve|rá |nos |céus,"+
            "Rei|no |de |gló|ria |e |a|mor." ,

            "Ce|do |re|tor|na |o |Se|nhor"+
            "E |traz |o |e|ter|no |ga|lar|dão."+
            "Bem-|a|ven|tu|ra|do |quem |O |ser|ve |com |a|mor"+
            "E |com |sin|ce|ro |co|ra|ção." ,

            "Mo|ci|da|de, |va|mos |to|dos |nos |pu|ri|fi|car"+
            "A|ten|den|do |a |Cris|to, |o |bom |Pas|tor."+
            "E|le |quer |a |to|dos |os |Seus |san|tos |co|ro|ar"+
            "Com |vi|da |e|ter|na |e |es|plen|dor." ,

            "Con|sa|gra|dos, |po|de|re|mos, |ó |fi|éis, |di|zer:"+
            "O|ra |vem, |Je|sus, |bom |Re|den|tor!"+
            "D'E|le |sem|pre |re|ce|be|mos |for|ça |e |po|der,"+
            "Pa|ra |ser|vi|-Lo |com |fer|vor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "479": { 
        nome: "Somos jovens consagrados",
        compasso: "3/4",
        velMin: 63,
        velMed: 71,
        velMax: 80,
        inicio: 3,
        velMinMeiaHora: 37,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "So|mos |jo|vens |con|sa|gra|dos"+
            "A |Je|sus, |o |Re|den|tor,"+
            "E, |por |E|le, |en|si|na|dos"+
            "A |ser|vir |ao |Cri|a|dor." ,

            "Que |a|le|gri|a |en|con|tra|mos"+
            "Em |ser|vir |ao |Cri|a|dor!"+
            "Nós, |Seus |fi|lhos, |O |a|ma|mos,"+
            "Com |sin|ce|ro |e |pu|ro |a|mor." ,

            "So|mos |jo|vens |o|be|di|en|tes"+
            "A |Je|sus, |o |Sal|va|dor,"+
            "A|ten|de|mos, |re|ve|ren|tes,"+
            "À |Pa|la|vra |do |Se|nhor." ,

            "So|mos |jo|vens |de|di|ca|dos"+
            "Nes|ta |o|bra |do |Se|nhor,"+
            "Fo|mos |to|dos |res|ga|ta|dos"+
            "Por |Seu |san|gue |ex|pi|a|dor." ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "480": { 
        nome: "Jovens, amai o conselho",
        compasso: "6/8",
        velMin: 108,
        velMed: 123,
        velMax: 138,
        inicio: 1,
        velMinMeiaHora: 70,
        velMedMeiaHora: 72,
        velMaxMeiaHora: 75,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Jo|vens, |a|mai |o |con|se|lho,"+
            "O |en|si|no |de |Cris|to |Je|sus;"+
            "E|le |é |o |vos|so |Mo|de|lo"+
            "De |vi|da, |jus|ti|ça |e |luz." ,

            "A |Deus |e |a |Cris|to, |o |Se|nhor,"+
            "De|ve|mos |con|sa|gra|ção,"+
            "Res|pei|to, |hon|ra, |pro|fun|do |a|mor"+
            "E |e|ter|na |ve|ne|ra|ção." ,

            "Va|sos,|por |Cris|to,|es|co|lhi|dos"+
            "Se|reis, |pa|ra |gló|ria |de |Deus;"+
            "Cris|to |vos |quer |re|ves|ti|dos"+
            "Das |san|tas |vir|tu|des |dos |céus." ,

            "Jo|vens |que |se|guem |o |Mes|tre,"+
            "Em |su|a |e|xis|tên|cia |te|rão"+
            "A |pro|vi|dên|cia |ce|les|te"+
            "E |prós|pe|ro |n'E|le |se|rão." ,            
        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "481": { 
        nome: "Aleluia! Aleluia!",
        compasso: "4/4",
        velMin: 60,
        velMed: 70,
        velMax: 80,
        inicio: 4,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|le|lu|ia! |A|le|lu|ia! |A|le|lu|ia! |A|le|lu|ia! |Gló|ria |ao |Re|den|tor!"+
            "A|le|lu|ia! |A|le|lu|ia! |A|le|lu|ia! |A|le|lu|ia! |Gló|ria |ao |Re|den|tor!"+
            "Gló|ria |ao |Re|den|tor! |A|le|lu|ia!"+
            "San|to |Re|mi|dor! |A|le|lu|ia!"+
            "Nos|so |Sal|va|dor! |A|le|lu|ia!"+
            "Gló|ria |a |Je|sus!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "482": { 
        nome: "Toda a glória a Jesus",
        compasso: "2/4",
        velMin: 54,
        velMed: 60,
        velMax: 66,
        inicio: 1,
        velMinMeiaHora: 32,
        velMedMeiaHora: 34,
        velMaxMeiaHora: 36,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "To|da |a |gló|ria |a |Je|sus!| "+
            "To|da |a |hon|ra |a |Je|sus!\n|"+
            "Jun|tos |lou|ve|mos |a |Je|sus!| "+
            "Seu |san|to |No|me |va|mos |e|xal|tar." ,
        ],
        temposVersos: [
            2,4,2,2,6,4,4,8,
            2,4,2,2,6,4,4,8,
            2,4,2,2,6,4,4,8,
            2,4,2,2,2,2,2,4,4,12
        ],
        notas: [
            'G4','G4','G4','E4','D4','G4','B4','D5',
            'E5','E5','E5','D5','B4','A4','A4','D5',
            'G4','G4','G4','E4','D4','G4','B4','D5',
            'E5','E5','E5','D5','B4','G4','A4','B4','A4','G4',''
        ],
        temposNotas: [            
            2,4,2,2,6,4,4,8,
            2,4,2,2,6,4,4,8,
            2,4,2,2,6,4,4,8,
            2,4,2,2,2,2,2,4,4,12,4
        ]
    },
    "483": { 
        nome: "Ação de graças darei",
        compasso: "4/4",
        velMin: 58,
        velMed: 67,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 35,
        velMedMeiaHora: 37,
        velMaxMeiaHora: 39,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A|ção |de |gra|ças |da|rei |"+
            "A |Je|sus, |meu |Pas|tor, |meu |Rei;\n|"+
            "As |Su|as |o|bras |con|ta|rei, |"+
            "Seu |No|me |e|xal|ta|rei!" ,

        ],
        temposVersos: [
            4,4,4,4,2,2,12,
            2,2,4,2,2,4,4,12,
            4,4,4,4,4,4,4,4,
            4,4,2,2,4,4,12
        ],
        notas: [
            'D4','G4','G4','B4','A4','G4','A4',
            'B4','C5','D5','C5','B4','C5','B4','A4',
            'D5','B4','G4','A4','D4','G4','B4','D5',
            'D5','E5','D5','C5','B4','A4','G4',
        ],
        temposNotas: [
            4,4,4,4,2,2,12,
            2,2,4,2,2,4,4,12,
            4,4,4,4,4,4,4,4,
            4,4,2,2,4,4,12
        ]
    },
    "484": { 
        nome: "Glória, glórias nas alturas!",
        compasso: "4/4",
        velMin: 60,
        velMed: 72,
        velMax: 84,
        inicio: 1,
        velMinMeiaHora: 38,
        velMedMeiaHora: 40,
        velMaxMeiaHora: 42,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Gló|ria, |gló|ria |nas |al|tu|ras!"+
            "Gló|ria, |gló|ria ao |nos|so |Deus!"+
            "Sal|va|ção |nos |pre|pa|rou |por |Je|sus, |que |nos |a|mou;"+
            "Gló|ria ao |Deus |vi|ven|te |que |es|tá |nos |céus!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "485": { 
        nome: "Majestoso é Cristo Jesus!",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 4,
        velMinMeiaHora: 36,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "Ma|jes|to|so |é |Cris|to |Je|sus, |o |Se|nhor,"+
            "Ma|jes|to|so |é |Cris|to |Je|sus!"+
            "O |po|der |Deus |Lhe |deu |quer |na |ter|ra, |quer |no |céu,"+
            "Ma|jes|to|so |é |Cris|to |Je|sus!" ,

        ],
        temposVersos: [],
        notas: [],
        temposNotas: []
    },
    "486": { 
        nome: "A Jesus eu cantarei louvor",
        compasso: "4/4",
        velMin: 60,
        velMed: 68,
        velMax: 76,
        inicio: 1,
        velMinMeiaHora: 36,
        velMedMeiaHora: 38,
        velMaxMeiaHora: 40,
        MeiaHora: "N",
        velX3: "N",
        versos: [
            "A |Je|sus |eu |can|ta|rei |lou|vor; |"+
            "Hon|ra e |gló|ria |sem|pre |Lhe |da|rei;\n|"+
            "E|xal|ta|rei |ao |meu |Se|nhor; |"+
            "O |Seu |No|me |ben|di|rei."            
        ],
        temposVersos: [
            6,2,2,2,2,2,4,4,8,
            6,2,2,2,2,2,4,4,8,
            4,3,1,8,4,3,1,8,
            6,2,2,2,2,2,12
        ],
        notas: [
            'G4','G4','G4','B4','A4','G4','D4','F#4','A4',
            'A4','A4','A4','C5','B4','A4','G4','B4','D5',
            'D5','D5','D5','D5','C5','C5','C5','E5',
            'D5','D5','D5','B4','C5','A4','G4'
        ],
        temposNotas: [
            6,2,2,2,2,2,4,4,8,
            6,2,2,2,2,2,4,4,8,
            4,3,1,8,4,3,1,8,
            6,2,2,2,2,2,12
        ]
    }
};