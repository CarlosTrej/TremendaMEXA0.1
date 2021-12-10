package org.tremendaMX.ecommerce;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.tremendaMX.ecommerce.model.usuarios;
import org.springframework.http.MediaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;

@SpringBootTest
@AutoConfigureMockMvc
class EcommerceApplicationTests {
	@Autowired
	private MockMvc mockMvc;

	//@Test
	//void contextLoads() {
	//}
	
	@Test
	public void TestPut() throws Exception {
			this.mockMvc.perform(
					put("/api/usuarios/21?currentpassword=nadaytu&newpassword=holaquehace")).
			andDo(print()).andExpect(status().isOk() ) ;
	}// TestPut
	
	@Test
	public void TestGet() throws Exception  {
		this.mockMvc.perform( get("/api/usuarios/") ).andDo(print())
		.andExpect(status().isOk() )
		.andExpect(content().string(containsString("@gmail.com") ) );
		
		
	}//TestGET

	@Test 
	public void TestDelete() throws Exception {
		this.mockMvc.perform( delete("/api/usuarios/2") ).andDo(print())
		.andExpect(status().isOk()) ;
	}//TestDelete
	
	@Test
	public void shouldReturn404Error() throws Exception {
		this.mockMvc.perform( get("/api/usuarios/20") ).andDo(print())
		.andExpect(status().is5xxServerError() );			
	}// shouldReturn404Error
	
	@Test
	public void TestPOST() throws Exception {
		usuarios user = new usuarios();
		user.setNombre("JC");
		user.setApellido("Valencia");
		user.setCorreo("juanEdu@idr.edu.mx");
		user.setClearPassword("linux");
		user.setTelefono("5561633793");
		this.mockMvc.perform(post("/api/usuarios/").
				contentType(MediaType.APPLICATION_JSON).
				content(asJSONString(user) ) ).
			andExpect(status().isOk());
	}// TestPOST
	
	  public static String asJSONString(final Object obj) {
		    try {
		      return new ObjectMapper().writeValueAsString(obj);
		    } catch (Exception e) {
		      throw new RuntimeException(e);
		    }
		  }//asJSONString
	  
	 

}
