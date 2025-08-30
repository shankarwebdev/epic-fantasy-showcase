/************  Basic Protections  ************/
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if ((e.ctrlKey || e.metaKey) && (k === "s" || k === "u" || k === "p"))
    e.preventDefault();
});

/************  Images & Titles  ************/
const IMAGES = [
  "Aasimar_Cleric_Dawnguard.png",
  "Dragonborn_Monk_Firespirit.png",
  "Dragonborn_Paladin_Warrior.png",
  "Dragonborn_Sorcerer_Stormscale.png",
  "Dwarf_Berserker_Bloodrage.png",
  "Dwarf_Berserker_Fireaxe.png",
  "Dwarf_Cleric_Stonefaith.png",
  "Dwarf_Warrior_Ironshield.png",
  "Elf_Archer_Stararrow.png",
  "Elf_Bard_Goldensong.png",
  "Elf_Druid_Wildsong.png",
  "Elf_Enchanter_Starglow.png",
  "Elf_Priestess_Moonveil.png",
  "Elf_Ranger_Moonbow.png",
  "Elf_Sorcerer_Arcaneveil.png",
  "Elf_Sorceress_Iceveil.png",
  "Elf_Wizard_Stormcaller.png",
  "Gnome_Artificer_Gearsmith.png",
  "Gnome_Engineer_Steamshot.png",
  "Gnome_Illusionist_Foolspark.png",
  "HalfElf_Rogue_Nightfang.png",
  "Halfling_Bard_Sunwhistle.png",
  "Halfling_Rogue_Nightstep.png",
  "HalfOrc_Fighter_Ironclash.png",
  "Human_Archer_Sunstrike.png",
  "Human_Barbarian_Frostaxe.png",
  "Human_Cleric_Lightbringer.png",
  "Human_Commander_Battlecry.png",
  "Human_Gladiator_Sandfang.png",
  "Human_Knight_Lionheart.png",
  "Human_Mage_Starflare.png",
  "Human_Monk_IronFist.png",
  "Human_Necromancer_Bonelord.png",
  "Human_Paladin_Sunblade.png",
  "Human_Ranger_Wolfsong.png",
  "Human_Samurai_Moonblade.png",
  "Human_Sorcerer_Flamebinder.png",
  "Human_Warlock_Shadowbinder.png",
  "Orc_Gladiator_Skullbreaker.png",
  "Orc_Shaman_Stormhowl.png",
  "Orc_Warlord_Bloodfang.png",
  "Tiefling_Assassin_Shadefang.png",
  "Tiefling_Bard_Flamesong.png",
  "Tiefling_Sorceress_Hellflame.png",
  "Tiefling_Warlock_Nightcurse.png",
  "Undead_Knight_Deathveil.png",
  "Undead_Lich_Soulreaper.png",
  "Undead_Sorcerer_Boneshadow.png",
  "Vampire_Assassin_CrimsonFang.png",
  "Vampire_Lord_Bloodthorn.png",
];

