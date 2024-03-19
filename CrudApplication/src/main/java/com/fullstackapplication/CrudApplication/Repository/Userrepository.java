package com.fullstackapplication.CrudApplication.Repository;

import com.fullstackapplication.CrudApplication.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Userrepository extends JpaRepository<User,Long> {
    

}
