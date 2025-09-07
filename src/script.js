/************  Basic Protections  ************/
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if ((e.ctrlKey || e.metaKey) && (k === "s" || k === "u" || k === "p"))
    e.preventDefault();
});

const IMAGES = [
  "Aasimar_Cleric_Dawnguard.jpg",
  "Dragonborn_Monk_Firespirit.jpg",
  "Dragonborn_Paladin_Warrior.jpg",
  "Dragonborn_Sorcerer_Stormscale.jpg",
  "Dwarf_Berserker_Bloodrage.jpg",
  "Dwarf_Berserker_Fireaxe.jpg",
  "Dwarf_Cleric_Stonefaith.jpg",
  "Dwarf_Warrior_Ironshield.jpg",
  "Elf_Archer_Stararrow.jpg",
  "Elf_Bard_Goldensong.jpg",
  "Elf_Druid_Wildsong.jpg",
  "Elf_Enchanter_Starglow.jpg",
  "Elf_Priestess_Moonveil.jpg",
  "Elf_Ranger_Moonbow.jpg",
  "Elf_Sorcerer_Arcaneveil.jpg",
  "Elf_Sorceress_Iceveil.jpg",
  "Elf_Wizard_Stormcaller.jpg",
  "Gnome_Artificer_Gearsmith.jpg",
  "Gnome_Engineer_Steamshot.jpg",
  "Gnome_Illusionist_Foolspark.jpg",
  "HalfElf_Rogue_Nightfang.jpg",
  "Halfling_Bard_Sunwhistle.jpg",
  "Halfling_Rogue_Nightstep.jpg",
  "HalfOrc_Fighter_Ironclash.jpg",
  "Human_Archer_Sunstrike.jpg",
  "Human_Barbarian_Frostaxe.jpg",
  "Human_Cleric_Lightbringer.jpg",
  "Human_Commander_Battlecry.jpg",
  "Human_Gladiator_Sandfang.jpg",
  "Human_Knight_Lionheart.jpg",
  "Human_Mage_Starflare.jpg",
  "Human_Monk_IronFist.jpg",
  "Human_Necromancer_Bonelord.jpg",
  "Human_Paladin_Sunblade.jpg",
  "Human_Ranger_Wolfsong.jpg",
  "Human_Samurai_Moonblade.jpg",
  "Human_Sorcerer_Flamebinder.jpg",
  "Human_Warlock_Shadowbinder.jpg",
  "Orc_Gladiator_Skullbreaker.jpg",
  "Orc_Shaman_Stormhowl.jpg",
  "Orc_Warlord_Bloodfang.jpg",
  "Tiefling_Assassin_Shadefang.jpg",
  "Tiefling_Bard_Flamesong.jpg",
  "Tiefling_Sorceress_Hellflame.jpg",
  "Tiefling_Warlock_Nightcurse.jpg",
  "Undead_Knight_Deathveil.jpg",
  "Undead_Lich_Soulreaper.jpg",
  "Undead_Sorcerer_Boneshadow.jpg",
  "Vampire_Assassin_CrimsonFang.jpg",
  "Vampire_Lord_Bloodthorn.jpg",
];

