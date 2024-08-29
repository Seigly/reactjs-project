package in.sri.crudop.crud.doa;

import java.util.List;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.sri.crudop.crud.model.Employee;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO
{

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Employee> get() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Employee> query = currentSession.createQuery("from Employee", Employee.class);
		List<Employee> list = query.getResultList();
		return list;
		
	}

	@Override
	public Employee get(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Employee employeeObj = currentSession.get(Employee.class, id);
		return employeeObj;
	}

	@SuppressWarnings("deprecation")
	@Override
	public void save(Employee employee) {
		Session currentSession1 = entityManager.unwrap(Session.class);
		currentSession1.saveOrUpdate(employee);
		
	}

	@SuppressWarnings("deprecation")
	@Override
	public void delete(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Employee employeeObj = currentSession.get(Employee.class, id);
		currentSession.delete(employeeObj);
		
	}

}
