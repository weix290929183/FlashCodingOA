<template>
<div>
    <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
    <Row :gutter="16">
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
    </Row>
</div>
</template>
<script>
    export default {
        
    }
</script>