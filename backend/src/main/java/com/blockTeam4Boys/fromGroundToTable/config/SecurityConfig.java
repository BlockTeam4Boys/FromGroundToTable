package com.blockTeam4Boys.fromGroundToTable.config;

import com.blockTeam4Boys.fromGroundToTable.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private CustomerService customerService;

    public SecurityConfig(CustomerService customerService) {
         this.customerService = customerService;
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customerService).passwordEncoder(encoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
        http.csrf().disable();

        http
                .authorizeRequests()
                .antMatchers("/login*",
                        "/manifest.json",
                        "/static/**",
                        "/admin/**",
                        "/dummyLogin*",
                        "/create-transfer/*",
                        "/me/*",
                        "/create-place/*",
                        "/getMyPlaces/*",
                        "/consistently-transfer/*",
                        "/registration").permitAll()
                .antMatchers("/**").authenticated();

        http
                .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/dummyLogin")
                .successForwardUrl("/")
                .failureHandler(this::handleFailureAuthentication);

        http.httpBasic();
    }

    private void handleFailureAuthentication(HttpServletRequest httpServletRequest,
                                             HttpServletResponse httpServletResponse,
                                             AuthenticationException authenticationException) throws IOException {
        httpServletResponse.sendRedirect("/login");
    }
}
