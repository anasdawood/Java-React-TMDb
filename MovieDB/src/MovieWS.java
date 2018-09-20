import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;

import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/movies")
@Stateless
public class MovieWS {

	@GET
	@Path("/list")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getMsg() {

		Object y = domagic();
		return Response.status(200).entity(y).build();

	}

	private Object domagic() {
		String sURL = "https://api.themoviedb.org/3/trending/all/day?api_key=YOUR_API_KEY"; // just																						// a
																												// string
		try {
			// Connect to the URL using java's native library
			URL url = new URL(sURL);
			URLConnection request = url.openConnection();
			request.connect();
			return request.getContent();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}

}
