import audio from '@/assets/mouse-click.mp3'

export default () => {
    // load aduio
    const sound = new Audio(audio)

    return { sound }
}