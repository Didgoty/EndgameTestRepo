<script>
import InformationModalButton from "@/components/modals/InformationModalButton";
import ModalCloseButton from "@/components/modals/ModalCloseButton";

export default {
  name: "InformationModal",
  components: {
    ModalCloseButton,
    InformationModalButton
  },
};
</script>

<template>
  <div class="l-information-modal c-information-modal">
    <ModalCloseButton @click="emitClose" />
    <div class="l-h2p-header">
      <div class="c-h2p-title">
        About the game
      </div>
    </div>
    <div class="c-info-body">
      Antimatter Dimensions is an Idle Incremental game created by Finnish developer Hevipelle. Originating as a solo
      project in 2016, it was expanded upon by a large team of developers and testers from then on. In 2024, American
      developer Supersonic Seven beat the vanilla game and decided to mod it for additional content and improved lore.
      The first public release of Antimatter Dimensions: Endgame was issued by Supersonic Seven in 2025, and since
      then has been updating the game whenever possible.
      <br>
      <br>
      The game has unfolding gameplay and multiple prestige layers. The "How to Play" button contains useful
      information about progressing.
    </div>
    <div class="l-socials">
      <InformationModalButton
        name="GitHub repository"
        icon="fa-brands fa-github"
        link="https://github.com/IvarK/AntimatterDimensionsSourceCode"
      />
      <InformationModalButton
        name="Endgame repository"
        icon="fa-brands fa-github"
        link="https://github.com/Supersonic-Seven/AntimatterDimensionsEndgameUpdate"
      />
      <InformationModalButton
        name="r/AntimatterDimensions"
        icon="fa-brands fa-reddit-alien"
        link="https://www.reddit.com/r/AntimatterDimensions/"
      />
      <InformationModalButton
        name="r/EndgameAntimatterDims"
        icon="fa-brands fa-reddit-alien"
        link="https://www.reddit.com/r/EndgameAntimatterDims/"
      />
      <InformationModalButton
        name="Antimatter Dimensions Discord Server"
        icon="fa-brands fa-discord"
        link="https://discord.gg/ST9NaXa"
      />
      <InformationModalButton
        name="Antimatter Dimensions: Endgame Discord Server"
        icon="fa-brands fa-discord"
        link="https://discord.gg/yuxrGFcJXc"
      />
      <InformationModalButton
        name="Antimatter Dimensions on Google Play"
        icon="fa-brands fa-google-play"
        link="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions"
      />
      <InformationModalButton
        name="Antimatter Dimensions on Steam"
        icon="fa-brands fa-steam"
        link="https://store.steampowered.com/app/1399720/Antimatter_Dimensions/"
      />
      <InformationModalButton
        name="Credits"
        icon="fa-solid fa-users"
        show-modal="credits"
      />
      <InformationModalButton
        name="Game Changelog"
        icon="fa-solid fa-file-lines"
        show-modal="changelog"
      />
      <InformationModalButton
        name="Guide (Unfinished)"
        icon="fa-solid fa-file-lines"
        link="https://antimatter-dimensions-endgame.fandom.com/wiki/Guide"
      />
    </div>
  </div>
</template>

<style scoped>
.l-information-modal {
  display: flex;
  flex-direction: column;
  /* stylelint-disable-next-line unit-allowed-list */
  width: calc(100vw - 50vh);
  justify-content: space-around;
}

.c-information-modal {
  margin: 0.5rem;
}

.c-info-body {
  text-align: left;
  font-size: 2rem;
  margin: 1rem;
  padding: 0.5rem;
}

.t-s12 .c-info-body {
  font-size: 1.3rem;
  margin: 0;
}

.l-socials {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 7.5rem;
}

.t-s12 .l-socials {
  width: 100%;
  align-self: center;
}
</style>
