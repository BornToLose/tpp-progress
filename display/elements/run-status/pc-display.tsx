/// <reference path="current-party.tsx" />
namespace TPP.Display.Elements.RunStatus {
    export class PC extends React.Component<{ pc: TPP.Tv.CombinedPCData }, {}> {
        render() {
            if (!this.props.pc)
                return null;
            return <div>
                <h2>{pokeRedCondenseText("Pokemon Storage System")}</h2>
                {this.props.pc.boxes.filter(b => !!b && !!b.box_number).map(b =>
                    <PCBox key={b.box_number} boxName={b.box_name} boxNumber={b.box_number} boxContents={b.box_contents} />
                )}
            </div>;
        }
    }
    export class PCBox extends React.Component<{ boxName: string, boxNumber?: number, boxContents: Tv.BoxedPokemon[] }, {}> {
        render() {
            const boxNum = this.props.boxNumber;
            const boxName = this.props.boxName;
            const boxContents = this.props.boxContents;
            return <PokeBox title={`${boxNum ? `#${boxNum}: ` : ""}${boxName} (${boxContents.length})`}
                className="pokemon-hud pc-box">
                <ul className="party">
                    {boxContents.length > 0 ?
                        boxContents.map(p => <Pokemon pokemon={p} key={p.box_slot || p.personality_value} />)
                        :
                        <li className="empty">Empty</li>
                    }
                </ul>

            </PokeBox>;
        }
    }
}