// Characters
import admiral_ackbar from './images/characters/ADMIRAL-ACKBAR.jpeg';
import ahsoka from './images/characters/ahsoka.jpeg';
import anakin_skywalker from './images/characters/anakin-skywalker.jpeg';
import baylan_skoll from './images/characters/baylan_skoll.jpeg';
import sabine from './images/characters/sabine.jpeg';
import hera from './images/characters/hera.jpeg';
import ezra from './images/characters/ezra.jpeg';

// Creatures
import howler from './images/creatures/howler.jpeg';
import loth_cat from './images/creatures/loth-cat.jpeg';
import purrgil from './images/creatures/purrgil.jpeg';

// Droids
import hk_87_assassin_droid from './images/droids/hk-87-assassin-droid.jpeg';
import star_navigator_droid from './images/droids/star-navigator-droid.jpeg';

// Locations
import great_mothers_fortress from './images/locations/great-mothers-fortress.jpeg';
import santhe_shipyard from './images/locations/santhe-shipyard.jpeg';
import the_far_galaxy from './images/locations/the-far-galaxy.jpeg';

// Organizations
import new_republic from './images/organizations/new-republic.jpeg';
import nightsisters from './images/organizations/nightsisters.jpeg';
import the_great_mothers from './images/organizations/the-great-mothers.jpeg';

// Vehicles
import the_eye_of_sion from './images/vehicles/the-eye-of-sion.jpeg';
import the_ghost from './images/vehicles/the-ghost.jpeg';
import vesper from './images/vehicles/vesper.jpeg';

// weapons_and_tech
import bokken_sabers from './images/weapons_and_tech/bokken-sabers.jpeg';
import history_of_the_galaxy from './images/weapons_and_tech/history-of-the-galaxy.jpeg';
import imperial_minefield from './images/weapons_and_tech/imperial-minefield.jpeg';

const characters = [
    {
        name: 'Admiral Ackbar',
        image: admiral_ackbar,
        about: 'A veteran commander, Ackbar led the defense of his homeworld, Mon Cala, during the Clone Wars and then masterminded the rebel attack on the second Death Star at the Battle of Endor. Ackbar realized the rebels had been drawn into a trap at Endor, but adjusted, with his fleet buying valuable time for the attack to succeed. After the Battle of Endor, Ackbar became a Grand Admiral in the New Republic, winning many victories including the pivotal Battle of Jakku. He retired to Mon Cala, but was coaxed back into service with the Resistance by Leia Organa.'
    },    
    {
        name: 'Ahsoka Tano',
        image: ahsoka,
        about: 'Former Jedi Knight Ahsoka Tano once served as the Padawan learner to Jedi Anakin Skywalker during the Clone Wars. A respected leader and warrior attuned to the light side of the Force, Ahsoka grew into a formidable fighter before the Empire’s reign changed the course of galactic history. Although she walked away from the Jedi Order, she continued to stand up for those fighting for peace and justice in the galaxy long after the fall of the Republic.'
    },
    {
        name: 'Anakin Skywalker',
        image: anakin_skywalker,
        about: "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever. Some even believed he was the prophesied Chosen One who would bring balance to the Force. Always pushing the limits of his Jedi training, seeking to excel and live up to his reputation, Skywalker's passion often brought him into conflict with his mentor, Jedi Master Obi-Wan Kenobi. A hero of the Clone Wars, Anakin was caring and compassionate, but suffered from a deep fear of loss that would prove to be his downfall."
    },
    {
        name: 'Baylan Skoll',
        image: baylan_skoll,
        about: 'Baylan Skoll is lightsaber-wielding mercenary for hire overseeing his apprentice Shin Hati. But make no mistake: although there was a time when Skoll knew the acclaimed Jedi Knight Anakin Skywalker, Baylan is no Jedi. Now allied to Morgan Elsbeth, the former Magistrate of Calodan, after the fall of the Jedi and the Empire, Skoll remains a shrewd fighter in search of power who believes that another war is inevitable.'
    },   
    {
        name: 'Sabine Wren',
        image: sabine,
        about: 'Sabine Wren is a Mandalorian warrior, explosives expert, and graffiti artist - qualities that come in handy as one of the first rebels against the Empire.'
    },
    {
        name: 'Hera Syndulla',
        image: hera,
        about: 'Hera Syndulla was a Twi\'lek female revolutionary who became a central figure in the early rebellion against the Galactic Empire and the formation of the Alliance to Restore the Republic.'
    },
    {
        name: 'Ezra Bridger',
        image: ezra,
        about: 'Ezra Bridger, a Force-sensitive human male, was a Jedi Padawan, a freedom fighter, and a revolutionary leader in the early rebellion against the Galactic Empire.'
    }
];

