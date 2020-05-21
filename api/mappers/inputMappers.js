exports.mapStation = (input) => {
  console.log(input)
  const station = {
    playerId: input.playerId,
    position: {
      x: input.position.x,
      y: input.position.y
    },
    tiles: input.tiles
  }
  return station
}