const TITLES = {
  "Aasimar_Cleric_Dawnguard.png": "Aasimar Cleric Dawnguard",
  "Dragonborn_Monk_Firespirit.png": "Dragonborn Monk Firespirit",
  "Dragonborn_Paladin_Warrior.png": "Dragonborn Paladin Warrior",
  "Dragonborn_Sorcerer_Stormscale.png": "Dragonborn Sorcerer Stormscale",
  "Dwarf_Berserker_Bloodrage.png": "Dwarf Berserker Bloodrage",
  "Dwarf_Berserker_Fireaxe.png": "Dwarf Berserker Fireaxe",
  "Dwarf_Cleric_Stonefaith.png": "Dwarf Cleric Stonefaith",
  "Dwarf_Warrior_Ironshield.png": "Dwarf Warrior Ironshield",
  "Elf_Archer_Stararrow.png": "Elf Archer Stararrow",
  "Elf_Bard_Goldensong.png": "Elf Bard Goldensong",
  "Elf_Druid_Wildsong.png": "Elf Druid Wildsong",
  "Elf_Enchanter_Starglow.png": "Elf Enchanter Starglow",
  "Elf_Priestess_Moonveil.png": "Elf Priestess Moonveil",
  "Elf_Ranger_Moonbow.png": "Elf Ranger Moonbow",
  "Elf_Sorcerer_Arcaneveil.png": "Elf Sorcerer Arcaneveil",
  "Elf_Sorceress_Iceveil.png": "Elf Sorceress Iceveil",
  "Elf_Wizard_Stormcaller.png": "Elf Wizard Stormcaller",
  "Gnome_Artificer_Gearsmith.png": "Gnome Artificer Gearsmith",
  "Gnome_Engineer_Steamshot.png": "Gnome Engineer Steamshot",
  "Gnome_Illusionist_Foolspark.png": "Gnome Illusionist Foolspark",
  "HalfElf_Rogue_Nightfang.png": "Half-Elf Rogue Nightfang",
  "Halfling_Bard_Sunwhistle.png": "Halfling Bard Sunwhistle",
  "Halfling_Rogue_Nightstep.png": "Halfling Rogue Nightstep",
  "HalfOrc_Fighter_Ironclash.png": "Half-Orc Fighter Ironclash",
  "Human_Archer_Sunstrike.png": "Human Archer Sunstrike",
  "Human_Barbarian_Frostaxe.png": "Human Barbarian Frostaxe",
  "Human_Cleric_Lightbringer.png": "Human Cleric Lightbringer",
  "Human_Commander_Battlecry.png": "Human Commander Battlecry",
  "Human_Gladiator_Sandfang.png": "Human Gladiator Sandfang",
  "Human_Knight_Lionheart.png": "Human Knight Lionheart",
  "Human_Mage_Starflare.png": "Human Mage Starflare",
  "Human_Monk_IronFist.png": "Human Monk IronFist",
  "Human_Necromancer_Bonelord.png": "Human Necromancer Bonelord",
  "Human_Paladin_Sunblade.png": "Human Paladin Sunblade",
  "Human_Ranger_Wolfsong.png": "Human Ranger Wolfsong",
  "Human_Samurai_Moonblade.png": "Human Samurai Moonblade",
  "Human_Sorcerer_Flamebinder.png": "Human Sorcerer Flamebinder",
  "Human_Warlock_Shadowbinder.png": "Human Warlock Shadowbinder",
  "Orc_Gladiator_Skullbreaker.png": "Orc Gladiator Skullbreaker",
  "Orc_Shaman_Stormhowl.png": "Orc Shaman Stormhowl",
  "Orc_Warlord_Bloodfang.png": "Orc Warlord Bloodfang",
  "Tiefling_Assassin_Shadefang.png": "Tiefling Assassin Shadefang",
  "Tiefling_Bard_Flamesong.png": "Tiefling Bard Flamesong",
  "Tiefling_Sorceress_Hellflame.png": "Tiefling Sorceress Hellflame",
  "Tiefling_Warlock_Nightcurse.png": "Tiefling Warlock Nightcurse",
  "Undead_Knight_Deathveil.png": "Undead Knight Deathveil",
  "Undead_Lich_Soulreaper.png": "Undead Lich Soulreaper",
  "Undead_Sorcerer_Boneshadow.png": "Undead Sorcerer Boneshadow",
  "Vampire_Assassin_CrimsonFang.png": "Vampire Assassin CrimsonFang",
  "Vampire_Lord_Bloodthorn.png": "Vampire Lord Bloodthorn",
};

/************  Build Grid (lazy background images)  ************/
const grid = document.getElementById("grid");

