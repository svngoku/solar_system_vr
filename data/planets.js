const planets = {
  Earth: {
    info: [
      {label: 'Distance moyenne du soleil (AU)', value: 1},
      {label: 'Diamètre relatif à la terre (km)', value: 1},
      {label: 'Masse relative à la terre', value: 1}
    ],
    description: "La Terre est la plus grande et la plus dense des planètes internes, la seule connue pour avoir une activité géologique actuelle et le seul endroit où la vie est connue. Son hydrosphère liquide est unique parmi les planètes terrestres et c'est la seule planète où la tectonique des plaques a été observée. L'atmosphère terrestre est radicalement différente de celles des autres planètes, ayant été altérée par la présence de la vie pour contenir 21% d'oxygène libre."
  },
  Neptune: {
    info: [
      {label: 'Distance moyenne du soleil (AU)', value: 30.06},
      {label: 'Diamètre relatif à la terre (km)', value: 3.88},
      {label: 'Masse relative à la terre', value: 17.23}
    ],
    description: "Neptune est la huitième planète la plus éloignée du Soleil dans le système solaire. Dans le système solaire, c'est la quatrième plus grande planète en diamètre, la troisième planète la plus massive et la planète géante la plus dense. Neptune est 17 fois la masse de la Terre et est légèrement plus massive que son quasi-jumeau Uranus, qui est 15 fois la masse de la Terre et légèrement plus grande que Neptune."
  },
  Jupiter: {
    info: [
      {label: 'Distance moyenne du soleil (AU)', value: 5.203},
      {label: 'Diamètre relatif à la terre (km)', value: 11.19},
      {label: 'Masse relative à la terre', value: 317.8}
    ],
    description: "Jupiter est la cinquième planète du Soleil et la plus grande du système solaire. Il s’agit d’une planète géante dont la masse est égale au millième de celle du Soleil, mais deux fois et demie supérieure à celle de toutes les autres planètes du système solaire combinées. Jupiter et Saturne sont des géantes gazeuses; les deux autres planètes géantes, Uranus et Neptune, sont des géantes de glace."
  },
  Mars: {
    info: [
      {label: 'Distance moyenne du soleil (AU)', value: 1.524},
      {label: 'Diamètre relatif à la terre (km)', value: 0.532},
      {label: 'Masse relative à la terre', value: 0.107}
    ],
    description: "Mars (1,5 UA du Soleil) est plus petite que la Terre et Vénus (0,107 masses terrestres). Son atmosphère est principalement composée de dioxyde de carbone avec une pression de surface de 6,1 millibars (environ 0,6% de celle de la Terre). Sa surface, parsemée de vastes volcans, tels que l'Olympus Mons, et les vallées du Rift, telles que Valles Marineris, montre une activité géologique qui aurait pu persister jusqu'à il y a 2 millions d'années. Sa couleur rouge provient de l'oxyde de fer (rouille) dans son sol. Mars a deux minuscules satellites naturels (Deimos et Phobos) qui seraient des astéroïdes capturés."
  },
  Saturn: {
    info: [
      {label: 'Distance moyenne du soleil (AU)', value: 9.529},
      {label: 'Diamètre relatif à la terre (km)', value: 9.26},
      {label: 'Masse relative à la terre', value: 95.3}
    ],
    description: "Saturne est la sixième planète du Soleil et la deuxième plus grande du système solaire, après Jupiter. C'est un géant gazier dont le rayon moyen est environ neuf fois celui de la Terre. Bien qu’elle n’ait que le huitième de la densité moyenne de la Terre, Saturne, avec son volume plus important, est un peu plus de 95 fois plus massive. Saturne est nommé d'après le dieu romain de l'agriculture; son symbole astronomique () représente la faucille du dieu."
  },
  Uranus: {
    info: [
      {label: 'Distance moyenne du soleil (AU)', value: 19.19},
      {label: 'Diamètre relatif à la terre (km)', value: 4.01},
      {label: 'Masse relative à la terre', value: 14.6}
    ],
    description: "Uranus est la septième planète du Soleil. Il possède le troisième plus grand rayon planétaire et la quatrième plus grande masse planétaire du système solaire. La composition d'Uranus est similaire à celle de Neptune et les deux ont une composition chimique globale différente de celle des géants gaziers Jupiter et Saturne. Pour cette raison, les scientifiques classent souvent Uranus et Neptune comme des «géants de la glace» pour les distinguer des géants gaziers."
  },
  Mercury: {
    info: [
      {label: 'Distance moyenne du soleil (AU)', value: 0.387},
      {label: 'Diamètre relatif à la terre (km)', value: 0.382},
      {label: 'Masse relative à la terre', value: 0.055}
    ],
    description: "Mercure est la plus petite planète du système solaire. C'est la planète la plus proche du soleil. Il fait un tour du Soleil une fois tous les 87,969 jours. Le mercure est brillant lorsqu'il est visible de la Terre, sa magnitude apparente variant entre -2,0 et 5,5. On ne le voit pas facilement car il est généralement trop proche du soleil. Parce que le mercure est normalement perdu dans la lueur du soleil (sauf pendant une éclipse solaire), le mercure ne peut être vu que le crépuscule du matin ou du soir."
  },
  Venus: {
    info: [
      {label: 'Distance moyenne du soleil', value: 0.723},
      {label: 'Diamètre relatif à la terre (km)', value: 0.949},
      {label: 'Masse relative à la terre', value: 0.815}
    ],
    description: "Vénus est la deuxième planète du Soleil, la gravitant autour tous les 224,7 jours terrestres. Elle a la plus longue période de rotation (243 jours) de toutes les planètes du système solaire et tourne dans le sens opposé à la plupart des autres planètes. Il n'a pas de satellites naturels. Il est nommé d'après la déesse romaine de l'amour et de la beauté."
  },
  Moon: {
    info: [],
    description: "La Lune est un corps astronomique en orbite autour de la planète Terre, étant le seul satellite naturel permanent de la Terre. Il s’agit du cinquième plus grand satellite naturel du système solaire et du plus grand satellite parmi les satellites planétaires par rapport à la taille de la planète qu’il orbite (la Terre)."
  }
};

export default planets;
