package com.lazulite.demo.web.rest;

import com.lazulite.demo.service.DemoKafka20191203KafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demo-kafka-20191203-kafka")
public class DemoKafka20191203KafkaResource {

    private final Logger log = LoggerFactory.getLogger(DemoKafka20191203KafkaResource.class);

    private DemoKafka20191203KafkaProducer kafkaProducer;

    public DemoKafka20191203KafkaResource(DemoKafka20191203KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.send(message);
    }
}
