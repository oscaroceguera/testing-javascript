async function test (title, callback) {
  try {
    await callback()
    console.log(`✔ ${title}`)
  } catch (e) {
    console.error(`x ${title}`)
    console.error(e)
  }
}

function expect (actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual (expected) { },
    toBeGreatherThan (expected) { }
  }
}

global.test = test
global.expect = expect

// RUN => $ node --require ./setup-globals.js 01_fundamentals/index.js
