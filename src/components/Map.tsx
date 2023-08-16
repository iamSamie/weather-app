import { Coord } from '../rtk/initialStateTypes'

const Map = ({ lon, lat }: Coord) => {
    let path: string = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24346.06456566649!2d${lon}!3d${lat}9999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1692179918175!5m2!1sru!2sam`

    return (
        <iframe
            src={path}
            loading="lazy"
            referrerPolicy="no-referrer"
            title="myMap"></iframe>
    )
}
export { Map }