const creatures = [
    {
        name: 'HOWLER',
        image: howler,
        about: 'Shaggy canids with fearsome, toothy jaws, the howlers of Peridea lope across the barren wilderness on long, slender legs, occasionally serving as mounts for bipedal travelers.'
    },    
    {
        name: 'LOTH-CAT',
        image: loth_cat,
        about: 'A breed of feline native to Lothal and often found in the grassy plains of the Outer Rim planet, Loth-cats are small, temperamental animals. While at times they can be friendly — and indeed, make affectionate pets when domesticated — Loth-cats are able hunters with sharp teeth and claws.'
    },
    {
        name: 'PURRGIL',
        image: purrgil,
        about: 'Massive space-whales, purrgil are rare creatures that are the stuff of many legends, dwelling neither on land nor sea. Purrgil propel themselves gracefully through space by flexing muscular tentacles along with several fins. Gulping interstellar gasses for sustenance to fuel their spectacular ability to naturally jump through hyperspace, pods of purrgil can occasionally be seen traveling.'
    }   
]

const droids = [
    {
        name: 'HK-87 ASSASSIN DROID',
        image: hk_87_assassin_droid,
        about: 'Assassins by design, the HK-87 droids loyal to Morgan Elsbeth have serve her as tireless bodyguards and enforcers.',
    }, 
    {
        name: 'STAR NAVIGATOR DROID',
        image: star_navigator_droid,
        about: 'With programmed navigation skills and efficiency, the Star Navigator droids carry out the orders of Morgan Elsbeth as she brings her plans to fruition.',
    }                   
]

const locations = [
    {
        name: "GREAT MOTHERS' FORTRESS",
        image: great_mothers_fortress,
        about: 'On the unforgiving world of Peridea, amid a landscape of crumbling statues, the Great Mothers — ancient ancestors of the Nightsisters — wield their dark majik and commune with Morgan Elsbeth from beyond, calling to their descendant through visions and dreams.'
    },
    {
        name: 'SANTHE SHIPYARDS',
        image: santhe_shipyard,
        about: 'After the fall of the Empire, many of the factories on Corellia now work in service to the New Republic. This evolution is most obvious in places like the Santhe Shipyards, where remnants of Imperial technology remain in the metal bones of incomplete Star Destroyers. These war machines are being deconstructed, their hyperdrive generator cores reclaimed to power new ships built for defense.'
    },     
    {
        name: 'FAR GALAXY',
        image: the_far_galaxy,
        about: 'The far galaxy includes the world of Peridea, a desolate place that was the ancient homeworld of the Nightsisters’ ancestors, the Dathmiri.'
    }, 
]

