controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
	
})
game.showLongText("ROBLOX LORE", DialogLayout.Full)
game.showLongText("QUANDSALE DIGLE APPLICATION ", DialogLayout.Bottom)
game.splash("")
forever(function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
    effects.confetti.startScreenEffect()
})
