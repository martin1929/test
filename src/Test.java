import java.time.Clock;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;
import java.util.Set;
import java.util.function.BiFunction;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Test {
    public static void main(String[] args) {

        Predicate<Integer>predicate=x->x>5;
        List<Integer>list=new ArrayList<>();
        list.add(1);
        list.add(89);
        list.add(3);


        LocalDate localDate= (LocalDate) LocalDate.now();
        LocalDate localDate1= (LocalDate)LocalDate.now(Clock.systemUTC());
        System.out.println(localDate);
        System.out.println(localDate1);
        }

    }