const organizations = [
    {
        name: 'THE NEW REPUBLIC',
        image: new_republic,
        about: 'The Rebel Alliance became the New Republic after its victory over the Empire at the Battle of Endor. Eager to win over the war-weary citizens of the galaxy, the New Republic revived the Senate, signed a peace treaty – the Galactic Concordance – with the Empire’s remnants, and drastically reduced its military capabilities. That policy aroused the ire of rebel hero Leia Organa, who warned that elements of the Empire were still seeking power. Sidelined from the political process, Organa founded the Resistance to oppose the Empire’s successor state, the mysterious First Order.'
    },
    {
        name: 'NIGHTSISTERS',
        image: nightsisters,
        about: 'The Nightsisters are a coven of witches that lived on the mysterious world of Dathomir. The sisters ruled unchallenged, gifted with the power to wield dark magicks. The men of Dathomir, the Nightbrothers, lived apart from the witches, but were subservient to their whims. Despite their power, the Nightsisters avoided the conflict of the Republic and Sith, content to pursue their own matters. The Jedi gave them a wide berth, for they remain focused on matters on Dathomir. Count Dooku has had dealings with them in the past, and turned to them when he was in need of a new apprentice. Their betrayal of Dooku earned the Nightsisters a powerful enemy, and he ordered a massive attack by his droid forces in retribution.'
    },
    {
        name: 'THE GREAT MOTHERS',
        image: the_great_mothers,
        about: 'On the world of Peridea, the three Dathmiri witches — Klothow, Lakesis, and Aktropaw — weave their mysterious majik to help Grand Admiral Thrawn survive in exile.'        
    } 
]

const vehicles = [
    {
        name: 'THE EYE OF SION',
        image: the_eye_of_sion,
        about: 'Morgan Elsbeth commands the Eye of Sion, a unique starship powered by three distinct clusters of hyperdrive engines installed along a circular chassis. Capable of traveling across vast distances, the hyperspace ring can even move beyond the known galaxy.'
    },
    {
        name: 'THE GHOST',
        image: the_ghost,
        about: 'Named for its ability to travel past Imperial sensors without detection, the Ghost has served Captain and pilot Hera Syndulla and her droid, Chopper, for more than a decade. A customized VCX-100 light freighter, the Ghost boasts a number of systems designed to elude foes, including a 360-degree dorsal laser cannon turret, two forward laser cannons, and two rear laser cannons. During the time of the Empire, the starship also served as a mobile base for Syndulla’s small band of rebels working to aid the people of Lothal and other planets in need. After the Galactic Civil War that brought about the New Republic, Hera still prefers flying the Ghost to other ships, using it as a homebase for herself, her droid, and her son, Jacen. Although the original detachable shuttle, the Phantom, was lost in combat with the Empire, the Ghost now operates with the assistance of the Phantom II, a repurposed Neimoidian Sheathipede-class shuttle.'
    },
    {
        name: 'VESPER',
        image: vesper,
        about: 'Built after the fall of the Empire, the Vesper is a shining example of the New Republic fleet, a sleek and sophisticated vessel built for diplomacy and exploration, not war. With a crew led by Captain Hayle, a veteran of the Galactic Civil War who fought on the side of the Rebel Alliance, the Vesper was tasked with transporting political prisoner Morgan Elsbeth for trial before it came under attack by two mercenaries, posing as Jedi and looking to free the captive.'
    },  
]

const weapons_and_tech = [
    {
        name: 'BOKKEN SABERS',
        image: bokken_sabers,
        about: 'For generations, the Jedi Order employed a variety of training instruments to prepare younglings and Padawans for lightsaber defense. Bokken sabers, lightweight wooden facsimiles similar in shape to the kyber-powered weapon of the Jedi, are tools for safely sparring without the danger of losing a hand.'
    },
    {
        name: 'HISTORY OF THE GALAXY',
        image: history_of_the_galaxy,
        about: 'Deep in Professor Huyang’s databanks, the ancient droid retains much knowledge that served him over millennia with the Jedi Order. Included in these records is a detailed blueprint of every lightsaber constructed under his tutelage and the three-volume set, History of the Galaxy. The stories, which he once used to entertain the younglings at the Jedi Temple, tell of the “Pathway to Peridea” and other tales.'
    },
    {
        name: 'IMPERIAL MINEFIELD',
        image: imperial_minefield,
        about: 'Deployed as the first line of defense around proprietary locations, an Imperial minefield can be placed at a hyperspace arrival point to bombard unwanted visitors and alert denizens to their arrival.'
    }             
]

export { characters, creatures, droids, locations, organizations, vehicles, weapons_and_tech };