const TITLES = {
  "Aasimar_Cleric_Dawnguard.jpg": "Aasimar Cleric Dawnguard",
  "Dragonborn_Monk_Firespirit.jpg": "Dragonborn Monk Firespirit",
  "Dragonborn_Paladin_Warrior.jpg": "Dragonborn Paladin Warrior",
  "Dragonborn_Sorcerer_Stormscale.jpg": "Dragonborn Sorcerer Stormscale",
  "Dwarf_Berserker_Bloodrage.jpg": "Dwarf Berserker Bloodrage",
  "Dwarf_Berserker_Fireaxe.jpg": "Dwarf Berserker Fireaxe",
  "Dwarf_Cleric_Stonefaith.jpg": "Dwarf Cleric Stonefaith",
  "Dwarf_Warrior_Ironshield.jpg": "Dwarf Warrior Ironshield",
  "Elf_Archer_Stararrow.jpg": "Elf Archer Stararrow",
  "Elf_Bard_Goldensong.jpg": "Elf Bard Goldensong",
  "Elf_Druid_Wildsong.jpg": "Elf Druid Wildsong",
  "Elf_Enchanter_Starglow.jpg": "Elf Enchanter Starglow",
  "Elf_Priestess_Moonveil.jpg": "Elf Priestess Moonveil",
  "Elf_Ranger_Moonbow.jpg": "Elf Ranger Moonbow",
  "Elf_Sorcerer_Arcaneveil.jpg": "Elf Sorcerer Arcaneveil",
  "Elf_Sorceress_Iceveil.jpg": "Elf Sorceress Iceveil",
  "Elf_Wizard_Stormcaller.jpg": "Elf Wizard Stormcaller",
  "Gnome_Artificer_Gearsmith.jpg": "Gnome Artificer Gearsmith",
  "Gnome_Engineer_Steamshot.jpg": "Gnome Engineer Steamshot",
  "Gnome_Illusionist_Foolspark.jpg": "Gnome Illusionist Foolspark",
  "HalfElf_Rogue_Nightfang.jpg": "Half-Elf Rogue Nightfang",
  "Halfling_Bard_Sunwhistle.jpg": "Halfling Bard Sunwhistle",
  "Halfling_Rogue_Nightstep.jpg": "Halfling Rogue Nightstep",
  "HalfOrc_Fighter_Ironclash.jpg": "Half-Orc Fighter Ironclash",
  "Human_Archer_Sunstrike.jpg": "Human Archer Sunstrike",
  "Human_Barbarian_Frostaxe.jpg": "Human Barbarian Frostaxe",
  "Human_Cleric_Lightbringer.jpg": "Human Cleric Lightbringer",
  "Human_Commander_Battlecry.jpg": "Human Commander Battlecry",
  "Human_Gladiator_Sandfang.jpg": "Human Gladiator Sandfang",
  "Human_Knight_Lionheart.jpg": "Human Knight Lionheart",
  "Human_Mage_Starflare.jpg": "Human Mage Starflare",
  "Human_Monk_IronFist.jpg": "Human Monk IronFist",
  "Human_Necromancer_Bonelord.jpg": "Human Necromancer Bonelord",
  "Human_Paladin_Sunblade.jpg": "Human Paladin Sunblade",
  "Human_Ranger_Wolfsong.jpg": "Human Ranger Wolfsong",
  "Human_Samurai_Moonblade.jpg": "Human Samurai Moonblade",
  "Human_Sorcerer_Flamebinder.jpg": "Human Sorcerer Flamebinder",
  "Human_Warlock_Shadowbinder.jpg": "Human Warlock Shadowbinder",
  "Orc_Gladiator_Skullbreaker.jpg": "Orc Gladiator Skullbreaker",
  "Orc_Shaman_Stormhowl.jpg": "Orc Shaman Stormhowl",
  "Orc_Warlord_Bloodfang.jpg": "Orc Warlord Bloodfang",
  "Tiefling_Assassin_Shadefang.jpg": "Tiefling Assassin Shadefang",
  "Tiefling_Bard_Flamesong.jpg": "Tiefling Bard Flamesong",
  "Tiefling_Sorceress_Hellflame.jpg": "Tiefling Sorceress Hellflame",
  "Tiefling_Warlock_Nightcurse.jpg": "Tiefling Warlock Nightcurse",
  "Undead_Knight_Deathveil.jpg": "Undead Knight Deathveil",
  "Undead_Lich_Soulreaper.jpg": "Undead Lich Soulreaper",
  "Undead_Sorcerer_Boneshadow.jpg": "Undead Sorcerer Boneshadow",
  "Vampire_Assassin_CrimsonFang.jpg": "Vampire Assassin CrimsonFang",
  "Vampire_Lord_Bloodthorn.jpg": "Vampire Lord Bloodthorn",
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
    "Elf_Ranger_Moonbow.jpg",
    "Human_Paladin_Sunblade.jpg",
    "Elf_Archer_Stararrow.jpg",
    "Elf_Sorceress_Iceveil.jpg",
    "Vampire_Lord_Bloodthorn.jpg",
    "Elf_Bard_Goldensong.jpg",
    "Orc_Warlord_Bloodfang.jpg",
    "Elf_Druid_Wildsong.jpg",
    "Dragonborn_Paladin_Warrior.jpg",
    "Elf_Sorcerer_Arcaneveil.jpg",
    "Elf_Priestess_Moonveil.jpg",
    "Aasimar_Cleric_Dawnguard.jpg",
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
