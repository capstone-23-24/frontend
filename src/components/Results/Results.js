import React, { useState } from "react";
import "./Results.css";
import { Card, Row, Col } from 'antd'

const Results = ({ caseTitle, predictedTags, caseInformation }) => {
    const tabList = [
        { key: "Tags", label: "Tags" },
        { key: "Case Information", label: "Case Information" }
    ];

    const tabs = {
        "Tags": [predictedTags.map((tag, index) => {
                    return <p key={index}>{tag}</p>
                })],
        "Case Information": caseInformation
    };

    const [activeTabeKey, setActiveTabKey] = useState(tabList[0].key);

    const onTabChange = (key) => {
        setActiveTabKey(key);
    }

    return (
        <Row className="results-row">
            <Col className="results-col">
                <Card
                    title={caseTitle}
                    className="results-card"
                    bordered
                    activeTabKey={activeTabeKey}
                    tabList={tabList}
                    onTabChange={onTabChange}
                >
                    {tabs[activeTabeKey]}
                </Card>
            </Col>
        </Row>
    )
}

export default Results;