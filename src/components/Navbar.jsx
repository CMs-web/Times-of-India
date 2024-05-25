import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = ({ fetchData }) => {

  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(text)
    setText("")
  };

  return (
    <nav className="flex justify-between px-8 bg-slate-100 py-2">
      <ul className="flex items-center justify-around w-6/12">
        <img
          className="h-7"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX9My3iLijiLyr////jMCr4+Pj+/v739/f7+/v3///6oJ39LCT6npziMSz+8vLmW1fhJx/53Nv8RD7hKSL+0M/wmZftn53jQTv3yMb+ycf8MCr9JyD38vL/My3gHhf3Miz9GA3fAADvMCr7amb9Ozb86Of64N/6pqP8UEzfFg72wL/pcW7lTUn41dT7gH39Pzr7c2/7iIX8e3j6sa/9TEj8W1jyrqznYV77lZL7cGz5uLblU0/9WlXsfXrpambkRUHshYL9BADtjYruHhV2nMsAAAAT/ElEQVR4nO2dCX+iutfHZRGhFsTiNkipG7agdLO1HVprr//3/56eBFAJBAKSLvrMufOZO9MByTe/k3OSkJgKxwmnbBxX4U7dKgIniCdsnAAIxdrpWlUICKt5LLhDlH7axLAkucqclxB8oFGrwo+vKVO35S0Wi/Oz77Zz8FSv5U6VGixIFZSIjJmP0McDn2lMnevX27/P7093k0ml/v1WmUzunt6f/96+XjtTA1Y3ETIfoWEA9SzvYXxzB7n0wCrfb+GTIevdzfjBs4CSoHDlCGtAQfA5i/FFvV//Cao000F5LsYLUPdAxazyZxPCeyXRvdUH/d9EtzW9P9BvXVGqpjNmE/r3Gc4YfM5Ps6QaqPuxY1RTGUmEouHc13+lfHvT+/V7xxCLE4IgJVbdB/2X80EDZXxwqyI2rGYSStb10xHwQdP7T9eWVITQjzDuI4jKx2L1+qOLizgphOBCserd/KrsQDK9fuMBT40j4gkhoHE+OSY+aPrk3EggYgnhRcbDkbTAqOn9ByPuqDhCH/B28NPFPcgGt3FEDKEPOB78dFkPtAQiVkPReBz8dEkPtsGjIZI0FI2HwU+Xs4QNHgwxS0OYNM/7P13KUtY/r0bcFEMoeUeXJlDTJ16kd5MklFo3xw0IEG9aUhoh6Gxb98fTU0uz+r0lblVMRprro+qq4U2vX6e0QyBh6+L4JQQiXrS2IsY1NG6PO45urX9r4DQE1M4J+Cg0ve5UAxFjGhrj05AQiDg2cBpKzhEOKPCm9x0pqaEhnYyEUETJiBMaUutkJIQitnzECGHNkI54SJG0waNk1FBCsXYigTQwvV4TEUIg4fXgp0tF1QbXUMQIYfWU4gw0EGuqCKFk3Z2SkwI3vbOkKKEhLU6hRxq1+kIyEA0fTstJgZs+RDWsicb45DQcG+J+LUZNaj6dVjMEDfGpKUUJnclPl4i6TRyE8PzUJATmZ8Qd4eupNUPQEF8jGlaNxxMkfIxkC8k6uVAKgynM+VvC5vPptUP9uRkhPP6J4KQFU8Nbwj8nlw5hQuxFCI/9bQXO9DsvQrionCBhZfH/ivD6JAmvI4Tnp5cOQUI8/0d47PaP8PjtH+Hx2z/C47d/hMdv/wiP3/4RHr/9Izx++0d4/EYm1PUDuOt5N9D6213r/X69X/f33hZ/FLEoJML+8/VFv+Bm5H7/5vqJXC86AKtc3DyP/94D+zt+fprAH5Ep9cynx+4nEg6uuT+3708XBezp+bXFkXYzAJar59szz2m5U8tSFMuaui1n8Xp/o5Mg9fpd1uMn6O0kQr3f5DjFbRWypsJxXiZhvV8Zn/1pWiL8ygrDarrNafBnxXK91/d+5uK6yXn24x8LEfafDE4o/j0bAjfNKGR9cPHasqrwMs7yNrOXt7e3xseq7Sj+j5Spd5+x7Vh/mmY/fHFZhHBwG/8aFE5xOkr0u144Y+kpHPL1L+DPYje1IQ7uzqaw3sB1082brKqqBgz83m0sRE6Etyut+0H6wpd7x0r5thngEG6nMYoiEgkX4JGhLPADFG/WVWUloqvAKW9m92MJ61/Y/hw8bGZfXSY+Dlj/v4fdpW3Z1JiIqeZbLyg7J7aeByl1pNf1u/drkRNQ74J/na7WsqrJUUQCoa43g4/x+YTmSh3amtaNETY0zR6qK1fcMQqisLQZDKLef25yfmWD+7pDTY4CMrxs2u3q9mmLi1QZ9f5/F1MUEf5lCUrHyiwfRSQQ9t8V3zPh7WJzZdsauD9JqPK8rNnmqrmrWIFzgTxX8c+r351DP/SvanZtlA8ay9gbJXR0zr1Pj6pXgwtUQ3B9b8iA4rHwF1PZMpIIHxQhuJuzliqoIB6UAkMI65/VbK1jBQKBn1pdlWVGMcB3Jyw8AJybSUAfsR16Mfjk10pqa578d+6Xa18OrmHK7NZ2tUsi9MISie4M8AWFwBPC0mnDDzeoWUFQPkxQHQhifeyGfgwq4MNkMYDwQ9Tlzm+ERTpi/z3mpVMZVHMCMZtQn7hBeRRvbjI8QyAEV5jrpRKUrdq24Q0RxPp9MwCE6mw0LB/8EFVuha4Ofvfu0hqjPpmihI7GRo0f5SDsP1t+cZUOdLmtpRMCBVR5m0sc0//JaBtv+n+t0K3Ab043lZBhzRcjuBI6kJO6R0lvoYRLVY7wsWEbIRA++K1e6chqpARZhOBf5XagoiurgeoBol9bYbk5a2amAgIbLsMcBfV2RmlZ40+UUOQ6UcKdipmEen8BvUpcMkiFZxOCazsGLJnVMEO/hoj9irWL7oLgaekS+n4q7OQGj08ZcsQJ23FCP6RmEtbvgB+InGNqfLQABEJGMz2/X/K5iyVXFX3Q4sQtYHqYCU2GIu5CpLH5H7bvgBIKXNtMEALETML+GLbl5lBFAImEvGa3oEMu9544gn2jnYJcbx+2UkScR7pH0KcrGEYMIZ9EzCaE2VDoxvMWiRCECv+KnqztfrBS9qFdUFZ2JiAMWM7+coFrzTVc/ygPIau20wl1fQE+fjOMJ2YiISPbMxhq3sIADCRpRotiySqJ0PxE0nmHwXQBcxHyaieD8OIPx/WSIYFMCKIh0AA4VwiiLcWIhJxnZ/NBR3+zoiJaL2qyC1iesD5ucsqHmogJOQhZ803hqu2wIZof070ioIGu7Mw445u8d1N4r6cx8S4gDUIwzPEwfcc8GvLqEvRHwuv5pbB3OTCe7JKcFN7URp4hvpiJXm5pQl2/5pRZsvA5CV8Urrf204z6MkWud4lOCm9aKYiIztDv5V5SJbxwQOcKV705CIGbedz0xf8HrRONGiIYxZGdlNEaU4SQk/3mEo03pQnrz1Nhgyt7PkL1E2QF+A/aPNp/BD2IFWZcmLR1D72rHcT0CGJ5wlsBxHtMi8lHCME6GvTXlRi9XODW2R2a0NglepcVTnjsEcsTvoK+LO7Z+QgZtR3GqU5sskHVyIEG3I7eJgiNsGKu6BH+XdyUIdTWy09Y7WsXLYg1zMEHvdzgEMLONseMaBFW6v36VQlC0ANX/aBqoAVpDfNIyKgzC73P3c3LjWgRAru8Gh1O6Jvf/4qIIXJenlAKCD9iQ3hrm0Z5MKqmRggsiViQsBMj7OQi5NUG4t1cOPEDAflgEoYWYRKxECGv9ZByiFyyK4+/b45OUgjKJmiIkJCFIZUaYQKxECEjo84mcMShU/gUJCHCulnCvhAPAPkAkR7hZQyxEKG2VmKEsxz9bv8pDkroT235fAHHqE6NEMSbgwl5842LEX7kJJRjhFxL03goIRsgyiN6hDHEIoSs+YISctxLri4NhtCVISHA8zlAuOnRI0QRCxHaH3HCRj5CJkHY7GrsnpClS4gkxmKEs+TbhVyRhuGThKoPt8WgS1iJhNRvImS8OOFaZbdh5ksId4g/p6G2F/BLCLeIRdthgjBfO2Sx7ZD9UsIQsVi2oBdLmzL6cukrCIPc/1P50GWZLycMskaxPk2XXp9G/QZCH7F0vzQnYaxfKixN9hsIIWLBsYWzfY3kX513bBGbwAJ3Gm1b/g7CymVFLTo+jBD648Nco6fk+HAWI/gqQjDyLEa4Sozx8+RDPjbG5zhlrn6Ll0LCiyJeqjbQUMP1Dp2n0ZhfScgw3VhBpsM8gIz6GQvCS5v9pYRabL5UzDlf2o66qCAIH3GAX0OozpDLBa6br1OzRMuvaGif7RcRMkjq9lN+nmCK3uWH4N/qpcDfosuzck4nam/N/U3w9eM6sZbkFxE2msj1rVzvD6O+DRcrDGWeP4CQ+Q5CEGvE6DtghbhQARJuUAnj6f5XaRiIKOyLm6fvLXuIhD2GTZT+FxECTzEiazFAZiNqqM2nkRvg2/ZE2fMQ8vx3EXYjfUyQ83lSRmTNGRclXOLWApEJ+e9qh2AcPFP2yzFgH5rgprK6jAI2G1oSMJeX8t9EyDD2MrKuTXAI0TS6lBz66KeKkTCPhvz3EWpDZG0iYTZKHrYjaxOFjslgAHGEcb4DCesHELKqFllfKi4z7+A1db+cWOAcGeejccLE+lL+cA3rTyJK+JIjv8l2Q9mvEQ5X2qRVh73ZAwqteXJlbEDoooTxNcKHa9i/ERBC8SMHIYw2O2FAwpDTFgmDqlfX4ZX+YuqGieVjebmJeim6zju0wwjHHELIEUNjUHR1Nt2v1V+liciDAO/sghLXSgEEl8Vm8ThPi/CxZQgHt7Fp7E3OWWz1w90hNvHBhve3lFR3gL15ioJA6dhMLOdGQmkpwqv/PGRuCYQC7O4XHGKjF+xQgWXvqom7/Lq3V1awbQgU31tj+jKBycPPWEWL2wbL7yU8hHDSv0LqDhblzZbzvW1Rux3B3/cErKcmEIGCrD2bbvc9KW0ZmyZgmJS1oYUWA27skuXw7RR/OGF90Edn+YI1Z0N/PpqMqJkvQRSBG7dsm0crhpeZYRCPwJCXc19UPCAry4wNVyHHEWdDlZflvYBFCf2dyU8PSvyTwX/VzVxWTTNrE8XWEe1hp+prKML+9G45P8uAumfM7jJIERynbMy0IKqpWnc2TRYDqDhnVZXhDySsPz2cea6/rwyzd1Nsep3PeR5EbTj3FDHIjc6sCzeP+uqCoq0/p+H+SmvZtRl8GmSZt42/iRRTEE5wl59r5kBC4J2hM2As+KGbmuUQXzTtxrIZbMETe+1ZY97tdtdvL6tO0/+ZoDSXazslzQPAtbt/Iq4YHYY9iFDv95ok6+GWFGMQGdNcbxzX8gtkTFuO4/TCv4mW63x27dQQCgm97FJsDm2HOt8gWcaGtDijamrzVcdpNS0lVENUrGbP66zmmonvh+4Qu5mFeJMP9dKKbqoEywsIGUG8MFV5/jL73LQ7nU67vVnNXtYs/BCWTU5ZIIjZpTg40gAb8SwSilHL3suENbhJXQ22qwf/Y3gSHtFihSqYD0dMvv5ZAS13fwi4StDhq/2Qt9y0LVxtWFK5cDxYlpA+YrBklOfj072HINLQ8AsQeRp4NAkrl5h10aUA/Rb4VRIeNHqiiQjLxexXG5bho0hYwa1uLwFJATAlypQgpKliecDsJH0gIRXEcFF6+TCTAXg4YYVCSOUZGk0wG7AEIcgaJbs34bL78ok+g68MYdnEyFIBJPGVIgRZo5SAVDoyJL5yhOUQmTDTfy0hnIcuQVgm9/M0XJRICB9TirBycNagA0gOMyW99HBESnkivSezU5AC4UGIQQnK8hHjqG/lCQvnfjppgpgotvWIEB52zkzBxMhT6mznCDLwGYy8LH9WUKGswUe3EH4ZHx+6CSClQVgAEc470cAj92VCxJiGB5/ZlT8x7h9dFjHTRfdzW0zXoXLuWl7EELC0ZWu3nRKGVzLr6Llrpc7Oy4FIpwWSAFFHYeYutfMPyYg8lSjKZyfCXTYKnqM1phHCkmdY5lHxm3oy+5kDbaaIO8Ky55ASEiMtBYldUeQx2srYE5Y+SzYL8bt6MqF+u+eoG+Q84OtSgFmJkacVRjP5toTRiuzQPdP5soJ/hchvX798LR8aZPwbuuiZzjTO5cbGm2C49NWJHtMSmDlyLjeds9UxiPz3tMHdS8idydpL9Gz1ak16SP+a8BKIlABzDQfRx8jqJ8iGkWwhLaiccIEihgUrzZcryKCAvKx5CCHI+XdUTphAsgaduXs+VyKMOwrTtVDCqjSm4aZoYqSU6Qk9GSygbM5gnIkQGtL1gAZhBHH77NKAOQRMVKM8hIPDCGG1JtZyHBGSC7ESxpivfEcfI0w6CqP6kTRKaEiPAyqEwMIoSkFCMiB2NQcv2yvopFFCEE1bmceDFLLRNo6W48tByOOXAjAqHBuihACRTqzZI35TTwZTj7L5EUAhhKBvSk9EuErsGwDTRi2M6mAIgYoURayMStL5hCS+lKYAJDQCJFTDWtWhef741Rc3wrS5HxlIyPdgIE1qWDVuKYp4efWFeJE2mMiEQMLPUMIYIRhhuDnO28qPWElZb0+FcCtgEpDV1m4oYULDqnhNKe2XRiQJGI46E2MmWebht6RXsRpCEa17mofoXR4eb0htMM1DWTgDpWwlTGgIxvruO91zAg9DJL2dSBt3QkLtzZVqNbyGflI8+A0GTUTCeCk1D8I4KntShCdOCNnPKMZTH7F4YyRMbWe95OHVToCRpiEcY5BO9yuMWBgvM9AwqQMmuEXP/jTEWoaGPqJBb5Dh22XR3J9n8h7DB3+3/XnuahYhHFIZt7QRCzhqFtsWENPjlf1fANAnyNbwxxFzBBl8nuCHcUAsYYD4QHGYUSmW+wkv0PgUQriJ+DMOiCeEF4m1swnl83NHOfnIiTCoBgRPhlsT5U5NjAGmEPqIVe+dZgeuEo4Yy/GlLH2HbZDRGk41AZhG6EstuY91yt0bEmKexWopk5OatnKluItmEFb9Dpy1eKLbGkekudODumo8EBCe2yfVcBgZhMBTRfehQpMxM6Ty+WZG+cSYF/DJn66Y9FACod/1EY0/93WKjBmIPCHNh20wAQj4tFnPEKs4BQmEgVcbzt96+gG9FBHzRNFkP4ax1Q+fDycgkTCMOJJ7W/+PGmQKYtoOu5iCu0YIv3hA1uyh9ulK6XxkQp+xJkk17/GCeGZ2Xhthd2rnXq0WXs5oKtNdObBw6Xx5CKEZhihJlvMwvrmrBAe9QzsU8FIfJdXCrgBIvGsNdp3CU6Dl7vxj41iSJBrZZc9HWKvVDFBXkjF1Fq+398/vTxeTyVXBY+WjNtIiRtpCvdstDLhkQPb2Mlu1l72pIUH5avgAU5Aw8NUabJLgQw3/qPfF4uz87GDrHGZLbwk37/vVLYl+kcglz0e40xLWmPTDJopVsnYJwtO1gFAQT9g4oYL7Go2Tsgr2O1lOxzju/wADLO2vcNtRmgAAAABJRU5ErkJggg=="
          alt=""
        />
        
        <Link to="/">Home</Link>
        <Link to="/science">Science</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/health">Health</Link>
        <Link to="/sports">Sports</Link>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by topic"
          className="border-2 border-blue-300 px-2 focus:outline-none focus:border-none focus:ring focus:ring-600 mr-3"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className=" border-2 border-blue-500 px-2">Search</button>
      </form>
    </nav>
  );
};

export default Navbar
