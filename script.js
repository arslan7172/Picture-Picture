const videoElement = document.getElementById('video')
const button = document.getElementById('button')


// Promp to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    console.error(`error: ${error}`)
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true
  // Start picture in picture
  await videoElement.requestPictureInPicture()
  // Enable button
  button.disabled = false
})

// On Load
selectMediaStream()