function makeCard(filename) {
  const title =
    TITLES[filename] || filename.replace(/\.[^.]+$/, "").replace(/[_-]/g, " ");
  const card = document.createElement("article");
  card.className = "card-thumb";

  const imgDiv = document.createElement("div");
  imgDiv.className = "thumb-img protected-bg";
  imgDiv.setAttribute("data-src", `src/images/${filename}`);

  const clickLayer = document.createElement("div");
  clickLayer.className = "click-capture";
  clickLayer.setAttribute("role", "button");
  clickLayer.setAttribute("aria-label", `Preview ${title}`);
  clickLayer.addEventListener("click", () =>
    openLightbox(`src/images/${filename}`)
  );

  const caption = document.createElement("div");
  caption.className = "card-caption";
  caption.textContent = title;

  card.append(imgDiv, clickLayer, caption);
  return card;
}

/* IntersectionObserver: stream images in smoothly */
const io = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target,
        src = el.getAttribute("data-src");
      if (src) {
        el.style.backgroundImage = `url("${src}")`;
        el.removeAttribute("data-src");
      }
      obs.unobserve(el);
    });
  },
  { rootMargin: "400px 0px" }
);

IMAGES.forEach((f) => {
  const card = makeCard(f);
  grid.appendChild(card);
  io.observe(card.querySelector(".thumb-img"));
});

/************  Hero Rotator (cross-fade)  ************/
(function initHeroRotator() {
  const rotator = document.querySelector(".hero-rotator");
  if (!rotator) return;

  const slides = rotator.querySelectorAll(".hero-slide");
  if (slides.length < 2) return;

  const heroPool = [
    "Elf_Ranger_Moonbow.png",
    "Human_Paladin_Sunblade.png",
    "Elf_Archer_Stararrow.png",
    "Elf_Sorceress_Iceveil.png",
    "Vampire_Lord_Bloodthorn.png",
    "Elf_Bard_Goldensong.png",
    "Orc_Warlord_Bloodfang.png",
    "Elf_Druid_Wildsong.png",
    "Dragonborn_Paladin_Warrior.png",
    "Elf_Sorcerer_Arcaneveil.png",
    "Elf_Priestess_Moonveil.png",
    "Aasimar_Cleric_Dawnguard.png",
  ].map((f) => `src/images/${f}`);

  let current = 0,
    active = 0;
  const preload = (src) => {
    const i = new Image();
    i.src = src;
  };

  slides[0].style.backgroundImage = `url("${heroPool[0]}")`;
  slides[0].classList.add("is-active");
  slides[1].style.backgroundImage = `url("${heroPool[1]}")`;
  preload(heroPool[2 % heroPool.length]);

  const advance = () => {
    current = (current + 1) % heroPool.length;
    const inactive = active ^ 1; // toggle 0/1
    slides[inactive].style.backgroundImage = `url("${heroPool[current]}")`;
    slides[inactive].classList.add("is-active");
    slides[active].classList.remove("is-active");
    preload(heroPool[(current + 1) % heroPool.length]);
    active = inactive;
  };

  const startWhenVisible = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          obs.unobserve(rotator);
          setInterval(advance, 4000); // 4s between fades
        }
      });
    },
    { rootMargin: "0px 0px -20% 0px" }
  );

  startWhenVisible.observe(rotator);
})();

/************  Lightbox ************/
const lightboxModal = new bootstrap.Modal("#lightbox");
const lightboxFrame = document.getElementById("lightboxFrame");
function openLightbox(src) {
  lightboxFrame.style.backgroundImage = `url("${src}")`;
  lightboxModal.show();
}

/************  Footer year ************/
document.getElementById("year").textContent = new Date().getFullYear();

/************  Caption Mode Toggle ************/
const capAlways = document.getElementById("capAlways");
const capHover = document.getElementById("capHover");
capAlways.addEventListener("change", () => {
  grid.classList.add("caption-always");
  grid.classList.remove("caption-hover");
});
capHover.addEventListener("change", () => {
  grid.classList.add("caption-hover");
  grid.classList.remove("caption-always");
});
