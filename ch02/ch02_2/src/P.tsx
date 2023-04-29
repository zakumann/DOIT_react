import type {FC, PropsWithChildren} from 'react'

export type Pprops= {}
const P: FC<PropsWithChildren<Pprops>> = props => {
    return <p {...props} />
}
export default P