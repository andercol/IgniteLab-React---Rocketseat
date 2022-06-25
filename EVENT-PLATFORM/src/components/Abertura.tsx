import { DefaultUi, Player, Poster, Youtube } from "@vime/react";

export function Abertura() {
    return (
        <div className="w-[85vw] aspect-video mx-auto">
            <Player>
                <Youtube videoId="SO4-izct7Mc" key={"SO4-izct7Mc"}/>
                <DefaultUi/>
            </Player>
        </div>
    )
}