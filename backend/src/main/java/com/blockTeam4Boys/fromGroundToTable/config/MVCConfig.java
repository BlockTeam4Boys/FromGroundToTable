package com.blockTeam4Boys.fromGroundToTable.config;

import com.blockTeam4Boys.fromGroundToTable.model.converters.requestParamToEntityConverters.StringToUnitTypeConverter;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MVCConfig implements WebMvcConfigurer {

    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("index.html");
        registry.addViewController("/registration").setViewName("index.html");
    }

    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(new StringToUnitTypeConverter());
    }

}
