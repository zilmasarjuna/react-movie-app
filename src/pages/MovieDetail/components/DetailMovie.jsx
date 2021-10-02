import React from 'react'

import { useParams } from 'react-router-dom'

import { useMovie } from "../hooks"

import { Row, Col, Descriptions, Skeleton } from 'antd'

const DetailMovie = () => {
  const params = useParams()
  const { data, isFetching } = useMovie(params.id)

  if (isFetching) {
    return <Skeleton />
  }
  return (
    <div className="card-detail">
      <Row gutter={20}>
        <Col span={6}>
          <img src={data.Poster} class="img-detail" alt="detail-img" width="100%" />
        </Col>
        <Col span={18}>
          <h2>{data.Title}</h2>
          <Descriptions>
            <Descriptions.Item label="Year" span={24}>{data.Year}</Descriptions.Item>
            <Descriptions.Item label="Country" span={24}>{data.Country}</Descriptions.Item>
            <Descriptions.Item label="Language" span={24}>{data.Language}</Descriptions.Item>
            <Descriptions.Item label="Released" span={24}>{data.Released}</Descriptions.Item>
            <Descriptions.Item label="Writer" span={2}>{data.Writer}</Descriptions.Item>
          </Descriptions>
          <p>
            {data.Plot}
          </p>
        </Col>
      </Row>  
    </div>
  )
}

export default DetailMovie