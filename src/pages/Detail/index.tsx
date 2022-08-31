import { useParams } from 'react-router-dom'

type MatchParams = {
    touristRouteId: string
    other: string
}

const DetailPage: React.FC = () => {
    const params = useParams<MatchParams>()
    return (
        <h1>
            路游路线详情页面, 路线ID:{params.touristRouteId} {params.other}
        </h1>
    )
}

export default DetailPage
