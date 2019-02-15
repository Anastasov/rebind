package student.manchester.util;

import org.springframework.core.task.SimpleAsyncTaskExecutor;

import java.util.Collection;
import java.util.concurrent.Callable;

import static org.junit.Assert.fail;

/**
 * @author Anastas Anastasov
 * on 1/30/2019.
 */
public final class AssertUtil {

    private static final SimpleAsyncTaskExecutor executor = new SimpleAsyncTaskExecutor();
    public static final String DEFAULT_ERROR_MESSAGE = "Expected the action to throw an exception, but it didn't";

    private AssertUtil() {
        // private ctor
    }

    public static void assertExceptionIsThrown(final Callable when) {
        assertExceptionIsThrown(when, DEFAULT_ERROR_MESSAGE);
    }

    public static void assertExceptionIsThrown(final Callable when, final String errorMessage) {
        assertExceptionIsThrown(when, errorMessage, null);
    }

    public static void assertExceptionIsThrown(final Callable when, final Class<? extends Throwable> expectedException) {
        assertExceptionIsThrown(when, DEFAULT_ERROR_MESSAGE, expectedException);
    }

    public static void assertExceptionIsThrown(final Callable when, final String errorMessage,
                                        final Class<? extends Throwable> expectedException) {
        try {
            when.call();
            fail(errorMessage);
        } catch (final Exception exception) {
            if(expectedException != null && !expectedException.equals(exception.getClass())) {
                fail("Expected Exception of type " + expectedException.getCanonicalName()
                        + " to be thrown, but was actually " + exception.getClass().getCanonicalName());
            }
        }
    }

    public static void assertExceptionIsNotThrown(final Callable when) {
        try {
            execute(when);
        } catch (final Exception exception) {
            fail(exception.getMessage());
        }
    }

    public static boolean isNotEmpty(final Collection<?> anyCollection) {
        return anyCollection != null && !anyCollection.isEmpty();
    }

    public static boolean areTheSame(final Object firstThing, final Object secondThing) {
        return bothAreNull(firstThing, secondThing) || firstThing.equals(secondThing);
    }

    public static boolean areNotTheSame(final Object firstThing, final Object secondThing) {
        return !areTheSame(firstThing, secondThing);
    }

    public static boolean onlyOneOfThemIsNull(final Object firstThing, final Object secondThing) {
        return (firstThing != null && secondThing == null)
                || (firstThing == null && secondThing != null);
    }

    public static boolean bothAreNull(final Object firstThing, final Object secondThing) {
        return firstThing == null && secondThing == null;
    }

    private static void execute(final Callable when) throws Exception {
        when.call();
    }
}
