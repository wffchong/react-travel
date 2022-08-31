import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
    touristRouteId: string
}

const DetailPage: React.FC<RouteComponentProps<MatchParams>> = props => {
    return <h1>路游路线详情页面, 路线ID: {props.match.params.touristRouteId}</h1>
}

export default DetailPage