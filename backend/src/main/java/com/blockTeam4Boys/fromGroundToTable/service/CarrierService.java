package com.blockTeam4Boys.fromGroundToTable.service;

import com.blockTeam4Boys.fromGroundToTable.model.entities.*;
import com.blockTeam4Boys.fromGroundToTable.repositories.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CarrierService {

    private PlaceRepository placeRepository;
    private AddressRepository addressRepository;
    private StreetRepository streetRepository;
    private CityRepository cityRepository;
    private DistrictRepository districtRepository;
    private RegionRepository regionRepository;
    private CustomerRepository customerRepository;
    public CarrierService(PlaceRepository placeRepository,
                          AddressRepository addressRepository,
                          StreetRepository streetRepository,
                          CityRepository cityRepository,
                          DistrictRepository districtRepository,
                          RegionRepository regionRepository,
                          CustomerRepository customerRepository) {
        this.placeRepository = placeRepository;
        this.addressRepository = addressRepository;
        this.streetRepository = streetRepository;
        this.cityRepository = cityRepository;
        this.districtRepository = districtRepository;
        this.regionRepository = regionRepository;
        this.customerRepository = customerRepository;
    }

    public Set<Place> getMyPlaces() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        Customer customer = customerRepository.findByName(currentPrincipalName);
        return customer.getPlaces();
    }
    public Place createPlace(
            String physicalRegion,
            String physicalDistrict,
            String physicalCity,
            String physicalStreet,
            String physicalNumber,
            String physicalLetter,
            String legalRegion,
            String legalDistrict,
            String legalCity,
            String legalStreet,
            String legalNumber,
            String legalLetter) {
        Place place = new Place();

        Address legalAddress = setData(legalRegion,
                        legalDistrict,
                        legalCity,
                        legalStreet, legalNumber, legalLetter);

        Address physicalAddress = setData(physicalRegion,
                physicalDistrict,
                physicalCity,
                physicalStreet,
                physicalNumber, physicalLetter);

        place.setLegalAddress(legalAddress);
        place.setPhysicalAddress(physicalAddress);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        Customer customer = customerRepository.findByName(currentPrincipalName);

        place.setCustomer(customer);
        return placeRepository.saveAndFlush(place);
    }

    private Address setData(String Region,
                            String District,
                            String City,
                            String Street,
                            String Number,
                            String Letter) {
        Address address = new Address();

        address.setBuildingLetter(Letter.charAt(0));
        address.setBuildingNumber(Integer.parseInt(Number));

        Street StreetEntity = new Street();
        StreetEntity.setName(Street);

        City CityEntity = new City();
        CityEntity.setName(City);
        District DistrictEntity = new District();
        DistrictEntity.setName(District);
        Region RegionEntity = new Region();
        RegionEntity.setName(Region);

        regionRepository.saveAndFlush(RegionEntity);
        DistrictEntity.setRegion(RegionEntity);
        districtRepository.saveAndFlush(DistrictEntity);
        CityEntity.setDistrict(DistrictEntity);
        cityRepository.saveAndFlush(CityEntity);
        StreetEntity.setCity(CityEntity);
        streetRepository.saveAndFlush(StreetEntity);
        address.setStreet(StreetEntity);
        addressRepository.saveAndFlush(address);

        return address;
    }
}
