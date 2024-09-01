import { render } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Test del componente <GifItem>', () => {

    const titulo = 'Naturo'
    const url = 'https://hello/naruto.jpg'

    test('Match con el Snapshot', () => {
        const {container} = render(<GifItem title={titulo} url={url} />)
        expect(container).toMatchSnapshot()
    })
})