package io.kestra.core.runners.pebble;

/**
 * A wrapper class for values that should not be re-rendered as Pebble templates.
 * This is used primarily for secret values that may contain Pebble syntax (like {#, {%)
 * that should be treated as literal text, not template code.
 */
public final class SecretValue {
    private final String value;

    private SecretValue(String value) {
        this.value = value;
    }

    /**
     * Creates a new SecretValue wrapping the given string.
     *
     * @param value the secret value to wrap
     * @return a new SecretValue instance
     */
    public static SecretValue of(String value) {
        return new SecretValue(value);
    }

    /**
     * Returns the wrapped secret value.
     *
     * @return the secret value
     */
    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SecretValue that = (SecretValue) o;
        return value.equals(that.value);
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }
}
