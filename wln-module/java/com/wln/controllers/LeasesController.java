package com.wln.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:8989")
@RestController
public class LeasesController {

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public Map<String, String> getLeasesDHCPAll() {
        Map<String, String> a = new HashMap<>();
        a.put("1","2");
        a.put("3","4");
        return a;
    }

}
